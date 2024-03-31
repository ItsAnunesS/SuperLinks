<script setup lang="ts">
useHeadSafe({
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png?v=323223",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png?v=323223",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png?v=323223",
    },
    {
      rel: "manifest",
      href: "/manifest.webmanifest?v=323223",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg?v=323223",
      color: "#e31c1c",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico?v=323223",
    },
  ],
  meta: [
    {
      name: "apple-mobile-web-app-title",
      content: "André Nunes",
    },
    {
      name: "application-name",
      content: "André Nunes",
    },
    {
      name: "msapplication-TileColor",
      content: "#f41010"
    },
    {
      name: "msapplication-TileImage",
      content: "/mstile-144x144.png?v=323223",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ]
})
</script>

<template>
  <Html data-theme="fantasy">
    <Body class="min-h-screen max-w-screen over">
      <div class="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 pb-10">
        <AppHeader />
        <slot />
        <AppFooter />
      </div>
    </Body>
  </Html>
</template>

<style scoped>

</style>