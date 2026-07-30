import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import app from '../backend.js'
import { DEFAULT_RESOURCES } from '../db.js'

let baseUrl
let server

before(async () => {
  delete process.env.DATABASE_URL
  delete process.env.POSTGRES_URL

  server = await new Promise((resolve, reject) => {
    const candidate = app.listen(0, '127.0.0.1')
    candidate.once('error', reject)
    candidate.once('listening', () => resolve(candidate))
  })
  baseUrl = `http://127.0.0.1:${server.address().port}`
})

after(async () => {
  server.closeAllConnections()
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()))
  })
})

test('advertises the documented API routes', async () => {
  const response = await fetch(`${baseUrl}/api`)
  const body = await response.json()

  assert.equal(response.status, 200)
  assert.equal(body.name, 'Mesh Database REST API')
  assert.ok(
    body.endpoints.some(
      (endpoint) => endpoint.method === 'GET' && endpoint.path === '/status',
    ),
  )
  assert.ok(
    body.endpoints.some(
      (endpoint) =>
        endpoint.method === 'GET' && endpoint.path === '/statusadvanced',
    ),
  )
  assert.equal(
    body.endpoints.some(
      (endpoint) =>
        endpoint.method === 'GET' && endpoint.path === '/configadvanced',
    ),
    true,
  )
})

test('includes every document-derived resource payload', () => {
  assert.deepEqual(Object.keys(DEFAULT_RESOURCES).sort(), [
    'config',
    'configadvanced',
    'deviceinfo',
    'spectrum',
    'status',
    'statusadvanced',
  ])
  assert.equal(Object.keys(DEFAULT_RESOURCES.config).length, 180)
  assert.equal(Object.keys(DEFAULT_RESOURCES.statusadvanced).length, 80)
  assert.equal(DEFAULT_RESOURCES.configadvanced.logServerPort, 9999)
  assert.equal(DEFAULT_RESOURCES.configadvanced.minPwAtten, 6)
})

test('returns a useful health response when DATABASE_URL is missing', async () => {
  const response = await fetch(`${baseUrl}/health`)
  const body = await response.json()

  assert.equal(response.status, 503)
  assert.equal(body.status, 'degraded')
  assert.match(body.error, /DATABASE_URL/)
})

test('rejects malformed JSON', async () => {
  const response = await fetch(`${baseUrl}/config`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{"meshName":',
  })
  const body = await response.json()

  assert.equal(response.status, 400)
  assert.equal(body.error, 'Malformed JSON request body')
})

test('returns JSON for unknown endpoints', async () => {
  const response = await fetch(`${baseUrl}/does-not-exist`)
  const body = await response.json()

  assert.equal(response.status, 404)
  assert.equal(body.error, 'Endpoint not found')
})

test('exposes the documented /configadvanced route', async () => {
  const response = await fetch(`${baseUrl}/configadvanced`)
  const body = await response.json()

  assert.equal(response.status, 503)
  assert.match(body.error, /DATABASE_URL/)
})
