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
    <div class="flex items-center flex-col justify-center mt-4 mb-8 text-base-content text-center gap-1">
      <h1 class="font-bold text-2xl">{{ t('app.name') }}</h1>
      <p class="text-md">@ItsAnunesS</p>
    </div>
    <div class="flex flex-row justify-center gap-2 mb-5">
      <ModalChangeTheme />
      <ModalChangeLanguage />
    </div>
  </header>
</template>
