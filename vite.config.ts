import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ManifestV3Export, crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({manifest : manifest as ManifestV3Export})],
})
