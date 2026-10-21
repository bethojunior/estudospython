# Black 2026 · Roteiros UGC

Next.js (App Router). Layout e lógica idênticos ao painel original.

- **Dados**: PostgreSQL, schema próprio `black_ugc` (tabela `black_ugc.docs`, criada automaticamente).
  Variável: `DATABASE_URL`.
- **Fotos e vídeos**: Vercel Blob (Vercel → Storage → Blob → conectar ao projeto; cria `BLOB_READ_WRITE_TOKEN`).

Sem `DATABASE_URL` o site cai em "modo local" (salva só no navegador).
