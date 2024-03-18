<script setup lang="ts">

</script>

<template>
  <div class="flex flex-wrap items-center justify-center">
    <button class="flex flex-wrap gap-1 items-center justify-center text-center w-full tooltip tooltip-accent" onclick="modal_oss_credits.showModal()" :data-tip="$t('footer.credits.tooltip')">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-accent" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
      </svg>
      {{ $t('footer.credits.title') }}
    </button>
    <dialog id="modal_oss_credits" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box bg-[#fc9c05]">
        <h3 class="font-bold text-2xl py-4 pb-6 text-white">
          {{ $t('modal.credits.title') }}
        </h3>
        <ul class="list-none gap-4 flex flex-col justify-center items-center mx-auto" v-auto-animate>
          <li>
            <a href="https://nuxt.com/" target="_blank" class="card w-full bg-[#ffffff] shadow-xl">
              <div class="card-body">
                <div class="flex flex-nowrap gap-2">
                  <div class="avatar">
                    <div class="w-10 rounded-full ring ring-[#00DC82]">
                      <img src="/img/logo/nuxt.png" class="p-1" />
                    </div>
                  </div>
                  <h2 class="card-title text-[#020420]">
                    Nuxt
                  </h2>
                </div>
                <p class="text-[#020420] text-justify">
                  Nuxt is an open source framework that makes web development intuitive and powerful.
                  Create performant and production-grade full-stack web apps and websites with confidence.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://daisyui.com/" target="_blank" class="card w-full bg-[#1ad1a5] shadow-xl">
              <div class="card-body">
                <div class="flex flex-nowrap gap-2">
                  <div class="avatar">
                    <div class="w-10 rounded-full ring ring-accent bg-white">
                      <img src="/img/logo/daisy.png" />
                    </div>
                  </div>
                  <h2 class="card-title text-white">
                    DaisyUI
                  </h2>
                </div>
                <p class="text-white text-justify font-semibold">
                  DaisyUI adds component class names to Tailwind CSS
                  so you can make beautiful websites <span class="border-base-content/20 border-b-2">faster than ever.</span>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target="_blank" class="card w-full bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl">
              <div class="card-body">
                <div class="flex flex-nowrap gap-2">
                  <div class="avatar">
                    <div class="w-10 rounded-full ring ring-accent bg-white">
                      <img src="/img/logo/tailwind.png" />
                    </div>
                  </div>
                  <h2 class="card-title text-white">
                    Tailwind CSS
                  </h2>
                </div>
                <p class="text-white text-justify font-semibold">
                  Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style scoped>

</style>