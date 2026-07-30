import app from '../backend.js'

export default function handler(request, response) {
  const url = new URL(request.url, 'http://localhost')
  const rewrittenPath = url.searchParams.get('__path')

  if (rewrittenPath) {
    url.searchParams.delete('__path')
    const query = url.searchParams.toString()
    request.url = `/${rewrittenPath}${query ? `?${query}` : ''}`
  }

  return app(request, response)
}
