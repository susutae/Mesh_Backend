# Mesh Database API

React/Vite client with an Express REST API and a Neon-hosted PostgreSQL
database, configured for deployment on Vercel.

## API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/status` | Retrieve mesh status information |
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
configuration object:

```bash
curl -X POST http://localhost:3001/config \
  -H 'Content-Type: application/json' \
  -d '{"wifiEnable":false,"meshName":"field-mesh"}'
```

To replace the entire configuration, use `POST /config?replace=true`.

## Deploying to Vercel

1. Import the repository into Vercel.
2. Add Neon from the Vercel Marketplace, or add an existing pooled Neon
   connection string as the `DATABASE_URL` environment variable.
3. Deploy. Vercel builds the Vite application and serves `api/index.js` as the
   Express function. The rewrites in `vercel.json` preserve the document's
   root-level endpoint paths.

Do not commit `.env.local` or a real database connection string.
