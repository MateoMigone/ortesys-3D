<template>
  <div
    class="bg-banner mb-3 flex flex-col justify-center items-center rounded-2xl min-h-[70px] 2xl:min-h-[100px] px-[100px] py-[20px] 2xl:py-[40px]"
  >
    <!-- Banner title -->
    <h2 class="text-[#2d5893] font-bold text-3xl text-center leading-8">
      {{ title }}
    </h2>

    <!-- Banner subtitle -->
    <p class="text-[#2d5893] font-medium text-2xl text-center">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
const { title, subtitle } = defineProps(["title", "subtitle"]);
</script>

<style scoped>
.bg-banner {
  background-image: url("~/assets/imgs/bannerBg.png");
  background-size: cover;
  background-position: right;
}
</style>
