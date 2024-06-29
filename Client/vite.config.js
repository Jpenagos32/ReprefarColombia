import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Deploy para el repositorio
  base: '/ReprefarColombia',
  plugins: [react()],
})
