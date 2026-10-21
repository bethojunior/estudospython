import { NextResponse } from "next/server";
import { COLLECTIONS, pool, ready } from "@/lib/db";

export const dynamic = "force-dynamic";
type Ctx = { params: Promise<{ collection: string; id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  const { collection, id } = await params;
  if (!pool || !COLLECTIONS.includes(collection)) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  try {
    await ready();
    await pool.query(
      `INSERT INTO black_ugc.docs (collection, id, data) VALUES ($1, $2, $3::jsonb)
       ON CONFLICT (collection, id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()`,
      [collection, id, JSON.stringify(await req.json())]
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { collection, id } = await params;
  if (!pool || !COLLECTIONS.includes(collection)) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  try {
    await ready();
    await pool.query("DELETE FROM black_ugc.docs WHERE collection = $1 AND id = $2", [collection, id]);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }
}
