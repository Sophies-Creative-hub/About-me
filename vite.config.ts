import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/About-me/' // Ersetze durch deinen tatsächlichen Repository-Namen
})