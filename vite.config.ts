import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages *project* sites (https://<user>.github.io/<repo>/) are
  // served from a subpath, so every asset URL needs that repo name as a
  // prefix. Replace "portfolio" with your repo's exact name (case-sensitive).
  // If this site instead lives at a user/org root page (a repo literally
  // named "<user>.github.io"), delete this line — it should stay "/".
  base: "/Colin-Hoar-Portfolio/",
})
