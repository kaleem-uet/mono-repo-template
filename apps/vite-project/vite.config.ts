import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // “@workspace/ui/…” ⇒ ../../packages/ui/src/…
      '@workspace/ui': path.resolve(__dirname, '../../packages/ui/src'),
      // keep your “@/…” → “src/…” alias too if you like
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    // point to the UI package's postcss.config.mjs
    postcss: path.resolve(__dirname, "../../packages/ui/postcss.config.mjs"),
  },
  server: { port: 3001 },
})
