<template>
  <div
    class="bg-white flex justify-between items-center shadow rounded-xl p-6 w-full"
  >
    <div class="flex items-center justify-center w-[80px] [h-80px]">
      <img
        src="../../assets/imgs/playicon.png"
        alt="Play Icon"
        class="w-full h-full"
      />
    </div>
    <div>
      <span class="text-[25px] font-bold"> {{ text }} </span>
    </div>
    <Button text="Tutorial" class="w-[110px]" />
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
</script>
