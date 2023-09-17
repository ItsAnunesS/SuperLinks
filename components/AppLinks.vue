<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  links: {
    type: Array as PropType<LinksInterface[]>,
    required: true
  }
});

const { title, links } = toRefs(props);
</script>

<template>
  <div class="flex flex-col items-center gap-4 mt-8 text-base-content">
    <h3 v-if="title" class="font-bold text-xl">
      {{ title }}
    </h3>
    <a v-for="link in links" :href="link.href" :target="link.target ?? '_blank'" class="daisyui-btn daisyui-btn-md 2xl:daisyui-btn-lg w-full">
      {{ link.title }}
    </a>
  </div>
</template>
