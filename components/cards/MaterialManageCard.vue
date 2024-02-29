<template>
  <div
    class="flex items-center justify-between rounded-2xl w-[800px] h-[115px] px-[26px] shadow-sm"
  >
    <div class="flex items-center gap-2 min-w-[140px]">
      <span class="block w-10 h-10 rounded-full" :class="color"></span>
      <span class="font-bold">{{ color }}</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="font-bold text-[#2fb7a0] text-xl"> 32kg </span>
      <span class="font-bold text-[#2d5893] w-[120px] h-[25px] text-xl">
        Utilizado
      </span>
    </div>
    <div class="flex items-center gap-2">
      <span class="font-bold text-[#2fb7a0] text-xl"> 32kg </span>
      <span class="font-bold text-[#2d5893] w-[120px] h-[25px] text-xl">
        Solicitado
      </span>
    </div>
    <Button color="green" text="Enviar" class="w-[165px] h-[40px]" />
  </div>
</template>

<script setup>
const { color } = defineProps(["color"]);
</script>

<style scoped>
.Vermelho {
  background-color: #ff0505;
}
</style>
