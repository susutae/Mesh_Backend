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
]

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))
app.use((request, response, next) => {
  response.set({
    'Access-Control-Allow-Origin': process.env.CORS_ORIGIN || '*',
    'Access-Control-Allow-Headers': 'Content-Type',
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

    return response.json({
      message: replace
        ? 'Configuration replaced'
        : 'Configuration updated',
      config: saved.payload,
      updatedAt: saved.updated_at,
    })
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
