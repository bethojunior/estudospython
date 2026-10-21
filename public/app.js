(() => {
"use strict";

/* ---------- ícones (lucide) ---------- */
const ICONS = {
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
  x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  video:'<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  film:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  package:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 2.004 0L20.7 7"/>',
  chevDown:'<path d="m6 9 6 6 6-6"/>',
  chevUp:'<path d="m18 15-6-6-6 6"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
  drive:'<path d="m12 2 7.5 13H4.5z"/><path d="M4.5 15 8 21h8l3.5-6"/><path d="M12 2 8 9"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
  instagram:'<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  mapPin:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  extLink:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  shirt:'<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  image:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  chevLeft:'<path d="m15 18-6-6 6-6"/>',
  chevRight:'<path d="m9 18 6-6-6-6"/>',
  expand:'<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  pin:'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
  shoe:'<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
  pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  trash:'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
};
const icon = name => { const s = document.createElementNS("http://www.w3.org/2000/svg","svg"); s.setAttribute("viewBox","0 0 24 24"); s.setAttribute("class","icon"); s.setAttribute("aria-hidden","true"); s.innerHTML = ICONS[name]; return s; };

/* ---------- estrutura do plano (vinda do briefing) ---------- */
const PHASES = [
  {id:"bn", name:"Black November", dates:"01 a 22/11", off:"R$ 120 OFF", pair:"+20% no 2º par", start:"2026-11-01", end:"2026-11-22"},
  {id:"bw", name:"Black Week",     dates:"23 a 26/11", off:"R$ 150 OFF", pair:"+20% no 2º par", start:"2026-11-23", end:"2026-11-26"},
  {id:"bf", name:"Black Friday",   dates:"27/11",      off:"R$ 180 OFF", pair:"+30% no 2º par", start:"2026-11-27", end:"2026-11-27"},
  {id:"rs", name:"Ressaca",        dates:"28/11 em diante", off:"R$ 120 OFF", pair:"+20% no 2º par", start:"2026-11-28", end:null},
];
const PHASE_BY = Object.fromEntries(PHASES.map(p => [p.id, p]));
const STATUSES = [
  {id:"sem", label:"Sem roteiro"},
  {id:"roteiro", label:"Roteiro pronto"},
];
const TYPES = {
  estetico:"Feed estético", falado:"UGC falado", unboxing:"Unboxing",
  black:"Feed UGC Black Friday", cred:"UGC credibilidade", chega:"UGC como chega",
};
const phaseSlots = (prefix, type) => PHASES.map(p => ({id:`${prefix}-${p.id}`, type, phase:p.id, fixedPhase:true}));
const unbox = (prefix, n, brand) => Array.from({length:n}, (_, i) => ({id:`${prefix}-unb-${i+1}`, type:"unboxing", phase:brand === "GLLAD" ? "coringa" : null}));

const CREATORS = [
  {id:"karol", name:"Karol Sales", brand:"GLLAD", day:"21/10", weekday:"Quarta-feira", period:"Manhã",
   slots:[...phaseSlots("karol-est","estetico"), ...unbox("karol",4,"GLLAD")]},
  {id:"amanda", name:"Amanda", brand:"GLLAD", day:"21/10", weekday:"Quarta-feira", period:"Tarde",
   slots:[...phaseSlots("amanda-ugc","falado"), ...unbox("amanda",2,"GLLAD")]},
  {id:"larissa", name:"Larissa", brand:"GLLAD", day:"23/10", weekday:"Sexta-feira", period:"Manhã",
   slots:[...unbox("larissa",6,"GLLAD")]},
  {id:"mariana", name:"Mariana", brand:"AIROW", day:"23/10", weekday:"Sexta-feira", period:"Tarde",
   slots:[{id:"mariana-black",type:"black",phase:null},{id:"mariana-cred",type:"cred",phase:null},{id:"mariana-chega",type:"chega",phase:null}, ...unbox("mariana",5,"AIROW")]},
];
const SLOT_META = {};
CREATORS.forEach(c => c.slots.forEach((s, i) => SLOT_META[s.id] = {...s, creator:c, n:i+1}));

/* ---------- estado ---------- */
const state = {slots:{}, phases:{}, products:{}, previews:{}, narrations:{}, creators:{}, locations:{}, brief:{}};
const blank = kind => kind === "slots"
  ? {script:"", inspo:"", notes:"", status:"sem", phase:null, product:null, products:[], media:[]}
  : kind === "narrations" ? {text:""}
  : kind === "creators" ? {name:"", instagram:"", photo:"", photoId:""}
  : kind === "locations" ? {name:"", address:"", day:"", creators:[], notes:"", photo:"", photoId:"", createdAt:""}
  : {script:"", inspo:"", media:[]};
const get = (kind, id) => state[kind][id] || (state[kind][id] = blank(kind));

let db = null, assets = null, canWrite = true, localMode = false;
const LS_KEY = "black-ugc-board-v1";
const ui = {brand:"all", hideDone:false, expandAll:false, open:{}};
try { Object.assign(ui, JSON.parse(localStorage.getItem("black-ugc-ui") || "{}")); } catch {}
const saveUi = () => { try { localStorage.setItem("black-ugc-ui", JSON.stringify(ui)); } catch {} };

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") n.className = v;
    else if (k === "text") n.textContent = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? "" : v);
  }
  kids.flat().forEach(c => c != null && n.append(c));
  return n;
};
// replaceChildren transforma null em texto "null"; este helper ignora vazios
const fill = (node, ...kids) => node.replaceChildren(...kids.flat().filter(k => k != null && k !== false));
function toast(msg){
  const t = el("div",{class:"toast",role:"status"}, icon("info"), el("span",{text:msg}));
  const box = $("#toaster"); box.append(t);
  while (box.children.length > 3) box.firstChild.remove();
  setTimeout(() => t.remove(), 3600);
}
const URL_RE = /https?:\/\/[^\s<>"']+/g;
const phaseVar = id => id && id !== "coringa" ? `var(--ph-${id})` : "var(--ph-coringa)";
// "Aprovado" e "Gravado" saíram do seletor; gravado agora é só o check (campo `done`).
// Vídeos antigos com esses status continuam lidos corretamente.
const isDone = d => d.done === true || (d.done !== false && d.status === "gravado");
const normStatus = d => { let s = d.status || "sem"; if (s === "gravado") s = d.prevStatus || "roteiro"; if (s === "aprovado" || s === "gravado") s = "roteiro"; return s === "sem" ? "sem" : "roteiro"; };
const statusVar = s => `var(--st-${s || "sem"})`;
const mediaUrl = m => m.url || ("/_blob/" + m.id);

/* ---------- salvar ---------- */
const timers = {}, inflight = {}, again = {};
let busy = 0;
function setSaveState(){
  const s = $("#savestate"), label = s.lastChild;
  if (localMode) { s.className = "save local"; label.textContent = "Salvo neste navegador"; return; }
  const pending = busy > 0 || Object.values(timers).some(Boolean);
  s.className = "save" + (pending ? " busy" : "");
  label.textContent = pending ? "Salvando…" : (canWrite ? "Tudo salvo" : "Somente leitura");
}
function scheduleSave(kind, id, delay = 700){
  const k = kind + "/" + id;
  clearTimeout(timers[k]);
  timers[k] = setTimeout(() => { timers[k] = null; save(kind, id); }, delay);
  setSaveState();
}
async function save(kind, id){
  const k = kind + "/" + id;
  if (localMode) { persistLocal(); setSaveState(); return; }
  if (!db) return;
  if (inflight[k]) { again[k] = true; return; }
  inflight[k] = true; busy++; setSaveState();
  try {
    await db.doc(k).set(JSON.parse(JSON.stringify(get(kind, id))));
    scanPins(kind, id);
  } catch (e) {
    if (e && e.code === "invalid_argument") { canWrite = false; applyReadOnly(); toast("Você não tem permissão para editar este painel."); }
    else if (e && e.code === "unavailable") { setTimeout(() => scheduleSave(kind, id, 0), 1500 + Math.random()*1000); }
    else if (e && e.code === "quota_exceeded") toast("Limite de armazenamento atingido.");
    else toast("Não consegui salvar. Tente de novo em instantes.");
  }
  inflight[k] = false; busy--;
  if (again[k]) { again[k] = false; save(kind, id); }
  setSaveState();
}
function persistLocal(){ try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch {} }
const isLocalNewer = (kind, id) => { const k = kind + "/" + id; return !!(timers[k] || inflight[k]); };

/* ---------- mídia ---------- */
const uploading = {};
async function addFiles(kind, id, files){
  if (!canWrite) { toast("Somente leitura."); return; }
  const list = [...files].filter(f => /^(image|video)\//.test(f.type));
  if (!list.length) { toast("Arraste fotos ou vídeos."); return; }
  if (!assets) { toast(localMode ? "Upload de arquivos precisa do painel publicado." : "Envio de arquivos disponível só para editores."); return; }
  const k = kind + "/" + id;
  for (const f of list) {
    if (f.size > 20 * 1024 * 1024) { toast(`"${f.name}" passa de 20 MB. Cole o link do vídeo no campo do cartão.`); continue; }
    uploading[k] = (uploading[k] || 0) + 1; renderMedia(kind, id);
    try {
      const r = await assets.upload(f);
      get(kind, id).media.push({id:r.id, url:r.url, type:r.contentType || f.type, name:f.name});
      scheduleSave(kind, id, 0);
    } catch (e) {
      const c = e && e.code;
      toast(c === "too_large" ? `"${f.name}" é grande demais (máx. 20 MB).`
        : c === "unsupported_type" ? `Formato de "${f.name}" não suportado.`
        : c === "rate_limited" ? "Muitos envios seguidos. Espere alguns segundos."
        : c === "quota_or_state" ? "Espaço de arquivos cheio."
        : `Falha ao enviar "${f.name}".`);
    }
    uploading[k]--; renderMedia(kind, id);
  }
}
async function removeMedia(kind, id, mid){
  const d = get(kind, id);
  const item = d.media.find(m => m.id === mid);
  d.media = d.media.filter(m => m.id !== mid);
  renderMedia(kind, id); scheduleSave(kind, id, 0);
  if (assets && item && !item.link) { try { await assets.delete(mid); } catch {} }
}

function openDialog(m){
  const isVid = /^video\//.test(m.type || "");
  const media = isVid ? el("video",{src:mediaUrl(m),controls:true,playsinline:true,autoplay:true}) : el("img",{src:mediaUrl(m),alt:m.name || ""});
  const closeBtn = el("button",{class:"btn btn-ghost btn-sm",type:"button","aria-label":"Fechar"}, icon("x"));
  const ov = el("div",{class:"dialog-overlay"},
    el("div",{class:"dialog",role:"dialog","aria-modal":"true","aria-label":m.name || "Mídia"},
      el("div",{class:"dialog-head"}, el("h4",{text:m.name || (isVid ? "Vídeo" : "Imagem")}), closeBtn),
      media));
  const close = () => { ov.remove(); document.removeEventListener("keydown", onKey); };
  const onKey = e => { if (e.key === "Escape") close(); };
  closeBtn.addEventListener("click", close);
  ov.addEventListener("click", e => { if (e.target === ov) close(); });
  document.addEventListener("keydown", onKey);
  document.body.append(ov); closeBtn.focus();
}

/* ---------- arrastar e soltar ---------- */
function makeDroppable(node, kind, id){
  let depth = 0;
  const hasFiles = e => [...(e.dataTransfer?.types || [])].includes("Files");
  node.addEventListener("dragenter", e => { if (!hasFiles(e)) return; e.preventDefault(); depth++; node.classList.add("dragging"); });
  node.addEventListener("dragover", e => { if (!hasFiles(e)) return; e.preventDefault(); e.dataTransfer.dropEffect = "copy"; });
  node.addEventListener("dragleave", () => { depth = Math.max(0, depth - 1); if (!depth) node.classList.remove("dragging"); });
  node.addEventListener("drop", e => { if (!hasFiles(e)) return; e.preventDefault(); depth = 0; node.classList.remove("dragging"); addFiles(kind, id, e.dataTransfer.files); });
}
window.addEventListener("dragover", e => e.preventDefault());
window.addEventListener("drop", e => e.preventDefault());

let pickTarget = null;
$("#filePick").addEventListener("change", e => { if (pickTarget) addFiles(pickTarget[0], pickTarget[1], e.target.files); e.target.value = ""; });

/* ---------- componentes ---------- */
const nodes = {};

function dropzone(kind, id, label, sub){
  const thumbs = el("div",{class:"thumbs"});
  const mlinks = el("div",{class:"mlinks"});
  const add = el("button",{class:"btn btn-outline btn-sm upload-btn",type:"button",onclick:() => { pickTarget = [kind,id]; $("#filePick").click(); }}, icon("upload"), "Enviar");
  const hint = el("span",{class:"dz-text"}, el("b",{text:label || "Fotos e vídeos de referência"}), el("span",{class:"dz-sub",text:sub || "Arraste os arquivos para cá","data-default":sub || "Arraste os arquivos para cá"}));
  const linkIn = el("input",{class:"input",type:"url",id:`lk-${kind}-${id}`,placeholder:"Ou cole o link do vídeo (Drive, TikTok, Instagram…)","aria-label":"Link do vídeo",inputmode:"url"});
  const linkBtn = el("button",{class:"btn btn-outline btn-sm",type:"submit"}, icon("link"), "Adicionar");
  const form = el("form",{class:"link-form"}, linkIn, linkBtn);
  form.addEventListener("submit", e => { e.preventDefault(); if (addLink(kind, id, linkIn.value)) linkIn.value = ""; });
  const wrap = el("div",{class:"dropzone",tabindex:"0","aria-label":(label || "Fotos e vídeos") + ". Arraste ou cole um arquivo aqui."}, thumbs, mlinks, el("div",{class:"dz-row"}, el("span",{class:"dz-icon"}, icon("upload")), hint, add), form);
  // colar (Cmd+V / Ctrl+V) um vídeo ou imagem copiado com a área selecionada
  wrap.addEventListener("paste", e => {
    const files = [...(e.clipboardData?.files || [])];
    if (files.length) { e.preventDefault(); addFiles(kind, id, files); }
  });
  return {wrap, thumbs, mlinks, add};
}

function addLink(kind, id, raw){
  if (!canWrite) { toast("Somente leitura."); return false; }
  let v = (raw || "").trim();
  if (!v) return false;
  if (!/^https?:\/\//i.test(v)) v = "https://" + v;
  let u; try { u = new URL(v); } catch { toast("Esse link não parece válido. Confira e cole de novo."); return false; }
  if (!/\./.test(u.hostname)) { toast("Esse link não parece válido. Confira e cole de novo."); return false; }
  const d = get(kind, id);
  if (d.media.some(m => m.link && m.url === u.href)) { toast("Esse link já está no cartão."); return false; }
  d.media.push({id:"lnk_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), link:true, url:u.href, name:u.hostname.replace(/^www\./,"")});
  renderMedia(kind, id); scheduleSave(kind, id, 0);
  return true;
}
function linkLabel(url){
  try { const x = new URL(url); const p = x.pathname.length > 1 ? x.pathname.slice(0, 28) + (x.pathname.length > 28 ? "…" : "") : ""; return x.hostname.replace(/^www\./,"") + p; } catch { return url; }
}

function textField(kind, id, key, label, cls, placeholder){
  const ta = el("textarea",{class:"textarea " + (cls || ""), id:`${kind}-${id}-${key}`, placeholder});
  ta.addEventListener("input", () => { get(kind, id)[key] = ta.value; onTextChange(kind, id, key); scheduleSave(kind, id); });
  return {wrap: el("div",{}, el("label",{class:"label",for:ta.id,text:label}), ta), ta};
}

function onTextChange(kind, id, key){
  const n = nodes[kind + "/" + id];
  if (key === "inspo") renderLinks(n.links, get(kind, id).inspo);
  if (kind === "slots" && key === "script") {
    const d = get(kind, id);
    renderPreview(id);
  }
}
const hash = str => { let h = 5381; for (let i = 0; i < str.length; i++) h = (((h << 5) + h) + str.charCodeAt(i)) >>> 0; return h.toString(36); };
const cleanUrl = u => u.trim().replace(/[).,;!?]+$/, "");
const previewId = u => "u" + hash(cleanUrl(u));
function linkKind(u){
  let h = ""; try { h = new URL(u).hostname.toLowerCase(); } catch {}
  if (/(^|\.)pinterest\.[a-z.]+$/.test(h) || h === "pin.it") return "pinterest";
  if (/(^|\.)instagram\.com$/.test(h)) return "instagram";
  if (/(^|\.)tiktok\.com$/.test(h)) return "tiktok";
  if (/(^|\.)(drive|docs)\.google\.com$/.test(h)) return "drive";
  if (/(^|\.)youtube\.com$|^youtu\.be$/.test(h)) return "youtube";
  return "web";
}
const canHover = window.matchMedia("(hover: hover)").matches;
const calmMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// no celular não existe "passar o mouse": o vídeo toca enquanto está visível na tela
const videoIO = !canHover && !calmMotion && "IntersectionObserver" in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      const v = e.target, box = v.closest("[data-hv]");
      if (e.isIntersecting && e.intersectionRatio >= 0.6) { v.play().then(() => box && box.classList.add("playing")).catch(() => {}); }
      else { v.pause(); box && box.classList.remove("playing"); }
    }), {threshold:[0, 0.6]})
  : null;
function previewVideo(pv){
  const v = el("video",{class:"pv-video",src:pv.video,poster:pv.image || null,muted:true,loop:true,playsinline:true,preload:"metadata","aria-hidden":"true"});
  v.muted = true;
  if (videoIO) videoIO.observe(v);
  return v;
}
document.addEventListener("mouseover", e => {
  const box = e.target.closest && e.target.closest("[data-hv]");
  if (!box || box.contains(e.relatedTarget)) return;
  const v = box.querySelector("video.pv-video");
  if (v) v.play().then(() => box.classList.add("playing")).catch(() => {});
});
document.addEventListener("mouseout", e => {
  const box = e.target.closest && e.target.closest("[data-hv]");
  if (!box || box.contains(e.relatedTarget)) return;
  const v = box.querySelector("video.pv-video");
  if (v) { v.pause(); v.currentTime = 0; box.classList.remove("playing"); }
});
// links com prévia (imagem + vídeo que toca no hover): pins do Pinterest e arquivos do Google Drive
const isPreviewLink = u => linkKind(u) === "pinterest" || (linkKind(u) === "drive" && /\/(file\/)?d\/[\w-]{20,}|[?&]id=[\w-]{20,}/.test(u));
function pinCard(u){
  const id = previewId(u), pv = state.previews[id], st = pinState[id];
  const isDrive = linkKind(u) === "drive", ic = isDrive ? "drive" : "pin";
  const hasImg = pv && pv.image;
  const wait = st === "loading" ? el("span",{class:"pin-wait"}, el("span",{class:"spinner"}), "Buscando prévia…")
    : el("span",{class:"pin-wait"}, icon(ic), st ? "Sem prévia" : "Prévia em breve");
  const media = !hasImg ? wait
    : pv.video ? [previewVideo(pv), el("span",{class:"pin-play"}, icon("video"))]
    : el("img",{src:pv.image,alt:pv.title || "Pin do Pinterest",loading:"lazy"});
  const card = el("a",{class:"pin" + (isDrive ? " pin-drive" : ""),href:u,target:"_blank",rel:"noopener noreferrer",title:u,"data-hv":pv && pv.video ? "" : null},
    el("div",{class:"pin-img"}, media),
    el("div",{class:"pin-meta"}, icon(ic), el("span",{text:(pv && pv.title) || (isDrive ? "Google Drive" : linkLabel(u))})));
  if (hasImg || !st || st === "loading") return card;
  return el("div",{class:"pin-card"}, card, el("span",{class:"pin-err",text:st}),
    canWrite ? el("button",{class:"btn btn-outline btn-sm pin-retry",type:"button",onclick:() => { delete pinState[id]; autoPin(u); }}, "Tentar de novo") : null);
}
function renderLinks(box, text){
  const urls = [...new Set((text.match(URL_RE) || []).map(cleanUrl))].slice(0, 16);
  const pins = urls.filter(isPreviewLink);
  const others = urls.filter(u => !isPreviewLink(u));
  fill(box,
    others.length ? el("div",{class:"chips"}, ...others.map(u => el("a",{class:`badge badge-outline lk lk-${linkKind(u)}`,href:u,target:"_blank",rel:"noopener noreferrer",title:u}, icon("link"), el("span",{text:linkLabel(u),style:"overflow:hidden;text-overflow:ellipsis"})))) : null,
    pins.length ? el("div",{class:"pins"}, ...pins.map(pinCard)) : null);
}
function renderAllLinks(){
  Object.entries(nodes).forEach(([k, n]) => { if (!n.links) return; const [kind, id] = k.split("/"); renderLinks(n.links, get(kind, id).inspo || ""); renderMedia(kind, id); });
}

function phaseStatus(p){
  const today = new Date(); today.setHours(0,0,0,0);
  const start = new Date(p.start + "T00:00:00"), end = p.end ? new Date(p.end + "T00:00:00") : null;
  if (today < start) { const d = Math.round((start - today) / 86400000); return d === 1 ? "Começa amanhã" : `Em ${d} dias`; }
  if (!end || today <= end) return "No ar";
  return "Encerrada";
}
function buildPhase(p){
  const kind = "phases", id = p.id;
  const script = textField(kind, id, "script", "Roteiro / narração base", "script", `Gancho, argumento e CTA da ${p.name}. Ex.: "Só até ${p.dates}: ${p.off} e ${p.pair}…"`);
  const inspo = textField(kind, id, "inspo", "Inspirações", "", "Cole links do Pinterest, Google Drive, TikTok, Reels…");
  const links = el("div",{class:"links"}); inspo.wrap.append(links);
  const dz = dropzone(kind, id);
  const uses = el("p",{class:"card-description",style:"margin:0"});
  // card só com etapa, datas e oferta; roteiro e inspirações antigos continuam salvos, mas fora da tela
  const step = PHASES.indexOf(p) + 1;
  const root = el("article",{class:"phase-card","data-ph":id,"data-brand":"GLLAD"},
    el("span",{class:"ph-wm","aria-hidden":"true",text:String(step).padStart(2,"0")}),
    el("div",{class:"ph-top"},
      el("span",{class:"ph-step",text:`Etapa ${step}`}),
      el("span",{class:"ph-status",text:phaseStatus(p)})),
    el("div",{class:"ph-mid"},
      el("h3",{class:"ph-name",text:p.name}),
      el("span",{class:"ph-dates"}, icon("calendar"), p.dates)),
    el("div",{class:"ph-offer"},
      el("span",{class:"ph-off",text:p.off}),
      el("span",{class:"ph-pair",text:p.pair})));
  nodes[kind + "/" + id] = {root, script:script.ta, inspo:inspo.ta, links, thumbs:dz.thumbs, mlinks:dz.mlinks, add:dz.add, uses};
  return root;
}

function selectBox(sel, cVar){ const w = el("span",{class:"select"}, sel); if (cVar) w.style.setProperty("--c", cVar); return w; }

function buildSlot(meta){
  const kind = "slots", id = meta.id;
  const brand = meta.creator.brand;
  let phaseCtl = null, phaseSel = null;
  if (meta.fixedPhase) {
    phaseCtl = el("span",{class:"badge badge-outline"}, el("span",{class:"dot",style:`--c:${phaseVar(meta.phase)}`}), PHASE_BY[meta.phase].name);
  } else if (brand === "GLLAD") {
    phaseSel = el("select",{id:`ph-${id}`,"aria-label":"Fase da narração"},
      el("option",{value:"coringa",text:"Coringa"}), ...PHASES.map(p => el("option",{value:p.id,text:p.name})));
    phaseCtl = selectBox(phaseSel, phaseVar("coringa"));
    phaseSel.addEventListener("change", () => { get(kind,id).phase = phaseSel.value; phaseCtl.style.setProperty("--c", phaseVar(phaseSel.value)); scheduleSave(kind,id,0); renderSummary(); });
  }
  const status = el("select",{id:`st-${id}`,"aria-label":"Status"}, ...STATUSES.map(s => el("option",{value:s.id,text:s.label})));
  const statusBox = selectBox(status, statusVar("sem"));
  status.addEventListener("change", () => { const d = get(kind,id); d.done = isDone(d); d.status = status.value; paintStatus(nodes[kind+"/"+id]); scheduleSave(kind,id,0); renderSummary(); applyFilters(); });

  const check = el("input",{type:"checkbox",id:`ck-${id}`,"aria-label":`Marcar ${TYPES[meta.type]} ${meta.n} como gravado`});
  const checkBox = el("label",{class:"check",for:check.id,title:"Marcar como gravado"}, check, el("span",{class:"box"}, icon("check")));
  check.addEventListener("change", () => {
    const d = get(kind,id);
    d.status = normStatus(d); d.done = check.checked;
    paintStatus(nodes[kind+"/"+id]); scheduleSave(kind,id,0); renderSummary(); applyFilters();
  });
  const shoe = el("div",{class:"shoes",id:`shoe-${id}`});
  const typeEl = el("span",{class:"type",text:TYPES[meta.type]});
  const preview = el("div",{class:"preview"});
  const script = textField(kind, id, "script", "Roteiro", "script", scriptPlaceholder(meta));
  script.wrap.classList.add("script-field");
  const inspo = textField(kind, id, "inspo", "Inspirações", "", "Cole links do Pinterest ou do Google Drive");
  const links = el("div",{class:"links"}); inspo.wrap.append(links);
  const notes = textField(kind, id, "notes", "Observações de gravação", "", "Produto, cor, cenário, figurino, take…");
  const fields = el("div",{class:"fields"}, script.wrap, inspo.wrap, notes.wrap);
  const toggle = el("button",{class:"btn btn-ghost btn-sm slot-toggle",type:"button"});
  toggle.addEventListener("click", () => { (ui.openState ||= {})[id] = !isOpen(id); saveUi(); renderOpen(id); if (isOpen(id)) (normStatus(get("slots", id)) === "sem" ? inspo.ta : script.ta).focus(); });
  const dz = meta.type === "chega" ? dropzone(kind, id, "Vídeo de como chega", "Arraste ou cole (Cmd+V) o vídeo aqui") : dropzone(kind, id);

  const copy = el("button",{class:"btn btn-ghost btn-sm slot-copy",type:"button","aria-label":"Copiar o roteiro deste vídeo"}, icon("copy"), "Copiar roteiro");
  copy.addEventListener("click", () => {
    const txt = (get(kind, id).script || "").trim(); if (!txt) return;
    const done = () => { fill(copy, icon("check"), "Copiado"); copy.classList.add("ok"); setTimeout(() => { fill(copy, icon("copy"), "Copiar roteiro"); copy.classList.remove("ok"); }, 1800); };
    const fallback = () => { renderOpen(id); script.ta.focus(); script.ta.select(); toast("Texto selecionado. Use Cmd+C ou Ctrl+C para copiar."); };
    try { navigator.clipboard.writeText(txt).then(done, fallback); } catch { fallback(); }
  });
  const root = el("article",{class:"slot","data-brand":brand,"data-id":id},
    el("div",{class:"slot-h"},
      checkBox,
      el("span",{class:"num",text:String(meta.n).padStart(2,"0")}),
      typeEl),
    el("div",{class:"slot-tags"}, phaseCtl, statusBox),
    el("div",{class:"slot-b"}, shoe, preview, fields,
      el("div",{class:"slot-f"}, toggle, copy)));
  nodes[kind + "/" + id] = {root, copy, shoe, typeEl, check, status, statusBox, phaseSel, phaseBox: phaseSel ? phaseCtl : null, preview, fields, toggle,
    script:script.ta, inspo:inspo.ta, notes:notes.ta, links, thumbs:dz.thumbs, mlinks:dz.mlinks, add:dz.add};
  return root;
}
function paintStatus(n){
  const d = get("slots", n.root.dataset.id), s = normStatus(d), done = isDone(d);
  n.status.value = s; n.statusBox.style.setProperty("--c", statusVar(s));
  n.check.checked = done; n.root.classList.toggle("done", done);
  n.root.classList.toggle("no-script", s === "sem");
  if (n.copy) n.copy.hidden = !(d.script || "").trim() || s === "sem";
  renderOpen(n.root.dataset.id);
}
function scriptPlaceholder(m){
  return ({
    estetico:`Sequência de cenas do feed estético (${PHASE_BY[m.phase]?.name || ""}). Cena 1… Cena 2… Texto na tela…`,
    falado:`Fala da creator: gancho nos 3 primeiros segundos, oferta (${PHASE_BY[m.phase]?.off || ""} ${PHASE_BY[m.phase]?.pair || ""}), CTA.`,
    unboxing:"Abertura da caixa, detalhes do produto, reação. A narração da fase entra depois na edição.",
    black:"Roteiro do feed UGC sobre a Black Friday AIROW.",
    cred:"Prova de credibilidade: entrega, qualidade, avaliações, troca fácil…",
    chega:"Como o pedido chega: embalagem, caixa, primeiro contato com o produto.",
  })[m.type] || "";
}
// cartão com inspirações ou observações abre expandido; o que a pessoa abrir/fechar à mão é lembrado
const hasExtras = id => { const d = get("slots", id); return !!((d.inspo || "").trim() || (d.notes || "").trim()); };
const isOpen = id => { if (ui.expandAll) return true; const o = ui.openState && ui.openState[id]; return o === undefined ? hasExtras(id) : o; };
function renderOpen(id){
  const n = nodes["slots/" + id], o = isOpen(id);
  n.fields.hidden = !o; n.preview.hidden = o;
  const d = get("slots",id), has = d.script.trim(), noScript = (d.status || "sem") === "sem";
  n.toggle.replaceChildren(icon(o ? "chevUp" : "chevDown"), noScript ? (o ? "Fechar inspirações" : "Inspirações e observações") : o ? "Fechar roteiro" : (has ? "Editar roteiro" : "Escrever roteiro"));
  n.toggle.setAttribute("aria-expanded", String(o));
}
function renderPreview(id){
  const n = nodes["slots/" + id], s = get("slots", id).script.trim();
  n.preview.textContent = s || "Sem roteiro ainda.";
  n.preview.classList.toggle("empty", !s);
  n.copy.hidden = !s || normStatus(get("slots", id)) === "sem";
  if (!isOpen(id)) renderOpen(id);
}

function renderMedia(kind, id){
  const n = nodes[kind + "/" + id], d = get(kind, id), k = kind + "/" + id;
  const armRemove = (btn, mid) => {
    let armed = null;
    btn.addEventListener("click", e => {
      e.preventDefault(); e.stopPropagation();
      if (armed) { clearTimeout(armed); removeMedia(kind, id, mid); return; }
      btn.classList.add("confirm"); btn.replaceChildren("Remover?");
      armed = setTimeout(() => { armed = null; btn.classList.remove("confirm"); btn.replaceChildren(icon("x")); }, 3000);
    });
    return btn;
  };
  const pinTiles = d.media.filter(m => m.link && linkKind(m.url) === "pinterest").map(m => {
    const pv = state.previews[previewId(m.url)];
    const tile = el("a",{class:"thumb pin-tile",href:m.url,target:"_blank",rel:"noopener noreferrer",title:m.url,"aria-label":"Abrir pin no Pinterest","data-hv":pv && pv.video ? "" : null},
      pv && pv.video ? previewVideo(pv) : pv && pv.image ? el("img",{src:pv.image,alt:"",loading:"lazy"}) : pinState[previewId(m.url)] === "loading" ? el("span",{class:"spinner"}) : icon("pin"),
      el("span",{class:"kind pin-kind"}, icon("pin")));
    const wrap = el("div",{class:"tw"}, tile);
    if (canWrite) wrap.append(armRemove(el("button",{class:"rm",type:"button","aria-label":"Remover link"}, icon("x")), m.id));
    return wrap;
  });
  n.mlinks.replaceChildren(...d.media.filter(m => m.link && linkKind(m.url) !== "pinterest").map(m => {
    const row = el("div",{class:"mlink"},
      el("a",{class:`lk lk-${linkKind(m.url)}`,href:m.url,target:"_blank",rel:"noopener noreferrer",title:m.url}, icon("link"), el("span",{text:linkLabel(m.url)})));
    if (canWrite) {
      const x = el("button",{class:"x",type:"button","aria-label":"Remover link"}, icon("x"));
      let armed = null;
      x.addEventListener("click", () => {
        if (armed) { clearTimeout(armed); removeMedia(kind, id, m.id); return; }
        x.classList.add("confirm"); x.replaceChildren("Remover?");
        armed = setTimeout(() => { armed = null; x.classList.remove("confirm"); x.replaceChildren(icon("x")); }, 3000);
      });
      row.append(x);
    }
    return row;
  }));
  const items = d.media.filter(m => !m.link).map(m => {
    const isVid = /^video\//.test(m.type || "");
    const t = el("button",{class:"thumb",type:"button",title:m.name || "","aria-label":`Abrir ${m.name || "mídia"}`,onclick:() => openDialog(m)},
      isVid ? el("video",{src:mediaUrl(m) + "#t=0.5",muted:true,preload:"metadata",playsinline:true}) : el("img",{src:mediaUrl(m),alt:"",loading:"lazy"}),
      el("span",{class:"kind"}, icon(isVid ? "video" : "film")));
    if (!isVid) t.lastChild.remove();
    const wrap = el("div",{class:"tw"}, t);
    if (canWrite) {
      const rm = el("button",{class:"rm",type:"button","aria-label":"Remover arquivo"}, icon("x"));
      let armed = null;
      rm.addEventListener("click", e => {
        e.stopPropagation();
        if (armed) { clearTimeout(armed); removeMedia(kind, id, m.id); return; }
        rm.classList.add("confirm"); rm.replaceChildren("Remover?");
        armed = setTimeout(() => { armed = null; rm.classList.remove("confirm"); rm.replaceChildren(icon("x")); }, 3000);
      });
      wrap.append(rm);
    }
    return wrap;
  });
  items.unshift(...pinTiles);
  for (let i = 0; i < (uploading[k] || 0); i++) items.push(el("div",{class:"tw"}, el("div",{class:"thumb loading","aria-label":"Enviando"}, el("span",{class:"spinner"}))));
  n.thumbs.replaceChildren(...items);
}

function fillText(ta, v){ if (document.activeElement !== ta && ta.value !== v) ta.value = v; }
function renderDoc(kind, id){
  const n = nodes[kind + "/" + id]; if (!n) return;
  const d = get(kind, id);
  if (kind === "narrations") { fillText(n.ta, d.text || ""); n.paint(); return; }
  if (kind === "creators") { renderCreator(id); return; }
  fillText(n.script, d.script || ""); fillText(n.inspo, d.inspo || "");
  renderLinks(n.links, d.inspo || "");
  if (kind === "slots") {
    fillText(n.notes, d.notes || "");
    paintStatus(n);
    if (n.phaseSel) { n.phaseSel.value = d.phase || "coringa"; n.phaseBox.style.setProperty("--c", phaseVar(n.phaseSel.value)); }
    renderPreview(id); renderOpen(id); renderShoe(id);
  }
  renderMedia(kind, id);
}

/* ---------- busca automática de imagem (função na Vercel, via conector) ---------- */
const EXTRACT_URL = "https://project-y8i62.vercel.app/api/extract?url=";
let mcpP = null;
const getMcp = () => (mcpP ||= (window.claude && typeof window.claude.use === "function" ? Promise.resolve(claude.use("mcp")).catch(() => null) : Promise.resolve(null)));
// o conector devolve a resposta da função embrulhada; procura o JSON {ok, ...} em qualquer nível
function findResult(x, depth = 0){
  if (depth > 6 || x == null) return null;
  if (typeof x === "string") { const i = x.indexOf("{"); if (i < 0) return null; try { return findResult(JSON.parse(x.slice(i, x.lastIndexOf("}") + 1)), depth + 1); } catch { return null; } }
  if (Array.isArray(x)) { for (const v of x) { const r = findResult(v, depth + 1); if (r) return r; } return null; }
  if (typeof x === "object") {
    if (typeof x.ok === "boolean" && ("base64" in x || "error" in x)) return x;
    for (const v of Object.values(x)) { const r = findResult(v, depth + 1); if (r) return r; }
  }
  return null;
}
async function extractImage(url){
  const mcp = await getMcp();
  if (!mcp) throw {code:"no_mcp"};
  if (!assets) throw {code:"no_assets"};
  const call = async video => {
    let r;
    try { r = await mcp.callTool("Vercel", "web_fetch_vercel_url", {url: EXTRACT_URL + encodeURIComponent(url) + (video ? "&video=1" : "")}, {cache:false}); }
    catch (e) { throw {code:(e && e.code) || "upstream_error"}; }
    return findResult(r && r.payload) || findResult(r && r.content);
  };
  // com vídeo a resposta é maior; se não vier inteira, busca de novo só a imagem
  let data = isPreviewLink(url) ? await call(true).catch(() => null) : null;
  if (!data || (!data.ok && !data.error)) data = await call(false);
  if (!data) throw {code:"bad_response"};
  if (!data.ok) throw {code:data.error || "fetch_failed"};
  const bytes = Uint8Array.from(atob(data.base64), c => c.charCodeAt(0));
  const up = await assets.upload(new Blob([bytes], {type:data.contentType}), {type:data.contentType});
  const out = {...data, base64:undefined, videoBase64:undefined, image:up.url, imageId:up.id};
  if (data.videoBase64) {
    try {
      const vb = Uint8Array.from(atob(data.videoBase64), c => c.charCodeAt(0));
      const vu = await assets.upload(new Blob([vb], {type:"video/mp4"}), {type:"video/mp4"});
      out.video = vu.url; out.videoId = vu.id;
    } catch {}
  }
  return out;
}
function extractMsg(e){
  return ({
    no_mcp:"Busca automática indisponível aqui. Abra o painel no claude.ai.",
    no_assets:"Só editores do painel podem buscar fotos.",
    server_not_connected:"Conecte a Vercel em Configurações → Conectores do claude.ai.",
    needs_reauth:"Reconecte a Vercel em Configurações → Conectores do claude.ai.",
    selection_required:"Escolha qual conexão da Vercel usar e tente de novo.",
    not_in_manifest:"A Vercel não foi liberada para este painel.",
    approval_required:"Autorize a Vercel quando o claude.ai perguntar e tente de novo.",
    tool_error:"A Vercel não liberou a função de busca. Autorize o projeto project-y8i62 no conector.",
    server_unavailable:"A Vercel não respondeu. Tente de novo em instantes.",
    product_not_found:"Produto não encontrado nesse link.",
    no_image:"Esse link não tem imagem principal.",
    unsupported_url:"Esse link não é de produto da Shopify nem do Pinterest.",
    not_pinterest:"Esse link não abriu um pin do Pinterest.",
    drive_private:"No Drive, compartilhe o arquivo como “Qualquer pessoa com o link”.",
    drive_not_media:"Esse arquivo do Drive não é vídeo nem imagem.",
    drive_video_failed:"Não consegui ler esse vídeo do Drive. Tente um arquivo MP4 ou MOV.",
  })[e && e.code] || "Não consegui buscar a foto agora.";
}

const extracting = {};
async function autoProduct(pid){
  const p = state.products[pid];
  if (!p || p.image || extracting[pid] || !canWrite) return;
  extracting[pid] = true; renderProducts();
  let doc;
  try {
    const r = await extractImage(p.url);
    doc = {url:r.url || p.url, name:r.title || p.name, image:r.image, imageId:r.imageId, price:r.price ?? null, status:"ready", createdAt:p.createdAt || new Date().toISOString()};
  } catch (e) {
    doc = {...p, status:"error", error:extractMsg(e)};
  }
  state.products[pid] = doc;
  delete extracting[pid];
  renderProducts(); Object.keys(SLOT_META).forEach(renderShoe);
  if (localMode) persistLocal();
  else if (db) { try { await db.doc("products/" + pid).set(doc); } catch { toast("Não consegui salvar a foto do tênis."); } }
}
function productWait(pid, p){
  if (extracting[pid]) return el("div",{class:"pr-wait"}, el("span",{class:"spinner"}), el("span",{text:"Buscando a foto…"}));
  const msg = p.status === "error" ? (p.error || "Não consegui buscar a foto.") : "Foto ainda não buscada.";
  return el("div",{class:"pr-wait"}, icon("shoe"), el("span",{text:msg}),
    canWrite ? el("button",{class:"btn btn-outline btn-sm pr-retry",type:"button",onclick:() => autoProduct(pid)}, p.status === "error" ? "Tentar de novo" : "Buscar foto") : null);
}

const pinState = {}; // id da prévia -> "loading" ou mensagem de erro desta visita
async function autoPin(u){
  u = cleanUrl(u);
  const id = previewId(u);
  if ((state.previews[id] && state.previews[id].image) || pinState[id] || !canWrite) return;
  pinState[id] = "loading"; renderAllLinks();
  try {
    const r = await extractImage(u);
    const doc = {url:u, image:r.image, imageId:r.imageId, title:r.title || ""};
    if (r.video) { doc.video = r.video; doc.videoId = r.videoId; }
    state.previews[id] = doc; delete pinState[id];
    if (db) { try { await db.doc("previews/" + id).set(doc); } catch {} }
  } catch (e) {
    pinState[id] = extractMsg(e);
  }
  renderAllLinks();
}
function scanPins(kind, id){
  if (!canWrite) return;
  const d = get(kind, id);
  const urls = ((d.inspo || "").match(URL_RE) || []).map(cleanUrl);
  (d.media || []).forEach(m => { if (m.link) urls.push(m.url); });
  [...new Set(urls)].filter(isPreviewLink).forEach(autoPin);
}

/* ---------- tênis ---------- */
const prettyName = h => h.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, c => c.toUpperCase());
const productList = () => Object.entries(state.products).sort((a, b) => (a[1].name || a[0]).localeCompare(b[1].name || b[0], "pt-BR"));
function productThumb(p, loading){
  if (p && p.image) return el("span",{class:"sh-img has"}, el("img",{src:p.image,alt:"",loading:"lazy"}));
  return el("span",{class:"sh-img"}, loading ? el("span",{class:"spinner"}) : icon("shoe"));
}
function parseProductUrl(raw){
  let v = (raw || "").trim(); if (!v) return null;
  if (!/^https?:\/\//i.test(v)) v = "https://" + v;
  let u; try { u = new URL(v); } catch { return null; }
  if (!/\./.test(u.hostname)) return null;
  const m = u.pathname.match(/\/products\/([a-z0-9][a-z0-9-]*)/i);
  return {url: u.origin + u.pathname, pid: m ? m[1].toLowerCase().slice(0, 120) : "p" + hash(u.href), handle: m ? m[1] : ""};
}
async function addProduct(raw){
  if (!canWrite) { toast("Somente leitura."); return null; }
  const r = parseProductUrl(raw);
  if (!r) { toast("Esse link não parece válido. Cole o link do produto na loja."); return null; }
  if (state.products[r.pid]) { if (!state.products[r.pid].image) autoProduct(r.pid); return r.pid; }
  const doc = {url:r.url, name:r.handle ? prettyName(r.handle) : "Tênis", image:"", status:"pending", createdAt:new Date().toISOString()};
  state.products[r.pid] = doc; renderProducts();
  if (localMode) persistLocal();
  else if (db) { try { await db.doc("products/" + r.pid).set(doc); } catch (e) { toast("Não consegui salvar o tênis. Tente de novo."); delete state.products[r.pid]; renderProducts(); return null; } }
  toast("Tênis salvo. Buscando a foto…");
  autoProduct(r.pid);
  return r.pid;
}
async function removeProduct(pid){
  delete state.products[pid]; renderProducts(); Object.keys(SLOT_META).forEach(renderShoe);
  if (localMode) persistLocal();
  else if (db) { try { await db.doc("products/" + pid).delete(); } catch { toast("Não consegui remover. Tente de novo."); } }
}
const MAX_SHOES = 2;
// vídeos antigos guardavam um só tênis em `product`; os novos usam a lista `products`
const slotProducts = d => (Array.isArray(d.products) && d.products.length ? d.products : (d.product ? [d.product] : [])).slice(0, MAX_SHOES);
function setSlotProducts(id, list){
  const d = get("slots", id);
  d.products = list.slice(0, MAX_SHOES); d.product = d.products[0] || null;
  renderShoe(id, true); scheduleSave("slots", id, 0); renderProducts();
}
const shoeEdit = {}; // id do vídeo -> posição em edição, ou "new"
const productInUse = pid => Object.keys(SLOT_META).some(id => slotProducts(get("slots", id)).includes(pid));
// tênis que não está em nenhum vídeo sai do armazenamento
function cleanupProduct(pid){
  if (!pid || productInUse(pid)) return;
  const p = state.products[pid];
  removeProduct(pid);
  if (assets && p && p.imageId) assets.delete(p.imageId).catch(() => {});
}
async function saveShoeLink(id, idx, raw){
  const pid = await addProduct(raw);
  if (!pid) return false;
  let next = [...slotProducts(get("slots", id))], old = null;
  if (typeof idx === "number") { old = next[idx]; next[idx] = pid; }
  else if (!next.includes(pid)) next.push(pid);
  setSlotProducts(id, [...new Set(next)]);
  if (old && old !== pid) cleanupProduct(old);
  return true;
}
function removeShoe(id, idx){
  const cur = slotProducts(get("slots", id)), old = cur[idx];
  delete shoeEdit[id];
  setSlotProducts(id, cur.filter((_, i) => i !== idx));
  cleanupProduct(old);
}
function shoeForm(id, idx, initial){
  const inp = el("input",{class:"input",type:"url",inputmode:"url",id:`shoe-in-${id}`,placeholder:"Cole o link do tênis na Shopify","aria-label":"Link do tênis na Shopify"});
  inp.value = initial || "";
  const save = el("button",{class:"btn btn-primary btn-sm",type:"submit"}, "Salvar");
  const cancel = idx === "first" ? null : el("button",{class:"btn btn-ghost btn-sm",type:"button",onclick:() => { delete shoeEdit[id]; renderShoe(id, true); }}, "Cancelar");
  const form = el("form",{class:"link-form shoe-form"}, inp, save, cancel);
  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!inp.value.trim()) return;
    save.disabled = true;
    const ok = await saveShoeLink(id, idx, inp.value);
    save.disabled = false;
    if (ok) { delete shoeEdit[id]; renderShoe(id, true); }
  });
  return form;
}
function renderShoe(id, force){
  const n = nodes["slots/" + id]; if (!n || !n.shoe) return;
  // não apaga o que a pessoa está digitando quando chega uma atualização
  if (!force && n.shoe.contains(document.activeElement) && document.activeElement.tagName === "INPUT") return;
  const meta = SLOT_META[id];
  const ids = slotProducts(get("slots", id));
  const names = ids.map(pid => (state.products[pid] && state.products[pid].name) || (extracting[pid] ? "Buscando o produto…" : "Tênis removido"));
  if (meta.type === "unboxing") fill(n.typeEl, ids.length ? el("small",{text:"Unboxing"}) : null, el("span",{text: ids.length ? names.join(" + ") : TYPES.unboxing, title: names.join(" + ")}));
  const ed = shoeEdit[id];
  const focusInput = () => n.shoe.querySelector("input")?.focus();
  const rows = ids.map((pid, i) => {
    const p = state.products[pid];
    if (ed === i) return el("div",{class:"shoe-row editing"}, shoeForm(id, i, p && p.url));
    const note = extracting[pid] ? "Buscando a foto…" : (p && p.status === "error" ? p.error : null);
    let acts = null;
    if (canWrite) {
      const edit = el("button",{class:"btn btn-ghost btn-sm shoe-act",type:"button","aria-label":"Editar link do tênis",onclick:() => { shoeEdit[id] = i; renderShoe(id, true); focusInput(); }}, icon("pencil"), el("span",{class:"lbl",text:"Editar"}));
      const del = el("button",{class:"btn btn-ghost btn-sm shoe-act",type:"button","aria-label":"Excluir tênis deste vídeo"}, icon("trash"), el("span",{class:"lbl",text:"Excluir"}));
      let armed = null;
      del.addEventListener("click", () => {
        if (armed) { clearTimeout(armed); removeShoe(id, i); return; }
        del.classList.add("confirm"); fill(del, "Excluir?");
        armed = setTimeout(() => { armed = null; del.classList.remove("confirm"); fill(del, icon("trash"), el("span",{class:"lbl",text:"Excluir"})); }, 3000);
      });
      acts = el("div",{class:"shoe-acts"}, edit, del);
    }
    return el("div",{class:"shoe-row"},
      productThumb(p, extracting[pid]),
      el("div",{class:"shoe-info"},
        el("b",{text:names[i],title:names[i]}),
        note ? el("small",{text:note}) : (p && p.url ? el("a",{class:"lk plain",href:p.url,target:"_blank",rel:"noopener noreferrer",text:"Ver na loja"}) : null)),
      acts);
  });
  let tail = null;
  if (canWrite && ids.length < MAX_SHOES) {
    if (!ids.length) tail = shoeForm(id, "first");
    else if (ed === "new") tail = shoeForm(id, "new");
    else tail = el("button",{class:"btn btn-ghost btn-sm shoe-add",type:"button",onclick:() => { shoeEdit[id] = "new"; renderShoe(id, true); focusInput(); }}, icon("plus"), "Adicionar 2º tênis");
  } else if (!ids.length) {
    tail = el("small",{class:"muted",text:"Nenhum tênis definido."});
  }
  fill(n.shoe,
    el("div",{class:"shoes-head"}, el("small",{text:"Tênis do vídeo"}), el("span",{class:"pop-count",text:`${ids.length}/${MAX_SHOES}`})),
    rows, tail);
}

