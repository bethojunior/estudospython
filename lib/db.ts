import { Pool } from "pg";

export const COLLECTIONS = ["slots", "phases", "products", "previews", "narrations", "creators", "locations", "brief"];

const url = "postgres://root:password@68.183.97.89:5432/database";
const g = globalThis as unknown as { __blackPool?: Pool; __blackReady?: Promise<void> };

export const pool = url ? (g.__blackPool ??= new Pool({ connectionString: url, max: 3, idleTimeoutMillis: 10000, connectionTimeoutMillis: 8000 })) : null;

// schema próprio, separado do `public` usado por outros sistemas neste banco
export function ready(): Promise<void> {
  if (!pool) return Promise.reject(new Error("no_database"));
  return (g.__blackReady ??= (async () => {
    await pool.query("CREATE SCHEMA IF NOT EXISTS black_ugc");
    await pool.query(`CREATE TABLE IF NOT EXISTS black_ugc.docs (
      collection text NOT NULL,
      id text NOT NULL,
      data jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY (collection, id)
    )`);
  })().catch(e => { g.__blackReady = undefined; throw e; }));
}
