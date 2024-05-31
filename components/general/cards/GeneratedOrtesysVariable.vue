<template>
  <div class="flex flex-col items-center gap-3 mb-4">
    <!-- Variable info title -->
    <h4 class="font-bold text-xl text-[#2D5893] px-2">{{ name }}</h4>
    <!-- Variable info value -->
    <div
      class="flex justify-center items-center w-full py-2 rounded-md border-[1px] bg-[#FCFCFF] border-[#CDCEE4]"
    >
      <span class="font-medium text-sm">{{ measure }}</span>
    </div>
  </div>
</template>

<script setup>
const { name, measure } = defineProps(["name", "measure"]);
</script>
