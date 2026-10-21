import { NextResponse } from "next/server";
import { COLLECTIONS, pool, ready } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  if (!pool || !COLLECTIONS.includes(collection)) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  try {
    await ready();
    const { rows } = await pool.query("SELECT id, data FROM black_ugc.docs WHERE collection = $1", [collection]);
    return NextResponse.json({ docs: rows }, { headers: { "cache-control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }
}
