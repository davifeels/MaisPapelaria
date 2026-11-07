import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Permite que o projeto funcione no GitHub Pages em qualquer subdiretório (ex: usuario.github.io/repositorio/)
  base: './',
})
