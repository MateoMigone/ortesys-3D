<template>
  <div class="bg-white rounded-xl w-full">
    <div
      class="flex justify-between items-center gap-12 p-6 cursor-pointer"
      @click="toggle"
    >
      <!-- Question -->
      <h3 class="text-xl font-bold">Pergunta?</h3>

      <!-- Arrow icon -->
      <svg
        :class="{
          'rotate-up': isOpen,
        }"
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.175 0.134277L5 3.91146L8.825 0.134277L10 1.29712L5 6.24539L0 1.29712L1.175 0.134277Z"
          fill="black"
        />
      </svg>
    </div>

    <!-- Transition for card content -->
    <transition
      name="expand"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isOpen" class="content rounded-b-2xl">
        <!-- Answer -->
        <p class="border-t-2 border-t-[#2D5893] text-[#2D5893] font-medium p-6">
          resposta resposta resposta resposta resposta resposta resposta
          resposta resposta resposta resposta resposta resposta resposta
          resposta resposta resposta resposta resposta resposta resposta
          resposta resposta resposta resposta resposta resposta
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
const { filesQty } = defineProps(["filesQty"]);
/* SHOULD RECEIVE ALL THE GENERATED ORTESYS HISTORY OF THE USER */

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
.rotate-up {
  transform: rotate(180deg);
}

svg {
  transition: transform 0.3s ease-in-out;
}
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease, opacity 0.5s ease;
}
.expand-enter,
  .expand-leave-to /* Adjusted to include initial state for content height and opacity */ {
  height: 0;
  opacity: 0;
}
.content {
  /* Adjusted to ensure proper transition effect */
  overflow: hidden;
  transition: height 0.5s ease, opacity 0.5s ease;
}
</style>
