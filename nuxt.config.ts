import tailwindcss from '@tailwindcss/vite'
import { componentDocs } from './app/site/docs'

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  compatibilityDate: '2026-11-24',
  imports: { autoImport: false },
  components: [],
  css: ['~/styles/site.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  content: {
    experimental: { sqliteConnector: 'native' },
    build: {
      markdown: {
        highlight: false,
        toc: { depth: 3 },
      },
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/docs',
        '/docs/get-started',
        '/docs/components',
        ...componentDocs.map(doc => `/docs/components/${doc.slug}`),
      ],
    },
  },
  app: {
    head: {
      title: 'coss ui for Vue',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'The accessible components of coss ui, ported to Vue and built on Vase UI.' },
      ],
      script: [
        { src: '/theme.js' },
      ],
    },
  },
})
