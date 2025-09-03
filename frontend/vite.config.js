import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import logger from "eslints-logger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), logger()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,      // changes the origin of the host header to the target URL
        ws: true,                // proxy websockets
        secure: false,           // if using self-signed certificates
        rewrite: (path) => path.replace(/^\/api/, '/api'), // optional path rewrite
        configure: (proxy, options) => {
          // custom proxy configuration if needed
        }
      }
    }
  }
})
