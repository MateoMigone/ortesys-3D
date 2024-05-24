<template>
  <div class="flex justify-center my-4">
    <HumanBody />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});
</script>
