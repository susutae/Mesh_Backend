import { getSql, initializeDatabase } from '../db.js'

await initializeDatabase()

const sql = getSql()
const resources = await sql`
  SELECT resource_key, updated_at
  FROM mesh_api_resources
  ORDER BY resource_key
`

console.log(
  `Database initialized with ${resources.length} resources: ${resources
    .map(({ resource_key: resourceKey }) => resourceKey)
    .join(', ')}`,
)
