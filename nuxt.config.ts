// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL || 'https://links.anuness.dev'
    }
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
