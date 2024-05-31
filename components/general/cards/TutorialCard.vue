<template>
  <div
    class="bg-white flex justify-between items-center shadow rounded-xl p-6 w-full"
  >
    <!-- Play tutorial icon -->
    <div class="flex items-center justify-center w-[80px] [h-80px]">
      <img
        src="~/assets/imgs/playicon.png"
        alt="Play Icon"
        class="w-full h-full"
      />
    </div>

    <!-- Tutorial title -->
    <span class="text-[25px] font-bold"> {{ text }} </span>

    <!-- Tutorial link button -->
    <Button text="Tutorial" class="w-[110px]" />
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
// SHOULD RECEIVE ALL THE TUTORIALS
</script>
