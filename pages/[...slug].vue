<script setup lang="ts">
const { t } = useI18n();

// TODO: Add integration with backend
const general: LinksInterface[] = [
  {
    id: 'calendly',
    title: t('links.calendly'),
    href: 'https://calendly.com/anuness',
    target: '_blank',
  },
]

const links: LinksInterface[] = [
  {
    id: 'website',
    title: 'My Website',
    href: 'https://anuness.dev',
    target: '_blank',
  }
];

const brands: LinksInterface[] = [
  {
    id: 'bitwo',
    title: 'Bitwo',
    href: 'https://bitwo.io',
    target: '_blank',
  },
  {
    id: 'dynatrisoft',
    title: 'Dynatrisoft Games',
    href: 'https://dynatrisoft.com',
    target: '_blank',
  },
  {
    id: 'quivoxmedia',
    title: 'Quivox Media',
    href: 'https://quivox.xyz',
    target: '_blank',
  }
];
</script>

<template>
  <div>
    <AppLinks :links="general" />
    <AppLinks :title="t('links.website')" :links="links" />
    <AppLinks :title="t('links.brands')" :links="brands" />
  </div>
</template>
