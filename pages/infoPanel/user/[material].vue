<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-6">
    <div class="flex flex-col gap-5 w-full">
      <MaterialCard color="Vermelho" />
      <MaterialCard color="Vermelho" />
      <MaterialCard color="Vermelho" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
const { material } = useRoute().params;
const buttonText = ref("Adicionar novo " + material);
</script>

<style scoped></style>
