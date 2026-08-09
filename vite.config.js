import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// publicDir points at the existing `resources/` folder, so all images keep
// their old URLs (/img/...) without being duplicated into a second directory.
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'resources',
})
