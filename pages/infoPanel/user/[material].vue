<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-6">
    <div class="flex flex-col gap-5 w-full">
      <!-- Return button -->
      <NuxtLink to="/infoPanel/usersHistory"
        ><Button text="Voltar" color="red" class="w-[200px] h-[40px]"
      /></NuxtLink>
      <div class="flex flex-col gap-5 w-full max-h-[65vh] overflow-y-auto">
        <!-- Show created material cards with v-for -->
        <MaterialCard color="Vermelho" />
        <MaterialCard color="Vermelho" />
        <MaterialCard color="Vermelho" />
        <MaterialCard color="Vermelho" />
        <MaterialCard color="Vermelho" />
        <MaterialCard color="Vermelho" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
// SHOULD RECEIVE ALL "FILAMENTO"/"VELCRO" AND SELECTED USER (URL PARAM)

const { material } = useRoute().params;
const buttonText = ref("Adicionar novo " + material);
</script>

<style scoped></style>
