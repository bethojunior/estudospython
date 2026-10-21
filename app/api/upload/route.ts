import { NextResponse } from "next/server";
import { del } from "@vercel/blob";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

export const dynamic = "force-dynamic";

// upload direto do navegador para o Vercel Blob (aceita vídeos grandes)
export async function POST(req: Request) {
  const body = (await req.json()) as HandleUploadBody;
  try {
    const json = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async () => ({
        addRandomSuffix: true,
        maximumSizeInBytes: 500 * 1024 * 1024,
      }),
      onUploadCompleted: async () => {},
    });
    return NextResponse.json(json);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  const { url } = await req.json();
  if (typeof url === "string" && /\.public\.blob\.vercel-storage\.com\//.test(url)) await del(url);
  return NextResponse.json({ ok: true });
}
