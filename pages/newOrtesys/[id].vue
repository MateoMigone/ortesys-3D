<template>
  <div class="w-[90%] mx-auto">
    <OrtesysGenerator v-if="true" />
    <SelectOrtesysVersion v-else />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});
</script>

<style scoped></style>
