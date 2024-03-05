<template>
  <div class="bg-white rounded-lg">
    <div
      class="flex justify-center items-center border-b-[4px] border-[#f4f4f4] p-3 cursor-pointer"
      @click="toggle"
    >
      <div class="flex justify-center items-center">
        <h2 class="text-2xl font-extrabold">Punho</h2>
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
        <div class="flex justify-around gap-4 p-6">
          <div
            class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
          >
            <div
              class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8"
            >
              32
            </div>
            <div
              class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg"
            >
              Órteses geradas
            </div>
          </div>
          <div
            class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
          >
            <div
              class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8"
            >
              R$32
            </div>
            <div
              class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg"
            >
              Receita
            </div>
          </div>
          <div
            class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
          >
            <div
              class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8"
            >
              32kg
            </div>
            <div
              class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg"
            >
              Gesso salvo
            </div>
          </div>
          <div
            class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
          >
            <div
              class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8"
            >
              32kg
            </div>
            <div
              class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg"
            >
              Filamento utilizado
            </div>
          </div>
          <div
            class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
          >
            <div
              class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8"
            >
              32m
            </div>
            <div
              class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg"
            >
              Velcro utilizado
            </div>
          </div>
          <div
            class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
          >
            <div
              class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8"
            >
              32h
            </div>
            <div
              class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg"
            >
              Tempo de impressão
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
};

const enter = (el, done) => {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
  el.addEventListener("transitionend", done);
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
};

const leave = (el, done) => {
  el.style.height = "0";
  el.style.opacity = "0";
  el.addEventListener("transitionend", done);
};
</script>

<style scoped>
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
