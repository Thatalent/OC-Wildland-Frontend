import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  proxy: {
      // proxy requests starting with /api to the backend server root
      // so frontend can call /api/graphql and Vite will forward to the backend.
      "/api": "http://localhost:8080",
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
