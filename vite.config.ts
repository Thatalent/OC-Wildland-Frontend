import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080/api/graphql",
      "/images": "http://localhost:8080/",
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
