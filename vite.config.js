import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Maps "src" to the /src folder in your project root.
      'src': '/src'
    }
  },
  build: {
    chunkSizeWarningLimit: 5000,
  }
})

