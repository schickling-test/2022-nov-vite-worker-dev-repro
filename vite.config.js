import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8083,
  },
  build: {
    sourcemap: true,
    target: ['es2020'],
  },
  optimizeDeps: {
    esbuildOptions: { target: 'es2020' },
  },
  plugins: [
    // Needed to enable OPFS
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp')
          next()
        })
      },
    },
  ],
})
