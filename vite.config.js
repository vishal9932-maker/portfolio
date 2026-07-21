import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to inject the dev entrypoint when running dev server
const devHtmlPlugin = () => ({
  name: 'dev-html-plugin',
  transformIndexHtml(html, ctx) {
    if (ctx.server) {
      // In development server, replace the production scripts with the development source entrypoint
      return html
        .replace(/src="\/portfolio\/assets\/index-.*?\.js"/, 'src="/src/main.jsx"')
        .replace(/<link rel="stylesheet" crossorigin href="\/portfolio\/assets\/index-.*?\.css">/, '');
    }
    return html;
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devHtmlPlugin()],
  base: '/portfolio/',
})

