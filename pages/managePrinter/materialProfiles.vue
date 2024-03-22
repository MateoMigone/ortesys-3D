<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-6">
    <div
      class="bg-white p-8 w-[40%] min-w-[300px] flex justify-center rounded-2xl"
    >
      <Button text="Adicionar novo perfil" color="green" class="w-[240px]" />
    </div>
    <ConfigCard text="Perfil 1" type="materialProfile" />
    <ConfigCard text="Perfil 2" type="materialProfile" />
    <ConfigCard text="Perfil 3" type="materialProfile" />
    <ConfigCard text="Perfil 4" type="materialProfile" />
    <ConfigCard text="Perfil 5" type="materialProfile" />
    <ConfigCard text="Perfil 6" type="materialProfile" />
    <ConfigCard text="Perfil 7" type="materialProfile" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
</script>
