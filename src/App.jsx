import { useEffect, useState } from 'react'
import './App.css'

const endpoints = [
  { method: 'GET', path: '/status', description: 'Mesh node status' },
  { method: 'GET', path: '/config', description: 'Current configuration' },
  { method: 'POST', path: '/config', description: 'Update configuration' },
  { method: 'GET', path: '/deviceinfo', description: 'Device information' },
  {
    method: 'GET',
    path: '/statusadvanced',
    description: 'Advanced status metrics',
  },
  { method: 'GET', path: '/spectrum', description: 'Spectrum measurements' },
]

function App() {
  const [connection, setConnection] = useState('checking')
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0])
  const [responseBody, setResponseBody] = useState(
    'Select an endpoint to inspect its response.',
  )
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch('/health')
      .then((response) => {
        if (!cancelled) {
          setConnection(response.ok ? 'connected' : 'unavailable')
        }
      })
      .catch(() => {
        if (!cancelled) {
          setConnection('unavailable')
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  async function inspectEndpoint(endpoint) {
    setLoading(true)
    setSelectedEndpoint(endpoint)

    try {
      const response = await fetch(endpoint.path, {
        method: endpoint.method,
        headers:
          endpoint.method === 'POST'
            ? { 'Content-Type': 'application/json' }
            : undefined,
        body: endpoint.method === 'POST' ? '{}' : undefined,
      })
      const body = await response.json()
      setResponseBody(JSON.stringify(body, null, 2))
    } catch {
      setResponseBody(
        JSON.stringify(
          {
            error:
              'The API could not be reached. Start the API server and configure DATABASE_URL.',
          },
          null,
          2,
        ),
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <header className="hero">
        <div>
          <p className="eyebrow">Mesh database console</p>
          <h1>REST telemetry, backed by Neon.</h1>
          <p className="intro">
            A Vercel-ready Express API for mesh status, configuration, device,
            and spectrum data.
          </p>
        </div>
        <div className={`connection ${connection}`}>
          <span aria-hidden="true" />
          Database {connection}
        </div>
      </header>

      <section className="workspace" aria-label="API explorer">
        <div className="endpoint-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">API surface</p>
              <h2>Endpoints</h2>
            </div>
            <span>{endpoints.length} routes</span>
          </div>

          <div className="endpoint-list">
            {endpoints.map((endpoint) => (
              <button
                className={
                  selectedEndpoint.method === endpoint.method &&
                  selectedEndpoint.path === endpoint.path
                    ? 'active'
                    : ''
                }
                key={`${endpoint.method}-${endpoint.path}`}
                onClick={() => inspectEndpoint(endpoint)}
                type="button"
              >
                <span className={`method ${endpoint.method.toLowerCase()}`}>
                  {endpoint.method}
                </span>
                <span className="endpoint-copy">
                  <strong>{endpoint.path}</strong>
                  <small>{endpoint.description}</small>
                </span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="response-panel">
          <div className="response-toolbar">
            <div>
              <span className="live-dot" aria-hidden="true" />
              <code>
                {selectedEndpoint.method} {selectedEndpoint.path}
              </code>
            </div>
            <button
              disabled={loading}
              onClick={() => inspectEndpoint(selectedEndpoint)}
              type="button"
            >
              {loading ? 'Loading…' : 'Run request'}
            </button>
          </div>
          <pre aria-live="polite">{responseBody}</pre>
        </div>
      </section>

      <footer>
        <p>
          Express <span>→</span> Neon PostgreSQL <span>→</span> Vercel
        </p>
        <code>POST /config</code> accepts partial JSON updates.
      </footer>
    </main>
  )
}

export default App
