<template>
  <div class="rounded-xl shadow-sm flex items-center bg-white p-10 w-full">
    <h3 class="text-2xl font-bold">{{ text }}</h3>
    <div class="flex gap-2.5 ml-auto">
      <Button text="Editar" class="w-[100px] 2xl:w-[165px]" />
      <Button text="Remover" color="red" class="w-[100px] 2xl:w-[165px]" />
      <Button text="Controle de acesso" color="yellow" class="w-[165px]" />
    </div>
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
</script>
