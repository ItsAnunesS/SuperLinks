<script setup lang="ts">
const { t } = useI18n();
const useLanguage = useLanguageState();
const availableLocales = useLanguage.availableLocales;
</script>

<template>
  <button class="daisyui-btn w-32 m:w-44" onclick="change_language.showModal()">
    {{ t('modal.language.button') }}
  </button>
  <dialog id="change_language" class="daisyui-modal daisyui-modal-bottom md:daisyui-modal-middle">
    <div class="daisyui-modal-box max-h-56 md:max-h-max overflow-hidden">
      <form method="dialog">
        <button class="mt-4 daisyui-btn daisyui-btn-sm daisyui-btn-circle daisyui-btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg pb-4">{{ t('modal.language.title') }}</h3>
      <ul class="daisyui-menu w-full daisyui-rounded-box">
        <li v-for="locale in availableLocales" :key="locale.code">
          <button class="daisyui-btn daisyui-btn-outline pt-4" @click.prevent.stop="useLanguage.changeLanguage(locale.code)">
            {{ locale.name }}
          </button>
        </li>
      </ul>
    </div>
    <form method="dialog" class="daisyui-modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
