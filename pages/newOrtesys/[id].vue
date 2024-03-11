<template>
  <div class="w-[90%] mx-auto">
    <OrtesysGenerator v-if="false" />
    <SelectOrtesysVersion v-else />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
</script>

<style scoped></style>
