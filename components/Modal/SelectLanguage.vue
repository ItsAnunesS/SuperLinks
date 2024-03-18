<script setup lang="ts">
</script>

<template>
  <button class="btn" onclick="modal_select_language.showModal()">open modal</button>
  <dialog id="modal_select_language" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<style scoped>
</style>