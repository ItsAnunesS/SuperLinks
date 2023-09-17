<script setup lang="ts">
const { t } = useI18n();
const useTheme = useThemeState();
</script>

<template>
  <button class="daisyui-btn w-32 m:w-44" onclick="change_theme.showModal()">
    {{ t('modal.theme.button') }}
  </button>
  <dialog id="change_theme" class="daisyui-modal daisyui-modal-bottom sm:daisyui-modal-middle">
    <div class="daisyui-modal-box">
      <form method="dialog">
        <button class="mt-4 daisyui-btn daisyui-btn-sm daisyui-btn-circle daisyui-btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg pb-4">{{ t('modal.theme.title') }}</h3>
      <ul class="daisyui-menu w-full daisyui-rounded-box gap-2">
       <template v-for="theme in useTheme.availableThemes">
         <li v-if="useTheme.currentTheme.value !== theme">
           <a :data-theme="theme" @click.prevent="useTheme.changeTheme(theme)">
             {{ t(`themes.${theme}`) }}
             <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
               <div class="bg-primary w-2 rounded"></div>
               <div class="bg-secondary w-2 rounded"></div>
               <div class="bg-accent w-2 rounded"></div>
               <div class="bg-neutral w-2 rounded"></div>
             </div>
           </a>
         </li>
       </template>
      </ul>
    </div>
    <form method="dialog" class="daisyui-modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
