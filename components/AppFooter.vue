<script setup lang="ts">
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer items-center justify-center footer-center pb-2 mt-8 p-4 text-base-content">
    <aside>
      <ModalOssCredits />
      <p>{{ $t('footer.copyright', { name: $t('app.name'), year }) }}</p>
    </aside>
  </footer>
</template>