function renderProducts(){
  const box = $("#products");
  const usage = {};
  Object.keys(SLOT_META).forEach(id => slotProducts(get("slots", id)).forEach(p => { usage[p] = (usage[p] || 0) + 1; }));
  const used = productList().filter(([pid]) => usage[pid]);
  if (!used.length) { fill(box, el("p",{class:"card-description",style:"margin:0;grid-column:1/-1",text:"Nenhum tênis definido ainda. Cole o link do produto no cartão de cada vídeo."})); return; }
  fill(box, used.map(([pid, p]) => el("article",{class:"card product","data-pid":pid},
    el("div",{class:"pr-img"}, p.image ? el("img",{src:p.image,alt:p.name || "",loading:"lazy"}) : productWait(pid, p)),
    el("div",{class:"pr-body"},
      el("div",{class:"pr-name",text:p.name || pid,title:p.name || pid}),
      el("div",{class:"pr-meta"},
        el("span",{text:`Em ${usage[pid]} vídeo${usage[pid] > 1 ? "s" : ""}`}),
        p.url ? el("a",{class:"lk plain",href:p.url,target:"_blank",rel:"noopener noreferrer",text:"Ver na loja"}) : null)))));
}

/* ---------- resumo e filtros ---------- */
function visibleSlots(){ return Object.values(SLOT_META).filter(m => ui.brand === "all" || m.creator.brand === ui.brand); }
function statCard(title, ic, value, ...rest){
  return el("div",{class:"card stat"},
    el("div",{class:"card-header"}, el("h3",{class:"card-title",text:title}), el("span",{class:"muted"}, icon(ic))),
    el("div",{class:"card-content"}, el("div",{class:"value mono",text:value}), ...rest));
}
function renderSummary(){
  const slots = visibleSlots();
  const counts = {sem:0, roteiro:0, done:0};
  slots.forEach(m => { const d = get("slots", m.id); counts[normStatus(d)]++; if (isDone(d)) counts.done++; });
  const total = slots.length;
  const pending = slots.filter(m => { const d = get("slots", m.id); return !isDone(d) && normStatus(d) === "roteiro"; }).length;
  const bar = el("div",{class:"ov-bar"},
    counts.done ? el("span",{style:`width:${counts.done/total*100}%;background:hsl(var(--st-gravado))`,title:`Gravados: ${counts.done}`}) : null,
    null);
  const unb = slots.filter(m => m.type === "unboxing");
  const unbPh = {};
  unb.filter(m => m.creator.brand === "GLLAD").forEach(m => { const p = get("slots", m.id).phase || "coringa"; unbPh[p] = (unbPh[p] || 0) + 1; });
  const creators = new Set(slots.map(m => m.creator.id)).size;
  const pct = total ? Math.round(counts.done / total * 100) : 0;
  const days = [...new Set(slots.map(m => m.creator.day))].map(d => d.split("/")[0]).join(" e ") + "/" + ((slots[0] && slots[0].creator.day.split("/")[1]) || "");
  // período: primeiro e último dia de gravação, com o dia da semana
  const dayList = [...new Map(slots.map(m => [m.creator.day, m.creator])).values()];
  const wk = c => c.weekday.slice(0, 3);
  const period = dayList.length > 1 ? `${wk(dayList[0])} ${dayList[0].day} a ${wk(dayList[dayList.length - 1])} ${dayList[dayList.length - 1].day}` : dayList[0] ? `${wk(dayList[0])} ${dayList[0].day}` : "—";
  const leg = (cVar, label, n) => el("div",{class:"ov-leg"}, el("span",{class:"k"}, el("span",{class:"dot",style:`--c:${cVar}`}), label), el("b",{text:String(n)}));
  fill($("#summary"),
    el("div",{class:"ov-col"},
      el("span",{class:"ov-wm","aria-hidden":"true",text:String(total)}),
      el("span",{class:"ov-label"}, icon("film"), "Vídeos no plano"),
      el("div",{class:"ov-big"}, el("b",{text:String(total)}), el("small",{text:"vídeos para gravar"})),
      el("div",{class:"ov-tiles"},
        el("div",{class:"ov-tile ov-period"}, el("b",{text:period}), el("span",{text:"período de gravação"})),
        el("div",{class:"ov-tile"}, el("b",{text:String(creators)}), el("span",{text:creators === 1 ? "influenciadora" : "influenciadoras"})))),
    el("div",{class:"ov-col"},
      el("span",{class:"ov-wm","aria-hidden":"true",text:`${pct}%`}),
      el("span",{class:"ov-label"}, icon("check"), "Vídeos gravados"),
      el("div",{class:"ov-big"}, el("b",{text:`${counts.done}/${total}`}), el("small",{text:`gravados · ${pct}%`})),
      bar));
  $("#agendaCount").textContent = `${total} vídeos · ${creators} creators`;
  PHASES.forEach(p => {
    const n = nodes["phases/" + p.id]; if (!n) return;
    const fixed = Object.values(SLOT_META).filter(m => m.phase === p.id).length;
    const unbN = Object.values(SLOT_META).filter(m => m.type === "unboxing" && get("slots", m.id).phase === p.id).length;
    n.uses.textContent = `Usada em ${fixed} vídeos fixos${unbN ? ` e ${unbN} unboxing` : ""}`;
  });
}
function applyFilters(){
  document.querySelectorAll(".slot").forEach(n => {
    const d = get("slots", n.dataset.id);
    n.classList.toggle("hide", (ui.brand !== "all" && n.dataset.brand !== ui.brand) || (ui.hideDone && isDone(d)));
  });
  document.querySelectorAll(".creator").forEach(n => n.classList.toggle("hide", ui.brand !== "all" && n.dataset.brand !== ui.brand));
  document.querySelectorAll(".day").forEach(d => d.classList.toggle("hide", ![...d.querySelectorAll(".creator")].some(c => !c.classList.contains("hide"))));
  $("#phasesBlock").classList.toggle("hide", ui.brand === "AIROW");
  CREATORS.forEach(c => {
    const g = c.slots.filter(s => isDone(get("slots", s.id))).length;
    const p = $(`#prog-${c.id}`); if (!p) return;
    p.querySelector(".progress span").style.width = (g / c.slots.length * 100) + "%";
    p.querySelector(".pt").textContent = `${g}/${c.slots.length} gravados`;
  });
}

