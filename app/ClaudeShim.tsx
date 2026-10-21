"use client";

import { useEffect } from "react";
import { upload } from "@vercel/blob/client";

type Doc = { id: string; data: Record<string, unknown> };
const POLL_MS = 4000;

// recria no navegador a API window.claude.use(...) que o painel usava no claude.ai
// (db, assets, user, mcp, downloads), agora apoiada nas rotas /api deste projeto
function installShim(health: { db: boolean; blob: boolean }) {
  const db = health.db
    ? {
        doc(path: string) {
          const [collection, id] = path.split("/");
          const url = `/api/db/${collection}/${encodeURIComponent(id)}`;
          return {
            async set(data: unknown) {
              const r = await fetch(url, { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
              if (!r.ok) throw new Error("write_failed");
            },
            async delete() {
              const r = await fetch(url, { method: "DELETE" });
              if (!r.ok) throw new Error("write_failed");
            },
          };
        },
        collection(collection: string) {
          return {
            onSnapshot(next: (qs: unknown) => void, error?: (e: unknown) => void) {
              let prev = new Map<string, string>();
              let stopped = false;
              let timer: ReturnType<typeof setTimeout>;
              const tick = async () => {
                try {
                  const r = await fetch(`/api/db/${collection}`, { cache: "no-store" });
                  if (!r.ok) throw new Error("read_failed");
                  const { docs } = (await r.json()) as { docs: Doc[] };
                  const cur = new Map(docs.map(d => [d.id, JSON.stringify(d.data)]));
                  const changes: { type: string; doc: { id: string; data: () => unknown } }[] = [];
                  const mk = (id: string, raw: string | undefined) => ({ id, data: () => (raw ? JSON.parse(raw) : {}) });
                  for (const [id, raw] of cur) {
                    if (!prev.has(id)) changes.push({ type: "added", doc: mk(id, raw) });
                    else if (prev.get(id) !== raw) changes.push({ type: "modified", doc: mk(id, raw) });
                  }
                  for (const [id] of prev) if (!cur.has(id)) changes.push({ type: "removed", doc: mk(id, undefined) });
                  const first = prev.size === 0 && !(tick as unknown as { done?: boolean }).done;
                  prev = cur;
                  (tick as unknown as { done?: boolean }).done = true;
                  if (changes.length || first) next({ metadata: { fromCache: false }, docChanges: () => changes });
                } catch (e) {
                  if (!stopped && error) error(e);
                }
                if (!stopped) timer = setTimeout(tick, POLL_MS);
              };
              tick();
              return () => { stopped = true; clearTimeout(timer); };
            },
          };
        },
      }
    : null;

  const assets = health.blob
    ? {
        async upload(file: Blob & { name?: string }, opts?: { type?: string }) {
          const type = opts?.type || file.type || "application/octet-stream";
          const ext = (type.split("/")[1] || "bin").split(";")[0].replace("quicktime", "mov");
          const name = file.name || `arquivo.${ext}`;
          const res = await upload(`black-ugc/${name}`, file, { access: "public", handleUploadUrl: "/api/upload", contentType: type, multipart: file.size > 8 * 1024 * 1024 });
          return { id: res.url, url: res.url, contentType: type };
        },
        async delete(id: string) {
          await fetch("/api/upload", { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ url: id }) });
        },
      }
    : null;

  const mcp = {
    async callTool(_server: string, _tool: string, args: { url: string }) {
      const r = await fetch(`/api/extract?target=${encodeURIComponent(args.url)}`, { cache: "no-store" });
      return { payload: await r.json() };
    },
  };
  const downloads = {
    async save({ filename, data }: { filename: string; data: Blob }) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(data);
      a.download = filename;
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    },
  };
  const user = { async can() { return true; } };

  const caps: Record<string, unknown> = { db, assets, user, mcp, downloads };
  (window as unknown as { claude: unknown }).claude = { use: async (name: string) => caps[name] ?? null };
}

export default function ClaudeShim() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let health = { db: false, blob: false };
      try { health = await (await fetch("/api/health", { cache: "no-store" })).json(); } catch {}
      if (cancelled) return;
      installShim(health);
      const s = document.createElement("script");
      s.src = "/app.js";
      document.body.append(s);
    })();
    return () => { cancelled = true; };
  }, []);
  return null;
}
