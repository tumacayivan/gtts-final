import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SPA with client-side routing. The dev server and `vite preview` both fall
// back to index.html for unknown paths, so deep links like /about work.
export default defineConfig({
  plugins: [react()],
  server: {
    // Preferred port. strictPort is intentionally OFF so that if this port is
    // busy, Vite automatically falls back to the next free one instead of
    // failing — check the terminal output for the actual URL.
    port: 4322,
  },
})
