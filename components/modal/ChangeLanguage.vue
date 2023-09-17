<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <button class="daisyui-btn w-32 m:w-44" onclick="change_language.showModal()">
    {{ t('modal.language.button') }}
  </button>
  <dialog id="change_language" class="daisyui-modal daisyui-modal-bottom sm:daisyui-modal-middle">
    <div class="daisyui-modal-box">
      <form method="dialog">
        <button class="mt-4 daisyui-btn daisyui-btn-sm daisyui-btn-circle daisyui-btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg pb-4">{{ t('modal.language.title') }}</h3>
      <ul class="daisyui-menu w-full daisyui-rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <form method="dialog" class="daisyui-modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
