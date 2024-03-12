<template>
  <div
    class="flex flex-col items-center text-center w-full gap-3 shadow-sm rounded-xl py-8 2xl:py-10"
  >
    <span class="text-[33px] font-medium text-[#2fb7a0] leading-8 2xl:text-4xl">
      {{ value }}
    </span>
    <p
      class="font-bold text-[#2d5893] text-center text-2xl leading-6 max-w-[120px] 2xl:leading-7 2xl:text-[27px] 2xl:max-w-[130px]"
    >
      {{ title }}
    </p>
  </div>
</template>

<script setup>
const { title, value } = defineProps(["title", "value"]);
</script>
