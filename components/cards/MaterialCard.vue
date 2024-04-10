<template>
  <div
    class="flex items-center justify-between rounded-2xl h-[115px] px-[26px] shadow-sm bg-white"
  >
    <div class="flex items-center gap-2 min-w-[140px]">
      <span class="block w-10 h-10 rounded-full" :class="color"></span>
      <span class="font-bold text-lg 2xl:text-2xl">{{ color }}</span>
    </div>
    <div class="flex gap-6 2xl:gap-12">
      <div class="flex items-center gap-2">
        <span class="font-bold text-[#2fb7a0] text-xl 2xl:text-2xl">
          32kg
        </span>
        <span class="font-bold text-[#2d5893] text-xl 2xl:text-2xl">
          Utilizado
        </span>
      </div>
      <div class="flex items-center gap-2">
        <span class="font-bold text-[#2fb7a0] text-xl 2xl:text-2xl">
          32kg
        </span>
        <span class="font-bold text-[#2d5893] text-xl 2xl:text-2xl">
          Solicitado
        </span>
      </div>
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
