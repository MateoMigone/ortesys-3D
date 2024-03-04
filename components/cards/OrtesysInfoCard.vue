<template>
  <div class="max-w-screen-lg mx-auto py-4">
    <div class="bg-white rounded-lg shadow-md">
      <div
        class="flex justify-center items-center border-b border-gray-200 p-6 cursor-pointer"
        @click="toggle"
      >
        <div class="flex justify-center items-center">
          <h2 class="text-2xl font-bold text-gray-800">Punho</h2>
          <svg
            :class="{ rotate: isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2 transition-transform duration-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </div>
      </div>
      <transition
        name="expand"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-show="isOpen" class="content" key="content">
          <!-- Aligned content goes here -->
          <div class="flex justify-between items-start p-6">
            <div class="flex-1 text-center">
              <div class="text-4xl font-bold" style="color: #2fb7a0">32</div>
              <div class="text-lg font-bold" style="color: #2d5893">
                Órteses geradas
              </div>
            </div>
            <div class="flex-1 text-center">
              <div class="text-4xl font-bold" style="color: #2fb7a0">R$32</div>
              <div class="text-lg font-bold" style="color: #2d5893">
                Receita
              </div>
            </div>
            <div class="flex-1 text-center">
              <div class="text-4xl font-bold" style="color: #2fb7a0">32kg</div>
              <div class="text-lg font-bold" style="color: #2d5893">
                Gesso salvo
              </div>
            </div>
            <div class="flex-1 text-center">
              <div class="text-4xl font-bold" style="color: #2fb7a0">32kg</div>
              <div class="text-lg font-bold" style="color: #2d5893">
                Filamento utilizado
              </div>
            </div>
            <div class="flex-1 text-center">
              <div class="text-4xl font-bold" style="color: #2fb7a0">32m</div>
              <div class="text-lg font-bold" style="color: #2d5893">
                Velcro utilizado
              </div>
            </div>
            <div class="flex-1 text-center">
              <div class="text-4xl font-bold" style="color: #2fb7a0">32h</div>
              <div class="text-lg font-bold" style="color: #2d5893">
                Tempo de impressão
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
/* Icon rotation animation */
.rotate {
  transform: rotate(180deg);
}

/* Expand/collapse transition for content */
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease, padding 0.5s ease, opacity 0.5s ease;
}
.expand-enter,
.expand-leave-to /* Initial state for content height, required for transition */ {
  height: 0;
  padding: 0;
  opacity: 0;
}
.content {
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease, opacity 0.5s ease;
}
</style>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    beforeEnter(el) {
      el.style.height = "0";
      el.style.opacity = "0";
    },
    enter(el, done) {
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";
      el.addEventListener("transitionend", done);
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";
    },
    leave(el, done) {
      el.style.height = "0";
      el.style.opacity = "0";
      el.addEventListener("transitionend", done);
    },
  },
};
</script>