/* ---------- montagem ---------- */
function summaryLine(c){
  const t = {}; c.slots.forEach(s => t[s.type] = (t[s.type] || 0) + 1);
  return Object.entries(t).map(([k, v]) => `${v} ${TYPES[k].toLowerCase()}`).join(" · ");
}
$("#phases").replaceChildren(...PHASES.map(buildPhase));
$("#creatorsGrid").replaceChildren(...CREATORS.map(buildCreatorBox));
const days = {};
CREATORS.forEach(c => (days[c.day] ||= []).push(c));
$("#agenda").replaceChildren(...Object.entries(days).map(([day, list]) => el("div",{class:"day"},
  el("div",{class:"day-h"}, icon("calendar"), el("strong",{text:day}), el("span",{text:list[0].weekday}), el("span",{class:"day-loc","data-dayloc":day,hidden:true}), el("hr",{class:"separator"})),
  ...list.map(creatorCard))));

/* ---------- narrações da Amanda ---------- */
function buildNarration(p){
  const kind = "narrations", id = "amanda-" + p.id;
  const ta = el("textarea",{class:"narr-ta",id:`narr-${id}`,placeholder:`Escreva a fala da Amanda para a ${p.name}…`,"aria-label":`Narração da ${p.name}`});
  const meta = el("span",{class:"narr-meta mono"});
  const paint = () => {
    const words = (ta.value.trim().match(/\S+/g) || []).length;
    meta.textContent = words ? `${words} palavra${words > 1 ? "s" : ""} · ≈ ${Math.max(1, Math.round(words / 2.5))} s de fala` : "Sem narração ainda";
  };
  ta.addEventListener("input", () => { get(kind, id).text = ta.value; paint(); scheduleSave(kind, id); });
  const copy = el("button",{class:"btn btn-ghost btn-sm narr-copy",type:"button"}, icon("copy"), "Copiar");
  copy.addEventListener("click", () => {
    if (!ta.value.trim()) return;
    const fallback = () => { ta.focus(); ta.select(); toast("Texto selecionado. Use Cmd+C ou Ctrl+C para copiar."); };
    try { navigator.clipboard.writeText(ta.value).then(() => toast("Narração copiada."), fallback); } catch { fallback(); }
  });
  const root = el("article",{class:"narr",style:`--c:${phaseVar(p.id)}`},
    el("header",{class:"narr-h"},
      el("div",{}, el("span",{class:"narr-eyebrow"}, icon("mic"), "Narração"), el("h4",{text:p.name})),
      el("span",{class:"narr-offer"}, p.off, el("br"), p.pair)),
    ta,
    el("footer",{class:"narr-f"}, meta, copy));
  nodes[kind + "/" + id] = {root, ta, paint};
  paint();
  return root;
}
function creatorCard(c){
  const slotsPane = el("div",{class:"slots"}, ...c.slots.map(s => buildSlot(SLOT_META[s.id])));
  let tabs = null, narrPane = null;
  if (c.id === "amanda") {
    narrPane = el("div",{class:"narrs"},
      el("p",{class:"narr-intro"}, icon("mic"), "Uma narração por fase da Black. Escreva como a Amanda vai falar."),
      ...PHASES.map(buildNarration));
    const tab = (key, ic, label, count) => el("button",{type:"button",role:"tab",class:"tabs-trigger","data-tab":key}, icon(ic), label, el("span",{class:"count",text:String(count)}));
    tabs = el("div",{class:"tabs-list creator-tabs",role:"tablist","aria-label":"Seções da Amanda"},
      tab("videos", "film", "Vídeos", c.slots.length), tab("narr", "mic", "Narrações", PHASES.length));
    const show = key => {
      ui.amandaTab = key; saveUi();
      tabs.querySelectorAll(".tabs-trigger").forEach(b => b.setAttribute("aria-selected", String(b.dataset.tab === key)));
      slotsPane.hidden = key !== "videos"; narrPane.hidden = key !== "narr";
    };
    tabs.addEventListener("click", e => { const b = e.target.closest(".tabs-trigger"); if (b) show(b.dataset.tab); });
    show(ui.amandaTab === "narr" ? "narr" : "videos");
  }
  return el("div",{class:"card creator","data-brand":c.brand},
    el("div",{class:"card-header"},
      el("div",{},
        el("h3",{class:"card-title"},
          el("span",{class:"c-av",id:`cav-${c.id}`,"aria-hidden":"true"}),
          el("span",{id:`cname-${c.id}`,text:c.name}),
          el("span",{class:"badge " + (c.brand === "AIROW" ? "badge-default" : "badge-secondary"),text:c.brand}),
          el("a",{class:"lk plain c-ig",id:`cig-${c.id}`,target:"_blank",rel:"noopener noreferrer",hidden:true})),
        el("div",{class:"c-meta",id:`cmeta-${c.id}`}),
        el("p",{class:"card-description c-plan"}, `${c.slots.length} vídeos · ${summaryLine(c)}`)),
      tabs,
      el("div",{class:"creator-prog",id:`prog-${c.id}`}, el("div",{class:"progress"}, el("span",{style:`width:0;background:hsl(var(--st-gravado))`})), el("span",{class:"pt mono"}))),
    el("hr",{class:"separator"}),
    el("div",{class:"card-content"}, slotsPane, narrPane));
}

