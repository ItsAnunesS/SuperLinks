<script setup lang="ts">
const { t } = useI18n();

useSchemaOrg([
  definePerson({
    name: t('app.name'),
    image: '/favicon/favicon-32x32.png',
    sameAs: [
      'https://github.com/ItsAnunesS',
      'https://anuness.dev',
      'https://www.anuness.dev',
      'https://www.linkedin.com/in/itsanuness',
      'https://www.twitter.com/ItsAnunesS',
      'https://www.instagram.com/itsanuness',
      'https://www.youtube.com/@itsanuness',
      'https://www.youtube.com/@ItsAnunesSXP',
    ]
  }),
  defineWebSite({}),
  defineWebPage(),
]);

const getCookieLocale = computed(() => {
  const { locale } = useI18n();

  switch(locale.value) {
    case 'en':
      return 'en';
    case 'pt':
      return 'pt';
    default:
      return 'en';
  }
});

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
});

const title = computed(() => t('app.title'));
</script>

<template>
  <Html :data-theme="useThemeState().currentTheme" :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body class="min-h-screen max-w-screen over">
      <CookieControl :locale="getCookieLocale" />
      <div class="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 pb-10">
        <AppHeader />
        <main>
          <AppSocialMedias />
          <NuxtPage />
        </main>
        <AppFooter />
      </div>
    </Body>
  </Html>
</template>
