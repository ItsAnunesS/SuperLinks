<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <header class="flex items-center flex-col justify-center">
    <div class="daisyui-avatar daisyui-online">
      <div class="w-24 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
        <img src="https://avatars.githubusercontent.com/u/29176709?v=4" />
      </div>
    </div>
    <h1 class="font-bold mt-4 mb-8 text-xl text-white">{{ t('app.name') }}</h1>
    <div class="flex flex-row justify-center gap-2 mb-5">
      <ModalChangeTheme />
      <ModalChangeLanguage />
    </div>
  </header>
</template>
