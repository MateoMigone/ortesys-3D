<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-6">
    <div class="w-[400px] bg-white flex justify-center py-8 rounded-2xl">
      <Button :text="buttonText" color="green" class="w-[250px] h-[40px]" />
    </div>
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
