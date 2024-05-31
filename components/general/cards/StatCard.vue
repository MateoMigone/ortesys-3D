<template>
  <div
    class="bg-white flex flex-col items-center text-center w-full h-full gap-3 shadow rounded-xl py-8 2xl:py-10"
  >
    <!-- Show normal stat card if title and value were provided -->
    <div v-if="title && value">
      <!-- Stat value -->
      <span
        class="text-[33px] font-medium text-[#2fb7a0] leading-8 2xl:text-4xl"
      >
        {{ value }}
      </span>

      <!-- Stat title -->
      <p
        class="font-bold text-[#2d5893] text-center text-2xl leading-6 max-w-[120px] 2xl:leading-7 2xl:text-[27px] 2xl:max-w-[130px]"
      >
        {{ title }}
      </p>
    </div>

    <!-- Show add icon if title and value were not provided -->
    <svg
      v-else
      width="96"
      height="96"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="62" cy="62" r="62" fill="#E8E8E8" />
      <path
        d="M61.1818 85C58.9727 85 57.1818 83.2091 57.1818 81V70.7786C57.1818 68.5695 55.391 66.7786 53.1818 66.7786H44C41.7909 66.7786 40 64.9878 40 62.7786V61.3107C40 59.1015 41.7909 57.3107 44 57.3107H53.1818C55.391 57.3107 57.1818 55.5198 57.1818 53.3107V43C57.1818 40.7909 58.9727 39 61.1818 39H62.7273C64.9364 39 66.7273 40.7909 66.7273 43V53.3107C66.7273 55.5198 68.5181 57.3107 70.7273 57.3107H80C82.2091 57.3107 84 59.1015 84 61.3107V62.7786C84 64.9878 82.2091 66.7786 80 66.7786H70.7273C68.5181 66.7786 66.7273 68.5695 66.7273 70.7786V81C66.7273 83.2091 64.9364 85 62.7273 85H61.1818Z"
        fill="#2FB7A0"
      />
    </svg>
  </div>
</template>

<script setup>
const { title, value } = defineProps(["title", "value"]);
// SHOULD RECEIVE SELECTED STAT
</script>
