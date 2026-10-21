import { NextResponse } from "next/server";
import { pool, ready } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  let db = false;
  if (pool) { try { await ready(); db = true; } catch {} }
  return NextResponse.json({ db, blob: !!process.env.BLOB_READ_WRITE_TOKEN });
}
