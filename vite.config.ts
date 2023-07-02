import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, './src')}`,
    },
  },
  plugins: [Unocss(), react()],
  server: {
    port: 2333,
    host: true,
  },
})
