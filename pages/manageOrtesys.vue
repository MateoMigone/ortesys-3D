<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-7">
    <div
      class="bg-white w-[485px] rounded-2xl flex justify-center items-center py-8"
    >
      <Button text="Adicionar novo usuário" color="green" class="w-[250px]" />
    </div>
    <div class="grid grid-cols-2 gap-4 w-full">
      <OrtesysAdminCard text="Punho" />
      <OrtesysAdminCard text="Punho dedo" />
      <OrtesysAdminCard text="Tornozelo" />
      <OrtesysAdminCard text="Punho polegar" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});
</script>
