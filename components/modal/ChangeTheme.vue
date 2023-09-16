<script setup lang="ts">

</script>

<template>
  <button class="daisyui-btn w-32 m:w-44" onclick="change_theme.showModal()">
    Theme
  </button>
  <dialog id="change_theme" class="daisyui-modal daisyui-modal-bottom sm:daisyui-modal-middle">
    <div class="daisyui-modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="daisyui-modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="daisyui-btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
