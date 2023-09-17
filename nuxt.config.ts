// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL || 'https://links.anuness.dev/'
    }
  },
  typescript: {
    strict: true,
    tsConfig: {
      "include": ["types/*.d.ts", "types/**/*.d.ts", "types/**/**/*.d.ts"]
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
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
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
  cookieControl: {
    closeModalOnClickOutside: false,
    cookies: {
      necessary: [
        {
          description: {
            en: 'This cookie stores general preferences.',
            pt: 'Este cookie armazena preferências gerais.'
          },
          id: 'preferences',
          name: {
            en: 'Preferences',
            pt: 'Preferências'
          },
        },
        {
          description: {
            en: 'This cookie stores the language preferences.',
            pt: 'Este cookie armazena as preferências de idioma.'
          },
          id: 'i18n',
          name: {
            en: 'Language',
            pt: 'Idioma'
          },
          targetCookieIds: ['anuness_i18n_redirected']
        }
      ],
      optional: [
        {
          description: {
            en: 'This cookie stores the theme preferences.',
            pt: 'Este cookie armazena as preferências de tema.'
          },
          id: 'theme',
          name: {
            en: 'Theme',
            pt: 'Tema'
          },
          targetCookieIds: ['theme']
        }
      ],
    },
    cookieOptions: {
      path: '/',
    },
    locales: ['en', 'pt'],
    localeTexts: {
      en: {
        save: 'Save',
      },
      pt: {
        save: 'Salvar',
      },
    }
  },
  tailwindcss: {
    configPath: '~/config/tailwind.config',
    viewer: true,
  },
  nitro: {
    preset: 'static',
  }
})
