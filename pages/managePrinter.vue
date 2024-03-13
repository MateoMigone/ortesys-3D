<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-6">
    <div
      class="bg-white p-8 w-[40%] min-w-[300px] flex justify-center rounded-2xl"
    >
      <Button
        text="Adicionar nova impressora"
        color="green"
        class="w-[240px]"
      />
    </div>
    <ConfigCard text="Impressora 1" />
    <ConfigCard text="Impressora 2" />
    <ConfigCard text="Impressora 3" />
    <ConfigCard text="Impressora 4" />
    <ConfigCard text="Impressora 5" />
    <ConfigCard text="Impressora 6" />
    <ConfigCard text="Impressora 7" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
</script>
