<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  links: {
    type: Array,
    required: true
  }
});

const { title, links } = props;
</script>

<template>
  <div class="flex flex-col items-center gap-4 mt-8 text-base-content">
    <h3 v-if="title" class="font-bold text-xl">
      {{ title }}
    </h3>
    <lu class="menu gap-4 p-4 justify-center items-center" v-auto-animate>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.href" :target="link.target ?? '_blank'" class="btn btn-primary btn-wide shadow" :aria-disabled="link.disabled ?? false" :disabled="link.disabled ?? false">
          <span v-if="link.icon" class="absolute left-0 top-1/2 transform -translate-y-1/2" v-html="link.icon"></span>
          {{ link.title.value }}
        </a>
      </li>
    </lu>
  </div>
</template>

<style scoped>

</style>