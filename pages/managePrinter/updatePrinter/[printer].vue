<template>
  <div class="w-[90%] mx-auto flex flex-col gap-2.5">
    <!-- Text banner -->
    <TextBanner title="Editar impressora" />
    <!-- Update selected printer form -->
    <PrinterConfigForm submitAction="update" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});

// SHOULD GET THE SELECTED PRINTER FROM THE API
</script>

<style scoped></style>