/* ---------- creators: foto, nome e Instagram ---------- */
const normIg = v => (v || "").trim().replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/^@+/, "").replace(/[/?#].*$/, "").replace(/[^\w.]/g, "").slice(0, 30);
const initials = name => (name || "").trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase() || "?";
const creatorBusy = {}, crEdit = {};
async function setCreatorPhoto(id, file){
  if (!canWrite) { toast("Somente leitura."); return; }
  if (!file || !/^image\//.test(file.type)) { toast("Use uma imagem (JPG, PNG ou WEBP)."); return; }
  if (!assets) { toast(localMode ? "Envio de fotos precisa do painel publicado." : "Envio de fotos disponível só para editores."); return; }
  if (file.size > 20 * 1024 * 1024) { toast("Essa foto passa de 20 MB."); return; }
  creatorBusy[id] = true; renderCreator(id);
  try {
    const r = await assets.upload(file);
    const d = get("creators", id), old = d.photoId;
    d.photo = r.url; d.photoId = r.id;
    scheduleSave("creators", id, 0);
    if (old && old !== r.id) assets.delete(old).catch(() => {});
  } catch { toast("Não consegui enviar a foto. Tente de novo."); }
  creatorBusy[id] = false; renderCreator(id);
}
function creatorDrop(id, dt){
  if (!dt) return;
  const fromItems = [...(dt.items || [])].filter(i => i.kind === "file").map(i => i.getAsFile()).filter(Boolean);
  const file = [...(dt.files || []), ...fromItems].find(f => /^image\//.test(f.type));
  if (file) return setCreatorPhoto(id, file);
  let url = (dt.getData("text/uri-list") || "").split(/\r?\n/).find(l => /^(https?:|data:image)/.test(l.trim()));
  const html = dt.getData("text/html") || "";
  const img = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (img) url = img[1].replace(/&amp;/g, "&");
  if (!url) { const t = (dt.getData("text/plain") || "").trim(); if (/^(https?:|data:image)\S+$/.test(t)) url = t; }
  if (url) return setCreatorPhotoFromUrl(id, url.trim());
  toast("Não reconheci a imagem. Salve a foto no computador e arraste o arquivo, ou clique no círculo.");
}
// imagem vinda de outro site: a página não pode baixá-la direto, então pede para a função na Vercel
async function setCreatorPhotoFromUrl(id, url){
  if (!canWrite) { toast("Somente leitura."); return; }
  if (url.startsWith("data:image")) {
    try {
      const m = url.match(/^data:([^;,]+)[^,]*,(.*)$/);
      const bytes = Uint8Array.from(atob(decodeURIComponent(m[2])), c => c.charCodeAt(0));
      return setCreatorPhoto(id, new File([bytes], "foto", {type:m[1] || "image/png"}));
    } catch { toast("Não consegui ler essa imagem."); return; }
  }
  const mcp = await getMcp();
  if (!mcp) { toast("Salve a foto no computador e arraste o arquivo."); return; }
  creatorBusy[id] = true; renderCreator(id);
  try {
    let r;
    try { r = await mcp.callTool("Vercel", "web_fetch_vercel_url", {url: EXTRACT_URL + encodeURIComponent(url) + "&image=1"}, {cache:false}); }
    catch (e) { throw {code:(e && e.code) || "upstream_error"}; }
    const data = findResult(r && r.payload) || findResult(r && r.content);
    if (!data || !data.ok || !data.base64) throw {code:(data && data.error) || "bad_response"};
    const bytes = Uint8Array.from(atob(data.base64), c => c.charCodeAt(0));
    creatorBusy[id] = false;
    await setCreatorPhoto(id, new File([bytes], "foto", {type:data.contentType || "image/jpeg"}));
  } catch (e) {
    creatorBusy[id] = false; renderCreator(id);
    toast(e && e.code === "fetch_failed" ? "Esse site não deixou baixar a foto. Salve no computador e arraste o arquivo." : extractMsg(e));
  }
}
function buildCreatorBox(c){
  const kind = "creators", id = c.id;
  const fileIn = el("input",{type:"file",accept:"image/*",hidden:true});
  fileIn.addEventListener("change", () => { if (fileIn.files[0]) setCreatorPhoto(id, fileIn.files[0]); fileIn.value = ""; });
  const avatar = el("button",{class:"cr-avatar",type:"button","aria-label":`Foto de ${c.name}: clique, arraste ou cole uma imagem`});
  avatar.addEventListener("click", () => { if (canWrite) fileIn.click(); });
  const name = el("input",{class:"input cr-name",id:`cr-name-${id}`,placeholder:c.name,"aria-label":"Nome da creator"});
  name.addEventListener("input", () => { get(kind, id).name = name.value; renderCreator(id); scheduleSave(kind, id); });
  const ig = el("input",{class:"input",id:`cr-ig-${id}`,placeholder:"usuario",inputmode:"text",autocapitalize:"off",spellcheck:"false","aria-label":"Instagram"});
  ig.addEventListener("input", () => { get(kind, id).instagram = normIg(ig.value); renderCreator(id); scheduleSave(kind, id); });
  ig.addEventListener("blur", () => { const v = normIg(ig.value); if (ig.value !== v) ig.value = v; crEdit[id] = false; renderCreator(id); });
  ig.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); ig.blur(); } });
  // com o @ salvo, ele vira um link para o perfil; o lápis volta para a edição
  const igLink = el("a",{class:"cr-ig-link",target:"_blank",rel:"noopener noreferrer"});
  const igEdit = el("button",{class:"btn btn-ghost btn-sm shoe-act",type:"button","aria-label":"Editar Instagram",onclick:() => { crEdit[id] = true; renderCreator(id); ig.focus(); }}, icon("pencil"));
  const igView = el("div",{class:"cr-ig-view"}, igLink, igEdit);
  const igWrap = el("div",{class:"cr-ig"}, icon("instagram"), ig);
  const box = el("article",{class:"card cr-box","data-brand":c.brand},
    el("div",{class:"cr-av-wrap"}, avatar, el("span",{class:"cr-cam"}, icon("camera"))),
    el("span",{class:"cr-hint",text:"Arraste, cole ou clique para a foto"}),
    el("div",{class:"cr-fields"}, name, igWrap, igView),
    el("div",{class:"cr-meta"},
      el("span",{class:"badge " + (c.brand === "AIROW" ? "badge-default" : "badge-secondary"),text:c.brand}),
      el("span",{text:`${c.day} · ${c.period} · ${c.slots.length} vídeos`})),
    fileIn);
  // arrastar ou colar a foto no card inteiro: arquivo do computador ou imagem arrastada de outro site
  let depth = 0;
  box.addEventListener("dragenter", e => { e.preventDefault(); depth++; box.classList.add("dragging"); });
  box.addEventListener("dragover", e => { e.preventDefault(); if (e.dataTransfer) e.dataTransfer.dropEffect = "copy"; });
  box.addEventListener("dragleave", () => { depth = Math.max(0, depth - 1); if (!depth) box.classList.remove("dragging"); });
  box.addEventListener("drop", e => { e.preventDefault(); e.stopPropagation(); depth = 0; box.classList.remove("dragging"); creatorDrop(id, e.dataTransfer); });
  box.addEventListener("paste", e => {
    const cd = e.clipboardData; if (!cd) return;
    const f = [...(cd.files || [])].find(x => /^image\//.test(x.type));
    if (f) { e.preventDefault(); setCreatorPhoto(id, f); return; }
    if (e.target === name || e.target === ig) return;
    const t = (cd.getData("text/plain") || "").trim();
    if (/^https?:\/\/\S+$/.test(t)) { e.preventDefault(); setCreatorPhotoFromUrl(id, t); }
  });
  nodes[kind + "/" + id] = {root:box, avatar, name, ig, igWrap, igView, igLink, igEdit};
  return box;
}
function renderCreator(id){
  const c = CREATORS.find(x => x.id === id), n = nodes["creators/" + id]; if (!c || !n) return;
  const d = get("creators", id), shown = (d.name || "").trim() || c.name, handle = normIg(d.instagram);
  fill(n.avatar, creatorBusy[id] ? el("span",{class:"spinner"}) : d.photo ? el("img",{src:d.photo,alt:`Foto de ${shown}`}) : el("span",{class:"cr-init",text:initials(shown)}));
  n.avatar.classList.toggle("has", !!d.photo && !creatorBusy[id]);
  fillText(n.name, d.name || ""); fillText(n.ig, d.instagram || "");
  const showLink = !!handle && !crEdit[id] && document.activeElement !== n.ig;
  n.igWrap.hidden = showLink; n.igView.hidden = !showLink;
  if (handle) { n.igLink.href = `https://instagram.com/${handle}`; fill(n.igLink, icon("instagram"), el("span",{text:`@${handle}`})); n.igLink.title = `Abrir @${handle} no Instagram`; }
  n.igEdit.hidden = !canWrite;
  // no card da agenda
  const av = $(`#cav-${id}`), nm = $(`#cname-${id}`), igl = $(`#cig-${id}`);
  if (av) fill(av, d.photo ? el("img",{src:d.photo,alt:""}) : initials(shown));
  if (nm) nm.textContent = shown;
  Object.keys(locNodes).forEach(paintLoc);
  if (igl) { igl.hidden = !handle; if (handle) { igl.href = `https://instagram.com/${handle}`; igl.textContent = `@${handle}`; } }
}

/* ---------- locais de gravação ---------- */
const DAYS = [...new Set(CREATORS.map(c => c.day))];
const mapsUrl = a => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(a);
const locBusy = {};
// imagem arrastada: arquivo do computador ou endereço de imagem de outro site
function parseImageDrop(dt){
  if (!dt) return {};
  const fromItems = [...(dt.items || [])].filter(i => i.kind === "file").map(i => i.getAsFile()).filter(Boolean);
  const file = [...(dt.files || []), ...fromItems].find(f => /^image\//.test(f.type));
  if (file) return {file};
  let url = (dt.getData("text/uri-list") || "").split(/\r?\n/).find(l => /^(https?:|data:image)/.test(l.trim()));
  const img = (dt.getData("text/html") || "").match(/<img[^>]+src=["']([^"']+)["']/i);
  if (img) url = img[1].replace(/&amp;/g, "&");
  if (!url) { const t = (dt.getData("text/plain") || "").trim(); if (/^(https?:|data:image)\S+$/.test(t)) url = t; }
  return url ? {url: url.trim()} : {};
}
async function imageUrlToFile(url){
  if (url.startsWith("data:image")) {
    const m = url.match(/^data:([^;,]+)[^,]*,(.*)$/);
    return new File([Uint8Array.from(atob(decodeURIComponent(m[2])), c => c.charCodeAt(0))], "foto", {type:m[1] || "image/png"});
  }
  const mcp = await getMcp();
  if (!mcp) throw {code:"no_mcp"};
  let r;
  try { r = await mcp.callTool("Vercel", "web_fetch_vercel_url", {url: EXTRACT_URL + encodeURIComponent(url) + "&image=1"}, {cache:false}); }
  catch (e) { throw {code:(e && e.code) || "upstream_error"}; }
  const data = findResult(r && r.payload) || findResult(r && r.content);
  if (!data || !data.ok || !data.base64) throw {code:(data && data.error) || "bad_response"};
  return new File([Uint8Array.from(atob(data.base64), c => c.charCodeAt(0))], "foto", {type:data.contentType || "image/jpeg"});
}
async function setLocationPhoto(id, fileOrUrl){
  if (!canWrite) { toast("Somente leitura."); return; }
  if (!assets) { toast("Envio de fotos disponível só para editores."); return; }
  locBusy[id] = true; renderLocations();
  try {
    const file = typeof fileOrUrl === "string" ? await imageUrlToFile(fileOrUrl) : fileOrUrl;
    if (!file || !/^image\//.test(file.type)) throw {code:"not_image"};
    if (file.size > 20 * 1024 * 1024) throw {code:"too_large"};
    const up = await assets.upload(file);
    const d = get("locations", id), old = d.photoId;
    d.photo = up.url; d.photoId = up.id;
    scheduleSave("locations", id, 0);
    if (old && old !== up.id) assets.delete(old).catch(() => {});
  } catch (e) {
    const c = e && e.code;
    toast(c === "not_image" ? "Use uma imagem (JPG, PNG ou WEBP)." : c === "too_large" ? "Essa foto passa de 20 MB." : c === "fetch_failed" ? "Esse site não deixou baixar a foto. Salve no computador e arraste o arquivo." : "Não consegui enviar a foto. Tente de novo.");
  }
  locBusy[id] = false; renderLocations();
}
async function addLocation(){
  if (!canWrite) { toast("Somente leitura."); return; }
  const id = "l" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  state.locations[id] = {...blank("locations"), createdAt:new Date().toISOString()};
  renderLocations();
  locNodes[id]?.name.focus();
  scheduleSave("locations", id, 0);
}
async function removeLocation(id){
  const d = state.locations[id]; if (!d) return;
  const k = "locations/" + id; clearTimeout(timers[k]); timers[k] = null;
  delete state.locations[id]; renderLocations();
  if (localMode) persistLocal();
  else if (db) { try { await db.doc(k).delete(); } catch { toast("Não consegui excluir. Tente de novo."); } }
  if (assets && d.photoId) assets.delete(d.photoId).catch(() => {});
}
const locNodes = {};
function buildLocation(id){
  const kind = "locations";
  const name = el("input",{class:"input loc-name",id:`loc-name-${id}`,placeholder:"Nome do local","aria-label":"Nome do local"});
  name.addEventListener("input", () => { get(kind, id).name = name.value; scheduleSave(kind, id); paintDayLocs(); });
  const addr = el("input",{class:"input",id:`loc-addr-${id}`,placeholder:"Endereço","aria-label":"Endereço"});
  addr.addEventListener("input", () => { get(kind, id).address = addr.value; scheduleSave(kind, id); paintLoc(id); paintDayLocs(); });
  const maps = el("a",{class:"lk plain loc-maps",target:"_blank",rel:"noopener noreferrer"}, icon("extLink"), "Abrir no Google Maps");
  const notes = el("textarea",{class:"textarea loc-notes",id:`loc-notes-${id}`,placeholder:"Contato, estacionamento, o que levar…","aria-label":"Observações do local"});
  notes.addEventListener("input", () => { get(kind, id).notes = notes.value; scheduleSave(kind, id); });
  const del = el("button",{class:"btn btn-ghost btn-sm loc-del",type:"button"}, icon("trash"), "Excluir");
  let armed = null;
  del.addEventListener("click", () => {
    if (armed) { clearTimeout(armed); removeLocation(id); return; }
    del.classList.add("confirm"); fill(del, "Confirmar exclusão?");
    armed = setTimeout(() => { armed = null; del.classList.remove("confirm"); fill(del, icon("trash"), "Excluir"); }, 3000);
  });
  const when = el("div",{class:"loc-when"}), who = el("div",{class:"loc-who"});
  const root = el("article",{class:"card loc","data-loc":id},
    el("header",{class:"loc-top"}, when, who),
    el("div",{class:"loc-body"},
      el("label",{class:"loc-edit"}, name, el("span",{class:"pen","aria-hidden":"true"}, icon("pencil"))),
      el("div",{class:"loc-field"}, el("label",{class:"loc-addr loc-edit"}, icon("mapPin"), addr, el("span",{class:"pen","aria-hidden":"true"}, icon("pencil"))), maps)));
  locNodes[id] = {root, name, addr, maps, notes, del, when, who};
  return root;
}
function paintLoc(id){
  const n = locNodes[id], d = state.locations[id]; if (!n || !d) return;
  fillText(n.name, d.name || ""); fillText(n.addr, d.address || "");
  const a = (d.address || "").trim();
  n.maps.hidden = !a; if (a) n.maps.href = mapsUrl(a);
  const cs = (d.creators || []).map(cid => CREATORS.find(c => c.id === cid)).filter(Boolean);
  const dayInfo = CREATORS.find(c => c.day === d.day);
  const period = cs[0] ? cs[0].period : (d.time && parseInt(d.time, 10) < 12 ? "Manhã" : d.time ? "Tarde" : "");
  fill(n.when,
    el("div",{class:"loc-time"}, icon("clock"), d.time || "--h--"),
    el("div",{class:"loc-date",text:[d.day, dayInfo && dayInfo.weekday, period].filter(Boolean).join(" · ") || "Dia a definir"}));
  fill(n.who, cs.length ? cs.map(c => {
    const cd = get("creators", c.id), shown = (cd.name || "").trim() || c.name;
    return el("span",{class:"who"}, el("span",{class:"c-av"}, cd.photo ? el("img",{src:cd.photo,alt:""}) : initials(shown)), el("span",{text:shown}));
  }) : el("span",{class:"loc-empty",text:"Sem creator"}));
  n.del.hidden = !canWrite;
}
function paintDayLocs(){
  document.querySelectorAll("[data-dayloc]").forEach(span => {
    const day = span.dataset.dayloc;
    const list = Object.values(state.locations).filter(l => l.day === day && ((l.name || "").trim() || (l.address || "").trim()));
    span.hidden = !list.length;
    fill(span, icon("mapPin"), ...list.flatMap((l, i) => {
      const label = (l.name || "").trim() || (l.address || "").trim();
      const node = (l.address || "").trim() ? el("a",{class:"lk plain",href:mapsUrl(l.address.trim()),target:"_blank",rel:"noopener noreferrer",text:label}) : el("span",{text:label});
      return i ? [el("span",{text:"·"}), node] : [node];
    }));
  });
}
// locais agrupados por dia: cada dia numa linha, cards lado a lado em telas maiores
function renderLocations(){
  const box = $("#locs"); if (!box) return;
  const toMin = t => { const m = String(t || "").match(/(\d{1,2})\s*h\s*(\d{0,2})/i); return m ? (+m[1]) * 60 + (+(m[2] || 0)) : 9999; };
  const ids = Object.keys(state.locations).sort((a, b) => toMin(state.locations[a].time) - toMin(state.locations[b].time) || (state.locations[a].createdAt || "").localeCompare(state.locations[b].createdAt || ""));
  Object.keys(locNodes).forEach(id => { if (!state.locations[id]) { locNodes[id].root.remove(); delete locNodes[id]; } });
  ids.forEach(id => { if (!locNodes[id]) buildLocation(id); paintLoc(id); });
  const groups = [...DAYS, ""].map(day => ({day, ids: ids.filter(id => day ? state.locations[id].day === day : !DAYS.includes(state.locations[id].day))})).filter(g => g.ids.length);
  // só remonta quando a ordem ou os dias mudam, para não tirar o foco de quem está digitando
  const sig = groups.map(g => g.day + ":" + g.ids.join(",")).join("|");
  if (sig === renderLocations.sig && box.childElementCount) { paintDayLocs(); paintCreatorMeta(); return; }
  renderLocations.sig = sig;
  const kids = groups.map(g => {
    const info = CREATORS.find(c => c.day === g.day);
    return el("div",{class:"loc-day"},
      el("div",{class:"day-h loc-day-h"}, icon("calendar"), el("strong",{text:g.day || "Outros dias"}), info ? el("span",{text:info.weekday}) : null, el("hr",{class:"separator"})),
      el("div",{class:"loc-row"}, g.ids.map(id => locNodes[id].root)));
  });
  box.replaceChildren(...(kids.length ? kids : [el("p",{class:"card-description",style:"margin:0",text:"Nenhum local cadastrado ainda."})]));
  paintDayLocs(); paintCreatorMeta();
}
// horário e local de cada creator no card da agenda
function paintCreatorMeta(){
  CREATORS.forEach(c => {
    const box = document.getElementById(`cmeta-${c.id}`); if (!box) return;
    const l = Object.values(state.locations).find(x => (x.creators || []).includes(c.id));
    fill(box,
      el("span",{class:"c-chip strong"}, icon("clock"), (l && l.time) ? `${l.time} · ${c.period}` : c.period),
      l && l.name ? el("span",{class:"c-chip"}, icon("mapPin"), l.name) : null);
  });
}
function renderLooks(){
  const box = $("#looks"); if (!box) return;
  const doc = state.brief.looks, L = doc && (doc.looks || doc);
  if (!L || !(L.items || []).length) { box.replaceChildren(); return; }
  fill(box, el("div",{class:"looks"},
    el("div",{class:"looks-h"},
      el("span",{class:"eyebrow"}, icon("shirt"), "Looks"),
      el("h3",{text:L.title || "Para todas as creators"}),
      L.pref ? el("span",{class:"looks-pref"}, el("span",{class:"swatch",style:`background:${/^#[0-9a-f]{3,8}$/i.test(L.prefHex || "") ? L.prefHex : "transparent"}`}), `Preferência: ${L.pref}`) : null),
    el("div",{class:"looks-items"}, L.items.map(it => el("div",{class:"look"},
      el("span",{class:"n",text:String(it.n)}),
      el("span",{class:"t"}, el("b",{text:`look${it.n > 1 ? "s" : ""} ${it.label}`}), it.note ? el("small",{text:it.note}) : null))))));
}

function renderAll(){
  renderProducts();
  PHASES.forEach(p => { renderDoc("phases", p.id); renderDoc("narrations", "amanda-" + p.id); });
  CREATORS.forEach(c => renderDoc("creators", c.id));
  renderLocations(); renderLooks();
  Object.keys(SLOT_META).forEach(id => renderDoc("slots", id));
  renderSummary(); applyFilters();
}
function applyReadOnly(){
  document.querySelectorAll("textarea, .select select, .check input, .link-form input, .link-form button, .cr-fields input").forEach(n => n.disabled = !canWrite);
  document.querySelectorAll(".dropzone .upload-btn").forEach(n => n.disabled = !canWrite || !assets);
  document.querySelectorAll(".dz-sub").forEach(n => n.textContent = !canWrite ? "Somente visualização" : assets ? (n.dataset.default || "Arraste os arquivos para cá") : (localMode ? "Upload disponível no painel publicado" : "Upload só para editores"));
  setSaveState();
}

$("#arriveIc").append(icon("clock"));
/* ---------- moodboard: apresentação em slides montada com os dados do painel ---------- */
$("#moodBtn").prepend(icon("image"));
$("#deckPrev").append(icon("chevLeft")); $("#deckNext").append(icon("chevRight"));
$("#deckClose").append(icon("x")); $("#deckFull").append(icon("expand"));
const MB_TYPE_LABEL = {estetico:"Feed estético", falado:"UGC falado", unboxing:"Unboxing", black:"Black Friday", cred:"Credibilidade", chega:"Como chega"};
const PH_HEX = {bn:"#2f5fd0", bw:"#6d3fd6", bf:"#151517", rs:"#137a6d"};
function crInfo(c){
  const d = get("creators", c.id);
  return {name:(d.name || "").trim() || c.name, photo:d.photo || "", ig:normIg(d.instagram)};
}
function crAvatar(c, cls){
  const ci = crInfo(c);
  return ci.photo ? el("img",{class:cls,src:ci.photo,alt:""}) : el("span",{class:cls,text:initials(ci.name)});
}
const locFor = c => Object.values(state.locations).find(l => (l.creators || []).includes(c.id));
function crProducts(c){
  const seen = new Set(), out = [];
  c.slots.forEach(s => slotProducts(get("slots", s.id)).forEach(pid => { const p = state.products[pid]; if (p && p.image && !seen.has(pid)) { seen.add(pid); out.push(p); } }));
  return out;
}
// mídias de referência (prévias de Pinterest/Drive e vídeos enviados) por tipo de vídeo
function refMedia(types){
  const out = [], seen = new Set();
  Object.values(SLOT_META).filter(m => types.includes(m.type)).forEach(m => {
    const d = get("slots", m.id);
    const urls = ((d.inspo || "").match(URL_RE) || []).map(cleanUrl).filter(isPreviewLink);
    urls.forEach(u => { const pv = state.previews[previewId(u)]; if (pv && pv.image && !seen.has(pv.image)) { seen.add(pv.image); out.push({img:pv.image, video:pv.video}); } });
    (d.media || []).forEach(x => { if (!x.link && x.url && !seen.has(x.url)) { seen.add(x.url); out.push(/^video\//.test(x.type || "") ? {video:x.url} : {img:x.url}); } });
  });
  return out;
}
function mediaEl(mm){
  return mm.video ? el("video",{src:mm.video,poster:mm.img || null,muted:true,loop:true,playsinline:true,preload:"metadata"}) : el("img",{src:mm.img,alt:"",loading:"lazy"});
}
const GLLAD_LOGO = "/_blob/449b6d3ef68cc2f3126ee3262282d520";
const AIROW_LOGO = "/_blob/a6b7d9c73b1b3040fa11737fac6eb7c9";
const phaseTag = id => id && PHASE_BY[id] ? el("span",{class:"mb-tag",style:`--c:${PH_HEX[id]}`,text:PHASE_BY[id].name}) : id === "coringa" ? el("span",{class:"mb-tag",style:"--c:#777",text:"Coringa"}) : null;
function slotRefs(id){
  const d = get("slots", id), out = [];
  ((d.inspo || "").match(URL_RE) || []).map(cleanUrl).filter(isPreviewLink).forEach(u => { const pv = state.previews[previewId(u)]; if (pv && pv.image) out.push({img:pv.image, video:pv.video}); });
  (d.media || []).forEach(x => { if (!x.link && x.url) out.push(/^video\//.test(x.type || "") ? {video:x.url} : {img:x.url}); });
  return out;
}
const slotProds = id => slotProducts(get("slots", id)).map(pid => state.products[pid]).filter(Boolean);
function buildSlides(who){
  const S = [], slide = (forId, cls, ...kids) => { const n = el("section",{class:"slide " + cls,"data-for":forId}, ...kids); S.push(n); };
  const one = who && who !== "all" ? CREATORS.find(c => c.id === who) : null;
  const daysTxt = DAYS.map(d => d.split("/")[0]).join(" e ") + "/" + (DAYS[0] || "").split("/")[1];
  // 1. capa branca com o logo
  slide("all", "mb-cover-w", el("img",{class:"mb-logo",src:GLLAD_LOGO,alt:"GLLAD"}),
    el("div",{class:"mb-sub",text:`Black 2026 · gravações ${daysTxt}`}),
    el("div",{class:"mb-plus"}, el("span",{text:"+"}), el("img",{src:AIROW_LOGO,alt:"AIROW"})),
    one ? el("div",{class:"mb-who",text:`Briefing · ${crInfo(one).name}`}) : null);
  // 2. cronograma
  slide("all", "mb-schedule", el("h2",{class:"mb-h",style:"font-size:5cqw",text:"Cronograma"}),
    el("div",{class:"mb-sched"}, DAYS.map(day => {
      const cs = CREATORS.filter(c => c.day === day);
      return el("div",{class:"mb-day"}, el("h3",{}, day, el("small",{text:cs[0].weekday})),
        cs.map(c => { const l = locFor(c); return el("div",{class:"mb-row"}, el("span",{class:"t",text:(l && l.time) || c.period}), crAvatar(c, "mb-ava"),
          el("div",{class:"w"}, el("b",{text:crInfo(c).name}), el("span",{text:[c.brand, l && l.name, `${c.slots.length} vídeos`].filter(Boolean).join(" · ")}))); }));
    })));
  // 3. página de cada creator (foto + tênis)
  CREATORS.forEach(c => {
    const ci = crInfo(c), l = locFor(c), shoes = crProducts(c);
    const t = {}; c.slots.forEach(s => t[s.type] = (t[s.type] || 0) + 1);
    slide(c.id, "mb-creator",
      el("div",{class:"mb-photo"}, ci.photo ? el("img",{src:ci.photo,alt:ci.name}) : el("span",{class:"ini",text:initials(ci.name)})),
      el("div",{class:"mb-cside"},
        el("h2",{class:"mb-h",text:ci.name}),
        el("div",{class:"mb-meta"},
          el("span",{class:"mb-chip dark",text:c.brand}),
          ci.ig ? el("span",{class:"mb-chip",text:"@" + ci.ig}) : null,
          el("span",{class:"mb-chip",text:`${c.day} · ${c.weekday}`}),
          el("span",{class:"mb-chip",text:(l && l.time) ? `${l.time} · ${c.period}` : c.period}),
          l && l.name ? el("span",{class:"mb-chip",text:l.name}) : null),
        shoes.length ? [el("div",{class:"mb-label",style:"margin-bottom:1cqw",text:"Tênis:"}),
          el("div",{class:"mb-shoes"}, shoes.slice(0, 8).map(p => el("div",{class:"mb-shoe"}, el("img",{src:p.image,alt:p.name || ""}), el("span",{text:p.name || ""}))))] : el("p",{class:"mb-txt",text:"Tênis a definir."}),
        el("div",{class:"mb-plan",text:Object.entries(t).map(([k, v]) => `${v} ${MB_TYPE_LABEL[k].toLowerCase()}`).join(" · ")})));
  });
  // 4. looks
  const L = state.brief.looks && (state.brief.looks.looks || state.brief.looks);
  if (L && (L.items || []).length) {
    const col = refMedia(["estetico", "falado", "black"]).slice(0, 8);
    slide("all", "mb-looks",
      col.length ? el("div",{class:"mb-collage",style:`grid-template-columns:repeat(${col.length > 1 ? Math.ceil(col.length / 2) : 1},1fr);grid-template-rows:repeat(${col.length > 1 ? 2 : 1},1fr)`}, col.map(mediaEl)) : null,
      el("div",{class:"mb-lside"},
        el("h2",{class:"mb-h",text:"Looks"}),
        L.pref ? el("div",{class:"mb-txt",style:"font-size:1.5cqw"}, el("span",{class:"mb-sw",style:`background:${L.prefHex || "#0a0a0a"}`}), `Preferência: ${L.pref}`) : null,
        L.items.map(it => el("div",{class:"mb-lrow"}, el("span",{class:"d"}, el("b",{text:`look${it.n > 1 ? "s" : ""} ${it.label}`}), it.note ? el("span",{text:it.note}) : null), el("span",{class:"n",text:String(it.n)}))),
        el("div",{class:"mb-txt",text:"Para todas as creators"})));
  }
  // 5. briefing de cada influencer: o que gravar e como
  CREATORS.forEach(c => {
    const ci = crInfo(c), l = locFor(c);
    const items = c.slots.map(sl => ({m:SLOT_META[sl.id], d:get("slots", sl.id), id:sl.id}));
    // 5a. resumo: quando, onde e a lista de vídeos
    slide(c.id, "mb-brief",
      el("div",{class:"mb-bleft"},
        crAvatar(c, "mb-ava"),
        el("h2",{class:"mb-h",text:`Seu briefing`}),
        el("div",{class:"mb-kv"}, el("small",{text:"Quando"}), el("b",{text:`${c.day} · ${c.weekday} · ${(l && l.time) || c.period}`})),
        l && l.name ? el("div",{class:"mb-kv"}, el("small",{text:"Onde"}), el("b",{text:l.name}), l.address ? el("span",{class:"mb-offer",text:l.address}) : null) : null,
        el("div",{class:"mb-kv"}, el("small",{text:"Total"}), el("b",{text:`${items.length} vídeos`})),
        el("div",{class:"mb-warn",text:"Chegue de 10 a 15 minutos antes do horário."})),
      el("div",{class:"mb-list"},
        el("div",{class:"mb-label",text:"Seus vídeos"}),
        items.map(x => {
          const prods = slotProds(x.id), title = x.m.type === "unboxing" && prods.length ? `Unboxing · ${prods.map(p => p.name).join(" + ")}` : MB_TYPE_LABEL[x.m.type];
          const hasScript = (x.d.script || "").trim() && normStatus(x.d) !== "sem";
          return el("div",{class:"mb-li"},
            el("span",{class:"n",text:String(x.m.n).padStart(2,"0")}),
            el("div",{class:"w"}, el("b",{text:title}), el("span",{text:[x.m.phase && PHASE_BY[x.m.phase] ? `${PHASE_BY[x.m.phase].off} ${PHASE_BY[x.m.phase].pair}` : null, hasScript ? "Com roteiro" : "Siga as referências", (x.d.notes || "").trim() || null].filter(Boolean).join(" · ")})),
            prods[0] ? el("img",{src:prods[0].image,alt:""}) : phaseTag(x.m.phase));
        })));
    // 5b. vídeos com roteiro: dois por slide
    const scripted = items.filter(x => (x.d.script || "").trim() && normStatus(x.d) !== "sem");
    for (let i = 0; i < scripted.length; i += 2) {
      slide(c.id, "mb-script", el("h2",{class:"mb-h",style:"font-size:3.2cqw;margin-bottom:1.6cqw",text:`${ci.name} · roteiros`}),
        el("div",{class:"mb-pair"}, scripted.slice(i, i + 2).map(x => {
          const prods = slotProds(x.id), refs = slotRefs(x.id).slice(0, 4), ph = x.m.phase && PHASE_BY[x.m.phase];
          return el("div",{class:"mb-vid"},
            el("div",{class:"mb-vid-h"}, el("span",{class:"n",text:String(x.m.n).padStart(2,"0")}), el("b",{text:MB_TYPE_LABEL[x.m.type]}), phaseTag(x.m.phase)),
            ph ? el("div",{class:"mb-offer",text:`Oferta: ${ph.off} ${ph.pair} · ${ph.dates}`}) : null,
            prods.length ? el("div",{class:"mb-prods"}, prods.map(p => el("div",{class:"mb-prod"}, el("img",{src:p.image,alt:""}), el("span",{text:p.name})))) : null,
            el("div",{class:"mb-scr",text:x.d.script.trim()}),
            refs.length ? [el("div",{class:"mb-label",text:"Referências"}), el("div",{class:"mb-refs"}, refs.map(mediaEl))] : null,
            (x.d.notes || "").trim() ? el("div",{class:"mb-note2"}, el("b",{text:"Obs.: "}), x.d.notes.trim()) : null);
        })));
    }
    // 5c. narrações (Amanda)
    if (c.id === "amanda") {
      const narr = PHASES.map(p => ({p, text:(get("narrations", "amanda-" + p.id).text || "").trim()})).filter(x => x.text);
      if (narr.length) slide(c.id, "mb-script", el("h2",{class:"mb-h",style:"font-size:3.2cqw;margin-bottom:1.6cqw",text:"Suas narrações"}),
        el("div",{class:"mb-cols",style:`grid-template-columns:repeat(${narr.length},1fr)`}, narr.map(x => el("div",{class:"mb-col"},
          el("h4",{}, el("i",{style:`background:${PH_HEX[x.p.id]}`}), x.p.name), el("span",{class:"off",text:`${x.p.off} ${x.p.pair}`}), el("p",{text:x.text})))));
    }
    // 5d. vídeos sem roteiro, agrupados por tipo: produto, fase/oferta e referências, quatro por slide
    const free = items.filter(x => !scripted.includes(x));
    [...new Set(free.map(x => x.m.type))].forEach(type => {
      const group = free.filter(x => x.m.type === type);
      const label = type === "unboxing" ? "unboxings" : MB_TYPE_LABEL[type].toLowerCase();
      for (let i = 0; i < group.length; i += 4) {
        slide(c.id, "mb-script", el("h2",{class:"mb-h",style:"font-size:3.2cqw;margin-bottom:.6cqw",text:`${ci.name} · ${label}`}),
          el("p",{class:"mb-txt",style:"margin:0 0 1.6cqw",text:"Sem roteiro fechado: siga o produto, a fase e as referências de cada vídeo."}),
          el("div",{class:"mb-grid4"}, group.slice(i, i + 4).map(x => {
            const prods = slotProds(x.id), refs = slotRefs(x.id).slice(0, 3);
            const phId = x.m.phase || (x.m.type === "unboxing" && c.brand === "GLLAD" ? (x.d.phase || "coringa") : null);
            const ph = phId && PHASE_BY[phId];
            return el("div",{class:"mb-unb"},
              el("span",{class:"n",text:`${String(x.m.n).padStart(2,"0")} · ${MB_TYPE_LABEL[x.m.type]}`}),
              prods[0] ? el("img",{class:"p",src:prods[0].image,alt:""}) : null,
              el("b",{text:prods.length ? prods.map(p => p.name).join(" + ") : "Produto a definir"}),
              phId ? el("div",{style:"display:flex;flex-wrap:wrap;gap:.5cqw;align-items:center"}, phaseTag(phId), ph ? el("span",{class:"mb-offer",text:`${ph.off} ${ph.pair}`}) : null) : null,
              refs.length ? [el("div",{class:"mb-label",style:"font-size:.85cqw",text:"Referências"}), el("div",{class:"mb-refs"}, refs.map(mediaEl))] : null,
              (x.d.notes || "").trim() ? el("div",{class:"mb-note2"}, el("b",{text:"Obs.: "}), x.d.notes.trim()) : null);
          })));
      }
    });
  });
  return one ? S.filter(n => n.dataset.for === "all" || n.dataset.for === one.id) : S;
}
let deckIdx = 0, deckSlides = [], idleT = null;
function deckGo(i){
  if (!deckSlides.length) return;
  deckIdx = Math.max(0, Math.min(deckSlides.length - 1, i));
  deckSlides.forEach((sl, k) => {
    const on = k === deckIdx; sl.classList.toggle("on", on); sl.setAttribute("aria-hidden", String(!on));
    sl.querySelectorAll("video").forEach(v => { if (on && !calmMotion) v.play().catch(() => {}); else v.pause(); });
  });
  $("#deckCount").textContent = `${deckIdx + 1} / ${deckSlides.length}`;
  $("#deckPrev").disabled = deckIdx === 0; $("#deckNext").disabled = deckIdx === deckSlides.length - 1;
}
function wake(){ const d = $("#deck"); d.classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(() => d.classList.add("idle"), 2500); }
let deckWho = "all";
function renderDeck(){
  deckSlides = buildSlides(deckWho);
  $("#deckStage").replaceChildren(...deckSlides);
  deckGo(0);
}
function openDeck(){
  const sel = $("#deckWho");
  fill(sel, el("option",{value:"all",text:"Todas as creators"}), CREATORS.map(c => el("option",{value:c.id,text:crInfo(c).name})));
  sel.value = deckWho;
  renderDeck();
  const d = $("#deck"); d.hidden = false; document.body.classList.add("deck-open");
  wake();
  try { if (location.hash !== "#moodboard") history.replaceState(null, "", "#moodboard"); } catch {}
  // tela cheia; no celular também tenta travar na horizontal (Android). Onde não dá, o CSS gira a apresentação
  try { if (d.requestFullscreen) d.requestFullscreen().then(() => { try { screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape").catch(() => {}); } catch {} }).catch(() => {}); } catch {}
  $("#deckNext").focus({preventScroll:true});
}
function closeDeck(){
  const d = $("#deck"); d.hidden = true; document.body.classList.remove("deck-open");
  d.querySelectorAll("video").forEach(v => v.pause());
  try { screen.orientation && screen.orientation.unlock && screen.orientation.unlock(); } catch {}
  try { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); } catch {}
  try { if (location.hash === "#moodboard") history.replaceState(null, "", location.pathname + location.search); } catch {}
  $("#moodBtn").focus({preventScroll:true});
}
$("#moodBtn").addEventListener("click", openDeck);
$("#deckWho").addEventListener("change", e => { deckWho = e.target.value; renderDeck(); wake(); });
// PDF: cada slide vira uma página 16:9, renderizada fora da tela em 1600×900
const loadScript = src => new Promise((res, rej) => { if (document.querySelector(`script[src="${src}"]`)) return res(); const t = document.createElement("script"); t.src = src; t.onload = res; t.onerror = rej; document.head.append(t); });
async function downloadPdf(){
  const btn = $("#deckPdf");
  let dl = null;
  try { dl = window.claude && typeof window.claude.use === "function" ? await window.claude.use("downloads") : null; } catch {}
  if (!dl) { toast("Download de PDF indisponível nesta visualização. Abra o painel no claude.ai."); return; }
  btn.disabled = true; fill(btn, el("span",{class:"spinner",style:"width:14px;height:14px"}), "Gerando PDF…");
  const host = el("div",{class:"pdf-host"}), stage = el("div",{class:"deck-stage pdf-stage"});
  host.append(stage); document.body.append(host);
  try {
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js");
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
    const slides = buildSlides(deckWho);
    const pdf = new window.jspdf.jsPDF({orientation:"landscape", unit:"pt", format:[1600, 900], compress:true});
    for (let i = 0; i < slides.length; i++) {
      const sl = slides[i];
      sl.querySelectorAll("video").forEach(v => { const p = v.getAttribute("poster"); v.replaceWith(p ? el("img",{src:p,alt:""}) : el("span",{})); });
      sl.classList.add("on");
      stage.replaceChildren(sl);
      await Promise.all([...sl.querySelectorAll("img")].map(im => im.complete ? Promise.resolve() : new Promise(r => { im.onload = im.onerror = r; })));
      await new Promise(r => setTimeout(r, 60));
      const canvas = await window.html2canvas(stage, {scale:1, width:1600, height:900, backgroundColor:"#ffffff", useCORS:true, logging:false});
      if (i) pdf.addPage([1600, 900], "landscape");
      pdf.addImage(canvas.toDataURL("image/jpeg", 0.86), "JPEG", 0, 0, 1600, 900);
      fill(btn, el("span",{class:"spinner",style:"width:14px;height:14px"}), `Gerando ${i + 1}/${slides.length}…`);
    }
    const name = deckWho === "all" ? "Todas" : crInfo(CREATORS.find(c => c.id === deckWho)).name;
    await dl.save({filename:`Moodboard GLLAD - ${name}.pdf`, data:pdf.output("blob")});
  } catch (e) {
    if (!(e && e.code === "declined")) toast("Não consegui gerar o PDF. Tente de novo.");
  }
  host.remove();
  btn.disabled = false; fill(btn, icon("download"), "Baixar PDF");
}
$("#deckPdf").addEventListener("click", downloadPdf);
$("#deckPdf").prepend(icon("download"));
$("#deckClose").addEventListener("click", closeDeck);
$("#deckPrev").addEventListener("click", () => { deckGo(deckIdx - 1); wake(); });
$("#deckNext").addEventListener("click", () => { deckGo(deckIdx + 1); wake(); });
$("#deckFull").addEventListener("click", () => { try { document.fullscreenElement ? document.exitFullscreen() : $("#deck").requestFullscreen(); } catch {} });
$("#deck").addEventListener("pointermove", wake);
document.addEventListener("keydown", e => {
  if ($("#deck").hidden) return;
  if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); deckGo(deckIdx + 1); wake(); }
  else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); deckGo(deckIdx - 1); wake(); }
  else if (e.key === "Home") deckGo(0);
  else if (e.key === "End") deckGo(deckSlides.length - 1);
  else if (e.key === "Escape" && !document.fullscreenElement) closeDeck();
});
// deslizar para os lados no celular
let tx = null;
$("#deck").addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, {passive:true});
let ty = null;
$("#deck").addEventListener("touchstart", e => { ty = e.touches[0].clientY; }, {passive:true});
$("#deck").addEventListener("touchend", e => {
  if (tx == null) return;
  const rotated = window.matchMedia("(orientation: portrait) and (max-width: 900px)").matches;
  // girado 90°, o "para o lado" da apresentação é o vertical do aparelho
  const d = rotated ? e.changedTouches[0].clientY - ty : e.changedTouches[0].clientX - tx;
  if (Math.abs(d) > 50) deckGo(deckIdx + (d < 0 ? 1 : -1));
  tx = ty = null; wake();
});
setTimeout(() => { if (location.hash === "#moodboard") openDeck(); }, 1200);

/* tema claro/escuro */
const themeBtns = [...document.querySelectorAll("#themeToggle [data-theme-set]")];
themeBtns.forEach(b => b.prepend(icon(b.dataset.themeSet === "dark" ? "moon" : "sun")));
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  themeBtns.forEach(b => { const on = b.dataset.themeSet === t; b.setAttribute("aria-selected", String(on)); b.setAttribute("aria-checked", String(on)); });
}
let savedTheme = null;
try { savedTheme = localStorage.getItem("black-ugc-theme-v2"); } catch {}
// claro é o padrão; escuro só se a pessoa escolher
applyTheme(savedTheme === "dark" ? "dark" : "light");
themeBtns.forEach(b => b.addEventListener("click", () => { applyTheme(b.dataset.themeSet); try { localStorage.setItem("black-ugc-theme-v2", b.dataset.themeSet); } catch {} }));

/* toolbar */
const tabs = [...document.querySelectorAll("#brandTabs .tabs-trigger")];
const paintTabs = () => tabs.forEach(t => t.setAttribute("aria-selected", String(t.dataset.b === ui.brand)));
tabs.forEach(b => b.addEventListener("click", () => { ui.brand = b.dataset.b; saveUi(); paintTabs(); renderSummary(); applyFilters(); }));
paintTabs();
$("#hideDone").checked = ui.hideDone;
$("#hideDone").addEventListener("change", e => { ui.hideDone = e.target.checked; saveUi(); applyFilters(); });
$("#expandAll").checked = ui.expandAll;
$("#expandAll").addEventListener("change", e => { ui.expandAll = e.target.checked; saveUi(); Object.keys(SLOT_META).forEach(renderOpen); });

renderAll();
applyReadOnly();

/* ---------- conexão com o armazenamento ---------- */
function goLocal(msg){
  localMode = true;
  try { const s = JSON.parse(localStorage.getItem(LS_KEY) || "null"); if (s) { Object.assign(state.slots, s.slots || {}); Object.assign(state.phases, s.phases || {}); Object.assign(state.products, s.products || {}); Object.assign(state.locations, s.locations || {}); } } catch {}
  const b = $("#banner"); b.hidden = false; b.replaceChildren(icon("info"), el("span",{text:msg}));
  renderAll(); applyReadOnly();
}
async function connect(){
  if (!window.claude || typeof window.claude.use !== "function") { goLocal("Modo local: o que você escrever fica salvo só neste navegador."); return; }
  const [d, a, u] = await Promise.all([claude.use("db"), claude.use("assets"), claude.use("user")]);
  assets = a;
  if (!d) { goLocal("Não consegui conectar ao armazenamento compartilhado. Entre na sua conta para ver e editar os roteiros da equipe; por enquanto, as edições ficam só neste navegador."); return; }
  db = d;
  if (u) { try { const w = await u.can("data.write"); if (w === false) canWrite = false; } catch {} }
  applyReadOnly(); renderAll();
  // ao abrir, busca as prévias que ficaram para trás (links colados antes de a busca existir)
  const loaded = {}; let backfilled = false;
  const maybeBackfill = () => {
    if (backfilled || !loaded.previews || !loaded.slots || !loaded.phases || !canWrite) return;
    backfilled = true;
    setTimeout(() => { Object.keys(SLOT_META).forEach(id => scanPins("slots", id)); PHASES.forEach(p => scanPins("phases", p.id)); }, 1500);
  };
  const listen = kind => db.collection(kind).onSnapshot(qs => {
    let touched = false;
    if (!qs.metadata || !qs.metadata.fromCache) { loaded[kind] = true; maybeBackfill(); }
    qs.docChanges().forEach(ch => {
      const id = ch.doc.id;
      if (kind === "products" || kind === "previews" || kind === "locations" || kind === "brief") {
        if (kind === "locations" && isLocalNewer(kind, id)) return;
        if (ch.type === "removed") delete state[kind][id];
        else state[kind][id] = JSON.parse(JSON.stringify(ch.doc.data() || {}));
        touched = true; return;
      }
      if (isLocalNewer(kind, id)) return;
      if (ch.type === "removed") state[kind][id] = blank(kind);
      else state[kind][id] = {...blank(kind), ...JSON.parse(JSON.stringify(ch.doc.data() || {}))};
      if (!Array.isArray(state[kind][id].media)) state[kind][id].media = [];
      renderDoc(kind, id); touched = true;
    });
    if (touched) {
      if (kind === "products") { renderProducts(); Object.keys(SLOT_META).forEach(renderShoe); }
      else if (kind === "locations") renderLocations();
      else if (kind === "brief") renderLooks();
      else if (kind === "previews") renderAllLinks();
      else { renderSummary(); applyFilters(); if (kind === "slots") renderProducts(); }
    }
    setSaveState();
  }, err => {
    if (err && err.code === "revoked") { canWrite = false; applyReadOnly(); }
    else toast("A conexão com o painel caiu. Recarregue a página.");
  });
  listen("products"); listen("previews"); listen("slots"); listen("phases"); listen("narrations"); listen("creators"); listen("locations"); listen("brief");
  setSaveState();
}
connect();
})();
