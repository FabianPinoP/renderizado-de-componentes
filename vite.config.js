import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://fabianpinop.github.io/renderizado-de-componentes/',
  plugins: [react()],
})
