<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-6">
    <!-- Add new printer button -->
    <div
      class="bg-white p-8 w-[40%] min-w-[300px] flex justify-center rounded-2xl"
    >
      <NuxtLink to="/managePrinter/addPrinter">
        <Button
          text="Adicionar nova impressora"
          color="green"
          class="w-[240px]"
        />
      </NuxtLink>
    </div>

    <!-- Show all printers with a v-for -->
    <ConfigCard text="Impressora 1" type="printer" />
    <ConfigCard text="Impressora 2" type="printer" />
    <ConfigCard text="Impressora 3" type="printer" />
    <ConfigCard text="Impressora 4" type="printer" />
    <ConfigCard text="Impressora 5" type="printer" />
    <ConfigCard text="Impressora 6" type="printer" />
    <ConfigCard text="Impressora 7" type="printer" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});

// SHOULD GET ALL THE PRINTERS FROM THE API
</script>
