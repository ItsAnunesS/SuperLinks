// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL || 'https://links.anuness.dev'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | AnunesS',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#22c55e' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'André Nunes' },
        { name: 'application-name', content: 'André Nunes' },
        { name: 'msapplication-TileColor', content: '#22c55e' },
        { name: 'msapplication-TileImage', content: '/favicon/mstile-144x144.png' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#22c55e' },
      ],
    },
    baseURL: '/',
    buildAssetsDir: 'assets',
    rootId: '__anuness_links',
    rootTag: 'body'
  },
  extends: [
    'nuxt-seo-kit'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  i18n: {
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/config/tailwind.config',
    viewer: true,
  },
  nitro: {
    preset: 'static',
  }
})
