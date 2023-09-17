<script setup lang="ts">
const { t } = useI18n();
const options = {
  url: 'https://calendly.com/anuness/30min',
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 mt-8 text-base-content">
    <button class="daisyui-btn daisyui-btn-primary daisyui-btn-md 2xl:daisyui-btn-lg w-full relative" onclick="calendly_modal.showModal()">
      {{ t('links.general.calendly') }}
    </button>
  </div>
  <dialog id="calendly_modal" class="daisyui-modal daisyui-modal-bottom md:daisyui-modal-middle">
    <div class="daisyui-modal-box max-h-5xl overflow-hidden">
      <form method="dialog">
        <button class="mt-4 daisyui-btn daisyui-btn-sm daisyui-btn-circle daisyui-btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg pb-4">{{ t('links.general.calendly') }}</h3>
      <CalendlyInlineWidget v-bind="options" />
    </div>
    <form method="dialog" class="daisyui-modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

