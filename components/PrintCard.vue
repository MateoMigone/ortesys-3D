<template>
  <div
    class="w-[800px] h-[114.38px] rounded-xl shadow-sm flex items-center px-6"
  >
    <h3 class="text-2xl font-bold">{{ text }}</h3>
    <div class="flex gap-2.5 ml-auto">
      <Button text="Editar" class="w-[165px] h-[40px]" />
      <Button text="Remover" color="red" class="w-[165px] h-[40px]" />
      <Button
        text="Controle de acesso"
        color="yellow"
        class="w-[165px] h-[40px]"
      />
    </div>
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
</script>
