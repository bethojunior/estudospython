import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// repassa a busca de imagem/preço (Pinterest, lojas) para a função pública usada pelo painel original
const ALLOWED_HOST = "project-y8i62.vercel.app";

export async function GET(req: Request) {
  const target = new URL(req.url).searchParams.get("target") || "";
  let u: URL;
  try { u = new URL(target); } catch { return NextResponse.json({ ok: false, error: "bad_url" }, { status: 400 }); }
  if (u.hostname !== ALLOWED_HOST || u.pathname !== "/api/extract") return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  try {
    const r = await fetch(u.toString(), { cache: "no-store" });
    return NextResponse.json(await r.json());
  } catch {
    return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
  }
}
