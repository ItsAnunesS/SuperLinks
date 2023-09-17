<script setup lang="ts">
const { t } = useI18n();

// TODO: Add integration with backend
const general: LinksInterface[] = [
  {
    id: 'calendly',
    title: t('links.general.calendly'),
    href: 'https://calendly.com/anuness',
    target: '_blank',
  },
]

const projects: LinksInterface[] = [
  {
    id: 'website',
    title: t('links.projects.website'),
    href: 'https://anuness.dev',
    target: '_blank',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>',
    disabled: true,
  },
  {
    id: 'blog',
    title: t('links.projects.blog'),
    href: 'https://blog.anuness.dev',
    target: '_blank',
    disabled: true,
  },
  {
    id: 'documentation',
    title: t('links.projects.documentation'),
    href: 'https://docs.anuness.dev',
    target: '_blank',
    disabled: true,
  }
];

const brands: LinksInterface[] = [
  {
    id: 'bitwo',
    title: 'Bitwo (WIP)',
    href: 'https://bitwo.io',
    target: '_blank',
  },
  {
    id: 'dynatrisoft',
    title: 'Dynatrisoft Games (SOON)',
    href: 'https://dynatrisoft.com',
    target: '_blank',
    disabled: true,
  },
  {
    id: 'quivoxmedia',
    title: 'Quivox Media (SOON)',
    href: 'https://quivox.xyz',
    target: '_blank',
    disabled: true,
  }
];
</script>

<template>
  <div>
    <AppLinks :links="general" />
    <AppLinks :title="t('links.projects.title')" :links="projects" />
    <AppLinks :title="t('links.brands.title')" :links="brands" />
  </div>
</template>
