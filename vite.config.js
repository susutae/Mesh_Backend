import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
      '/config': 'http://localhost:3001',
      '/configadvanced': 'http://localhost:3001',
      '/deviceinfo': 'http://localhost:3001',
      '/health': 'http://localhost:3001',
      '/spectrum': 'http://localhost:3001',
      '/status': 'http://localhost:3001',
      '/statusadvanced': 'http://localhost:3001',
    },
  },
})
