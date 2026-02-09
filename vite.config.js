import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // Especifica explícitamente la raíz del proyecto
  plugins: [react()],
  base: './', // Añadido para resolver rutas relativas en Docker
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
