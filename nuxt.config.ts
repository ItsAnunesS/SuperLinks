// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    '@vant/nuxt',
    '@nuxtjs/google-fonts',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/seo',
  ],
  vant: {
  },
  googleFonts: {
  },
  site: {
    url: 'https://links.anuness.dev',
  }
})
