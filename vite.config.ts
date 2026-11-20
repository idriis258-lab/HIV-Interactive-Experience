import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1100,
    rollupOptions: {
      output: {
        // The object form of manualChunks let React leak into the motion chunk,
        // which left react-vendor empty and inflated the lazy Three payload.
        // Match module paths explicitly so each vendor chunk owns its packages.
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
            return 'react-vendor'
          }

          if (/[\\/]node_modules[\\/]three[\\/]/.test(id)) {
            return 'three-core'
          }

          if (/[\\/]node_modules[\\/]@react-three[\\/]/.test(id)) {
            return 'r3f-vendor'
          }

          if (/[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils|gsap)[\\/]/.test(id)) {
            return 'motion-vendor'
          }
        },
      },
    },
  },
})
