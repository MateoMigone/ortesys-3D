<template>
  <div class="bg-white rounded-xl">
    <div
      class="flex items-center justify-between p-6 cursor-pointer"
      @click="toggle"
    >
      <div class="flex flex-col items-start gap-1">
        <span class="rounded-lg px-2 py-0.5 bg-[#D2FFDA]">Órtese de Braço</span>
        <h3 class="font-bold text-2xl">Silvana Oliveira</h3>
        <p class="font-bold text-[#2FB7A0] underline" v-show="filesQty > 1">
          02 ARQUIVOS GERADOS
        </p>
      </div>
      <div class="flex gap-4 items-center">
        <div class="flex gap-2">
          <Button
            color="secondary"
            text="Download"
            class="w-[100px]"
            @click.stop
          />
          <Button
            color="primary"
            text="Imprimir"
            class="w-[100px]"
            @click.stop
          />
        </div>
        <div class="flex items-center gap-2.5">
          <div class="flex items-center gap-2">
            <svg
              width="14"
              height="16"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7408 1.78994H11.9631V0.189941H10.4075V1.78994H4.18528V0.189941H2.62972V1.78994H1.85194C0.988609 1.78994 0.304164 2.50994 0.304164 3.38994L0.296387 14.5899C0.296387 15.4699 0.988609 16.1899 1.85194 16.1899H12.7408C13.5964 16.1899 14.2964 15.4699 14.2964 14.5899V3.38994C14.2964 2.50994 13.5964 1.78994 12.7408 1.78994ZM12.7408 14.5899H1.85194V5.78994H12.7408V14.5899ZM3.4075 7.38994H7.29639V11.3899H3.4075V7.38994Z"
                fill="black"
              />
            </svg>
            <span>13/05/2023</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2964 2.84311L11.0764 0.141113L10.1734 1.21211L13.3934 3.91411L14.2964 2.84311ZM4.41239 1.21211L3.51639 0.141113L0.296387 2.83611L1.19939 3.90711L4.41239 1.21211ZM7.64639 4.43911H6.59639V8.63911L9.92139 10.6341L10.4464 9.77311L7.64639 8.11411V4.43911ZM7.29639 1.63911C3.81739 1.63911 0.996387 4.46011 0.996387 7.93911C0.996387 11.4181 3.81039 14.2391 7.29639 14.2391C10.7754 14.2391 13.5964 11.4181 13.5964 7.93911C13.5964 4.46011 10.7754 1.63911 7.29639 1.63911ZM7.29639 12.8391C4.58739 12.8391 2.39639 10.6481 2.39639 7.93911C2.39639 5.23011 4.58739 3.03911 7.29639 3.03911C10.0054 3.03911 12.1964 5.23011 12.1964 7.93911C12.1964 10.6481 10.0054 12.8391 7.29639 12.8391Z"
                fill="#2B2B2B"
              />
            </svg>
            <span>19:08h</span>
          </div>
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
      </div>
    </div>
    <transition
      name="expand"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isOpen" class="content rounded-b-2xl">
        <OrderContentCard />
        <OrderContentCard />
      </div>
    </transition>
  </div>
</template>

<script setup>
const { filesQty } = defineProps(["filesQty"]);

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
