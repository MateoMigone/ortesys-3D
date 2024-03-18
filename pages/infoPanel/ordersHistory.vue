<template>
  <div class="w-[90%] mx-auto flex flex-col gap-6">
    <DateFilterButton />
    <div class="flex flex-col gap-5">
      <OrtesysInfoCard />
      <OrtesysInfoCard />
      <OrtesysInfoCard />
      <OrtesysInfoCard />
      <OrtesysInfoCard />
      <OrtesysInfoCard />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
</script>

<style lang="scss" scoped></style>
