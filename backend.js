import { timingSafeEqual } from 'node:crypto'
import express from 'express'
import {
  checkDatabaseConnection,
  getResource,
  saveResource,
} from './db.js'

const app = express()
const port = Number(process.env.PORT || 3001)

const endpointDefinitions = [
  { method: 'GET', path: '/status', resource: 'status' },
  { method: 'GET', path: '/config', resource: 'config' },
  { method: 'POST', path: '/config', resource: 'config' },
  { method: 'GET', path: '/deviceinfo', resource: 'deviceinfo' },
  { method: 'GET', path: '/statusadvanced', resource: 'statusadvanced' },
  { method: 'GET', path: '/spectrum', resource: 'spectrum' },
  { method: 'GET', path: '/configadvanced', resource: 'configadvanced' },
]

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))
app.use((request, response, next) => {
  response.set({
    'Access-Control-Allow-Origin': process.env.CORS_ORIGIN || '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Cache-Control': 'no-store',
  })

  if (request.method === 'OPTIONS') {
    return response.sendStatus(204)
  }

  return next()
})

function routePaths(path) {
  return [path, `/api${path}`]
}

function isJsonObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function hasUnsafeKeys(value) {
  return ['__proto__', 'constructor', 'prototype'].some((key) =>
    Object.prototype.hasOwnProperty.call(value, key),
  )
}

function requestMetadata(request) {
  return {
    ip:
      request.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.ip ||
      'unknown',
    userAgent: request.get('user-agent') || 'unknown',
  }
}

function tokensMatch(expected, provided) {
  const expectedBuffer = Buffer.from(expected)
  const providedBuffer = Buffer.from(provided)

  return (
    expectedBuffer.length === providedBuffer.length &&
    timingSafeEqual(expectedBuffer, providedBuffer)
  )
}

function authorizeConfigWrite(request, response) {
  const configuredToken = process.env.CONFIG_WRITE_TOKEN
  const authorization = request.get('authorization') || ''
  const providedToken = authorization.startsWith('Bearer ')
    ? authorization.slice('Bearer '.length)
    : ''

  if (!configuredToken) {
    console.warn('[config] write rejected', {
      ...requestMetadata(request),
      reason: 'write_token_not_configured',
    })
    response.status(503).json({
      error: 'Configuration updates are disabled.',
    })
    return false
  }

  if (!providedToken || !tokensMatch(configuredToken, providedToken)) {
    console.warn('[config] write rejected', {
      ...requestMetadata(request),
      reason: 'invalid_write_token',
    })
    response.status(401).json({
      error: 'A valid configuration write token is required.',
    })
    return false
  }

  return true
}

function getResourceHandler(resourceKey) {
  return async (_request, response, next) => {
    try {
      const resource = await getResource(resourceKey)

      if (!resource) {
        return response.status(404).json({
          error: 'Resource not found',
          resource: resourceKey,
        })
      }

      return response.json(resource.payload)
    } catch (error) {
      return next(error)
    }
  }
}

app.get(['/', '/api'], (_request, response) => {
  response.json({
    name: 'Mesh Database REST API',
    database: 'Neon PostgreSQL',
    endpoints: endpointDefinitions.map(({ method, path }) => ({ method, path })),
  })
})

app.get(routePaths('/health'), async (_request, response) => {
  try {
    const databaseTime = await checkDatabaseConnection()
    response.json({ status: 'ok', database: 'connected', databaseTime })
  } catch (error) {
    response.status(503).json({
      status: 'degraded',
      database: 'unavailable',
      error:
        error.code === 'DATABASE_URL_MISSING'
          ? error.message
          : 'Unable to connect to the database',
    })
  }
})

for (const { method, path, resource } of endpointDefinitions) {
  if (method === 'GET') {
    app.get(routePaths(path), getResourceHandler(resource))
  }
}

app.post(routePaths('/config'), async (request, response, next) => {
  try {
    if (!authorizeConfigWrite(request, response)) {
      return
    }

    if (!isJsonObject(request.body) || hasUnsafeKeys(request.body)) {
      return response.status(400).json({
        error: 'The request body must be a JSON object with safe property names.',
      })
    }

    const replace = request.query.replace === 'true'
    const current = replace ? null : await getResource('config')
    const payload = replace
      ? request.body
      : { ...(current?.payload ?? {}), ...request.body }
    const saved = await saveResource('config', payload)

    console.info('[config] write accepted', {
      ...requestMetadata(request),
      replace,
      updatedFields: Object.keys(request.body).sort(),
    })

    return response.json(saved.payload)
  } catch (error) {
    return next(error)
  }
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Endpoint not found',
    method: request.method,
    path: request.path,
  })
})

app.use((error, _request, response, _next) => {
  void _next

  if (error instanceof SyntaxError && 'body' in error) {
    return response.status(400).json({ error: 'Malformed JSON request body' })
  }

  console.error(error)
  const missingDatabaseUrl = error.code === 'DATABASE_URL_MISSING'
  return response.status(missingDatabaseUrl ? 503 : 500).json({
    error: missingDatabaseUrl
      ? error.message
      : 'An unexpected server error occurred',
  })
})

if (process.env.VERCEL !== '1' && process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Mesh Database REST API listening on http://localhost:${port}`)
  })
}

export { app }
export default app
