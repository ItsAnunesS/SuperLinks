<script setup lang="ts">
const { t } = useI18n();
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="daisyui-footer items-center justify-center daisyui-footer-center p-4 text-base-content">
    <aside>
      <p>{{ t('footer.copyright', { name: t('app.name'), year }) }}</p>
    </aside>
  </footer>
</template>
