import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // With a custom domain (colinhoar.com) the site is served from the
  // domain root, not a /<repo-name>/ subpath, so base must be "/".
  // (Only project sites without a custom domain, i.e.
  // https://<user>.github.io/<repo>/, need base set to "/<repo-name>/".)
  base: "/",
})
