// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config',
    viewer: true,
  },
  googleFonts: {
  },
  site: {
    url: 'https://links.anuness.dev',
  },
  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: 'en',
      redirectOn: 'root',
      useCookie: true,
      cookieCrossOrigin: true,
      cookieKey: 'anuness_i18n_redirected'
    },
    strategy: 'no_prefix',
    vueI18n: './config/i18n.config.ts',
    langDir: './locales/',
    lazy: true,
    locales: [
      { file: 'en.json', code: 'en', iso: 'en-US', name: 'English' },
      { file: 'pt.json', code: 'pt', iso: 'pt-BR', name: 'Português' },
    ],
  },
})
