import { saveResource } from '../db.js'
import { STATUS_ENDPOINTS } from '../status-endpoints.js'

const timeoutMs = Number(process.env.STATUS_SYNC_TIMEOUT_MS || 10000)

async function fetchStatus({ ip, sourceUrl }) {
  const response = await fetch(sourceUrl, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(timeoutMs),
  })

  if (!response.ok) {
    throw new Error(`${sourceUrl} returned HTTP ${response.status}`)
  }

  const payload = await response.json()

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error(`${sourceUrl} did not return a JSON object`)
  }

  if (payload.ip !== ip) {
    throw new Error(
      `${sourceUrl} returned status for ${payload.ip || 'an unknown IP'}`,
    )
  }

  return payload
}

const results = await Promise.allSettled(
  STATUS_ENDPOINTS.map(async (endpoint) => {
    const payload = await fetchStatus(endpoint)
    const saved = await saveResource(endpoint.resourceKey, payload)

    return {
      ip: endpoint.ip,
      resourceKey: endpoint.resourceKey,
      updatedAt: saved.updated_at,
    }
  }),
)

let failed = false

for (const [index, result] of results.entries()) {
  const endpoint = STATUS_ENDPOINTS[index]

  if (result.status === 'fulfilled') {
    console.log(
      `Synced ${result.value.ip} to ${result.value.resourceKey} at ${result.value.updatedAt}`,
    )
  } else {
    failed = true
    console.error(`Failed to sync ${endpoint.sourceUrl}: ${result.reason.message}`)
  }
}

if (failed) {
  process.exitCode = 1
}
