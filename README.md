# Mesh Database API

React/Vite client with an Express REST API and a Neon-hosted PostgreSQL
database, configured for deployment on Vercel.

## API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/status` | Retrieve mesh status information |
| GET | `/status/192.168.10.32` | Retrieve the stored status for node `192.168.10.32` |
| GET | `/status/192.168.10.33` | Retrieve the stored status for node `192.168.10.33` |
| GET | `/config` | Retrieve configuration |
| POST | `/config` | Merge a partial configuration update |
| GET | `/deviceinfo` | Retrieve device information |
| GET | `/statusadvanced` | Retrieve advanced status information |
| GET | `/spectrum` | Retrieve spectrum information |
| GET | `/configadvanced` | Retrieve advanced configuration |
| GET | `/health` | Check the Neon database connection |

All resource payloads are stored as PostgreSQL `JSONB` records. The table and
the document-derived starter payloads are created automatically on the first
successful API request.

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and add the pooled Neon connection
   string:

   ```dotenv
   DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
   CONFIG_WRITE_TOKEN=generate-a-long-random-secret
   ```

3. Export the variables and start the API:

   ```bash
   set -a
   source .env.local
   set +a
   npm run db:init
   npm run dev:api
   ```

4. In another terminal, start the Vite client:

   ```bash
   npm run dev
   ```

Vite runs on `http://localhost:5173`; the standalone API defaults to
`http://localhost:3001`. The Vite development proxy forwards the documented
API paths to that local API. You can alternatively use `vercel dev` to exercise
the production rewrites in `vercel.json`.

## Updating configuration

`POST /config` merges top-level fields by default and returns the resulting
configuration object. Browser writes are accepted only from
`CONFIG_WRITE_ORIGINS` (which defaults to the production mesh UI). Non-browser
clients must send `CONFIG_WRITE_TOKEN` as a bearer credential:

```bash
curl -X POST http://localhost:3001/config \
  -H "Authorization: Bearer $CONFIG_WRITE_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"wifiEnable":false,"meshName":"field-mesh"}'
```

To replace the entire configuration, use `POST /config?replace=true`.
Database initialization only inserts missing resources; it never overwrites
existing payloads during API reads or serverless cold starts.

## Syncing node status to Neon

The two additional node responses are stored independently as
`status:192.168.10.32` and `status:192.168.10.33` JSONB resources. From a
machine on the mesh network, fetch both source APIs and upsert their complete
payloads into Neon with:

```bash
set -a
source .env.local
set +a
npm run db:sync-status
```

The sync validates that each response contains the expected IP before writing
it. Set `STATUS_SYNC_TIMEOUT_MS` to change the default 10-second request
timeout. Existing stored status remains unchanged if a source cannot be read.

## Deploying to Vercel

1. Import the repository into Vercel.
2. Add Neon from the Vercel Marketplace, or add an existing pooled Neon
   connection string as the `DATABASE_URL` environment variable.
3. Deploy. Vercel builds the Vite application and serves `api/index.js` as the
   Express function. The rewrites in `vercel.json` preserve the document's
   root-level endpoint paths.

Do not commit `.env.local` or a real database connection string.
