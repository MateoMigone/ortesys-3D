<template>
  <div class="w-[90%] mx-auto flex flex-col gap-2.5">
    <TextBanner title="Adicionar impressora" />
    <PrinterConfigForm submitAction="create" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});
</script>

<style scoped></style>
