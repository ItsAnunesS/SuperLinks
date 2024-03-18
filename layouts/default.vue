<script setup lang="ts">

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