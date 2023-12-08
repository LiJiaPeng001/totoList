import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unimport from 'unimport/unplugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, './src')}`,
    },
  },
  plugins: [
    react(),
    Unimport.vite({
      dts: true,
      dirs: [
        './composables/*',
      ],
      presets: [
        'react',
        'react-router',
      ],
    }),
  ],
  server: {
    port: 2333,
    host: true,
  },
})
