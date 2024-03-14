<template>
  <div class="bg-white rounded-lg">
    <div
      class="flex justify-center items-center border-b-[4px] border-[#f4f4f4] p-5 cursor-pointer"
      :class="type === 'user' && 'p-6'"
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
          class="w-6 h-6 ml-2 transition-transform duration-500 mr-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m6 9 6 6 6-6"
          />
        </svg>
        <div
          v-show="type === 'user'"
          class="grid grid-cols-4 gap-2 place-items-center"
        >
          <Button text="Cadastro" color="secondary" class="w-full h-full" />
          <Button text="Pagamento" color="secondary" class="w-full h-full" />
          <Button text="Material" color="secondary" class="w-full h-full" />
          <div class="w-[100px]">
            <Button
              text="Habilitar / Desabilitar"
              color="secondary"
              class="leading-4"
            />
          </div>
        </div>
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
        <InfoCard />
      </div>
    </transition>
  </div>
</template>

<script setup>
const { type } = defineProps(["type"]);
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
