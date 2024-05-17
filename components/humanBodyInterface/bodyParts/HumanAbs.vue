<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 z-20" v-show="active"></div>
  <div
    class="absolute top-[170px] left-[-150px] z-20 flex items-center"
    v-show="active"
  >
    <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
      <p class="font-extrabold text-2xl">Abdomen</p>
      <p class="leading-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <hr class="border-[1.5px] border-white w-[60px]" />
    <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
  </div>
  <NuxtLink to="/newOrtesys">
    <svg
      width="179"
      height="212"
      viewBox="0 0 179 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[105px] absolute top-[115px] left-[119px] pointer-events-none"
      :class="active && 'z-20'"
    >
      <path
        d="M7.86866 6.5885C10.0347 14.364 13.0629 22.5498 17.1588 28.2737C17.1588 28.2737 18.1853 30.3253 18.1853 31.3511C18.1853 32.3769 20.2384 44.6863 21.2649 47.7637C21.2649 47.7637 22.2915 68.5462 21.2649 71.4902C20.2384 74.4343 16.1323 89.8211 17.1588 108.285C17.1588 108.285 10.9996 143.162 10.9996 149.317C10.9996 149.481 11.0201 149.655 11.1125 149.84C5.90798 166.335 2.33564 191.21 0.631592 212.003H86.9324L88.2258 210.31L89.006 209.203L89.7554 209.264L91.9727 212.003H178.633C177.001 193.149 173.356 175.444 170.739 163.38L167.916 150.107L167.7 150.035C167.793 149.768 167.772 149.522 167.772 149.317C167.772 143.162 161.613 108.285 161.613 108.285C162.639 89.8211 158.533 74.4343 157.507 71.4902C156.48 68.5462 157.507 47.7637 157.507 47.7637C158.533 44.6863 160.586 32.3769 160.586 31.3511C160.586 30.3253 161.613 28.2737 161.613 28.2737C166.017 22.119 169.189 13.1228 171.375 4.85492C171.888 3.347 172.361 1.72626 172.802 0.00292969H6.03117C6.72921 3.73681 7.41699 6.89624 7.8584 6.5885H7.86866Z"
        :fill="color"
        @mouseover="changeToGreen"
        @mouseleave="changeToBlue"
        class="cursor-pointer pointer-events-auto"
      />
    </svg>
  </NuxtLink>
</template>

<script setup>
const color = ref("#2D5893");
const active = ref(false);

const changeToBlue = () => {
  color.value = "#2D5893";
  active.value = false;
};

const changeToGreen = () => {
  color.value = "#2FB7A0";
  active.value = true;
};
</script>

<style scoped></style>
