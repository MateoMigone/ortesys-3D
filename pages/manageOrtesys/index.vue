<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-7">
    <!-- Open add new ortesys button -->
    <div
      class="bg-white w-[485px] rounded-2xl flex justify-center items-center py-8"
    >
      <NuxtLink to="/manageOrtesys/addOrtesys"
        ><Button text="Adicionar nova órtese" color="green" class="w-[250px]"
      /></NuxtLink>
    </div>

    <div class="grid grid-cols-2 gap-4 w-full max-h-[65vh] overflow-y-auto">
      <!-- Show all Ortesys (admin) -->
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
  /* middleware: "auth", */
});
// SHOULD GET ALL ORTESYS FROM THE API
</script>
