import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getJsonLdGraph } from './src/seo/siteConfig.js'

function injectJsonLdFromSiteConfig() {
  return {
    name: 'inject-jsonld',
    transformIndexHtml(html) {
      if (!html.includes('<!-- JSON-LD_VITE_INJECT -->')) return html
      const json = JSON.stringify(getJsonLdGraph())
      const tag = `    <script type="application/ld+json">${json}</script>`
      return html.replace('<!-- JSON-LD_VITE_INJECT -->', tag)
    },
  }
}

export default defineConfig({
  plugins: [react(), injectJsonLdFromSiteConfig()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
})
