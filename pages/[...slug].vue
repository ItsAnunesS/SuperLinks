<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
  title: computed(() => t('app.title')),
  description: computed(() => t('app.description')),
  keywords: computed(() => t('app.keywords')),
  robots: 'index,follow',
  applicationName: computed(() => t('app.name')),
  appleMobileWebAppTitle: computed(() => t('app.name')),
  msapplicationConfig: '/favicon/browserconfig.xml',
  msapplicationTileImage: '/favicon/mstile-144x144.png',
  msapplicationTileColor: '#22c55e',
  themeColor: '#22c55e',
  ogTitle: computed(() => t('app.name')),
  ogSiteName: computed(() => t('app.name')),
  ogDescription: computed(() => t('app.description')),
  ogImage: 'https://links.anuness.dev/images/seo.jpg',
  ogImageAlt: computed(() => t('app.name')),
  ogUrl: 'https://links.anuness.dev/',
  ogLocale: locale,
  twitterCard: 'summary_large_image',
  twitterSite: '@ItsAnunesS',
  twitterTitle: computed(() => t('app.name')),
  twitterDescription: computed(() => t('app.description')),
  twitterCreator: '@ItsAnunesS',
  twitterImage: 'https://links.anuness.dev/images/seo.jpg',
});

useHeadSafe({
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest'
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#22c55e'
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico'
    }
  ],
  meta: [
    {
      id: 'contact',
      name: 'contact',
      content: 'hello@anuness.dev'
    },
    {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=utf-8'
    },
    {
      id: 'revisit-after',
      name: 'revisit-after',
      content: '1'
    }
  ]
});

// TODO: Add integration with backend
const projects: LinksInterface[] = [
  {
    id: 'website',
    title: computed(() => t('links.projects.website')),
    href: 'https://anuness.dev',
    target: '_blank',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>',
    disabled: true,
  },
  {
    id: 'blog',
    title: computed(() => t('links.projects.blog')),
    href: 'https://blog.anuness.dev',
    target: '_blank',
    disabled: true,
  },
  {
    id: 'documentation',
    title: computed(() => t('links.projects.documentation')),
    href: 'https://docs.anuness.dev',
    target: '_blank',
    disabled: true,
  }
];

const brands: LinksInterface[] = [
  {
    id: 'bitwo',
    title: computed(() => t('links.brands.bitwo')),
    href: 'https://bitwo.io',
    target: '_blank',
  },
  {
    id: 'dynatrisoft',
    title: computed(() =>t('links.brands.dynatrisoft')),
    href: 'https://dynatrisoft.com',
    target: '_blank',
    disabled: true,
  },
  {
    id: 'quivox',
    title: computed(() => t('links.brands.quivox')),
    href: 'https://quivox.xyz',
    target: '_blank',
    disabled: true,
  }
];
</script>

<template>
  <div>
    <ModalCalendly />
    <AppLinks :title="t('links.projects.title')" :links="projects" />
    <AppLinks :title="t('links.brands.title')" :links="brands" />
  </div>
</template>
