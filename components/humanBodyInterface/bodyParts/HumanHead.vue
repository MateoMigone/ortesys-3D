<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 z-10"
    v-show="headActive || neckActive"
  ></div>

  <div
    class="absolute top-[-20px] left-[-130px] z-20 flex items-center"
    v-show="headActive"
  >
    <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
      <p class="font-extrabold text-2xl">Cabeça</p>
      <p class="leading-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <hr class="border-[1.5px] border-white w-[60px]" />
    <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
  </div>

  <div
    class="absolute top-[8px] left-[-130px] z-20 flex items-center"
    v-show="neckActive"
  >
    <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
      <p class="font-extrabold text-2xl">Pescoço</p>
      <p class="leading-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <hr class="border-[1.5px] border-white w-[60px]" />
    <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
  </div>

  <NuxtLink to="/newOrtesys">
    <svg
      viewBox="0 0 136 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[79.78px] absolute top-0 left-[131.5px] pointer-events-none"
      :class="headActive && 'z-20'"
    >
      <path
        d="M135.88 151.743C132.68 151.283 129.52 150.603 126.48 149.543C120.3 147.453 115.07 143.393 109.14 140.693C104.9 138.763 100.34 136.183 98.58 131.713C98.27 130.223 97.97 128.563 97.79 126.993C96.43 117.353 97.76 107.703 98.03 98.0327C98.68 97.2827 99.07 96.8227 99.07 96.8227C101.12 92.7227 101.12 83.5027 101.12 83.5027C102.14 85.5527 105.22 86.5727 107.27 85.5527C109.32 84.5327 112.39 77.3527 112.39 76.3327C112.39 75.3127 114.44 68.1327 114.44 64.0427C114.44 59.9527 110.34 57.8927 110.34 57.8927C107.26 57.8927 106.24 60.9627 106.24 60.9627C109.31 40.4727 102.65 23.5727 102.65 23.5727C90.88 0.0527267 69.76 -0.0272719 67.93 0.00272811C66.11 -0.0372719 44.98 0.0527267 33.23 23.5627C33.23 23.5627 26.57 40.4627 29.64 60.9527C29.64 60.9527 28.61 57.8827 25.54 57.8827C25.54 57.8827 21.44 59.9327 21.44 64.0327C21.44 68.1327 23.49 75.3027 23.49 76.3227C23.49 77.3427 26.56 84.5227 28.61 85.5427C30.66 86.5627 33.73 85.5427 34.76 83.4927C34.76 83.4927 34.76 92.7127 36.81 96.8127C36.81 96.8127 37.19 97.2727 37.85 98.0227C38.12 107.693 39.45 117.343 38.09 126.983C37.91 128.573 37.61 130.223 37.3 131.703C35.55 136.183 31 138.753 26.74 140.683C20.81 143.393 15.59 147.443 9.4 149.533C6.37 150.603 3.2 151.273 0 151.733H135.88V151.743Z"
        :fill="headColor"
        @mouseover="changeHeadToGreen"
        @mouseleave="changeHeadToBlue"
        class="cursor-pointer pointer-events-auto"
      />
    </svg>
  </NuxtLink>

  <NuxtLink to="/newOrtesys">
    <svg
      viewBox="0 0 150 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[88px] absolute bottom-[462px] left-[127px] pointer-events-none"
      :class="(neckActive || headActive) && 'z-20'"
    >
      <path
        d="M149.64 55.67H0C2.21 55.39 4.46 55.15 6.77 54.94C6.86 54.94 6.96 54.92 7.05 54.91C10.2 54.45 13.31 53.77 16.31 52.73C22.5 50.64 27.71 46.58 33.65 43.88C36.55 42.56 39.58 40.94 41.78 38.63C42.04 38.36 42.28 38.07 42.52 37.78C43.11 37.04 43.62 36.23 44.01 35.34C44.14 35.04 44.23 34.73 44.29 34.42C44.56 33.07 44.82 31.59 44.98 30.17C46.27 21.07 45.15 11.96 44.8 2.83C44.76 1.8 44.39 0.82 43.73 0.03C43.71 0.01 43.71 0 43.71 0H105.96C105.29 0.79 104.91 1.79 104.87 2.83C104.52 11.96 103.4 21.07 104.69 30.17C104.84 31.58 105.11 33.05 105.38 34.41C105.45 34.73 105.54 35.05 105.67 35.35C107.54 39.55 111.93 42.02 116.03 43.88C121.97 46.58 127.19 50.64 133.37 52.73C136.37 53.77 139.48 54.45 142.63 54.91C142.72 54.92 142.81 54.93 142.91 54.94C145.2 55.15 147.45 55.38 149.63 55.67H149.64Z"
        :fill="neckColor"
        @mouseover="changeNeckToGreen"
        @mouseleave="changeNeckToBlue"
        class="cursor-pointer pointer-events-auto"
      />
    </svg>
  </NuxtLink>
</template>

<script setup>
const headColor = ref("#2D5893");
const neckColor = ref("#2D5893");
const headActive = ref(false);
const neckActive = ref(false);

const changeNeckToBlue = () => {
  neckColor.value = "#2D5893";
  neckActive.value = false;
};

const changeNeckToGreen = () => {
  neckColor.value = "#2FB7A0";
  neckActive.value = true;
};

const changeHeadToBlue = () => {
  headActive.value = false;
  headColor.value = "#2D5893";
  neckColor.value = "#2D5893";
};

const changeHeadToGreen = () => {
  headActive.value = true;
  headColor.value = "#2FB7A0";
  neckColor.value = "#2FB7A0";
};
</script>

<style scoped></style>
