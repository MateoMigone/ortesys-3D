<template>
  <div
    class="shadow-sm rounded-2xl flex items-center gap-8 w-[392px] h-[303px] p-[30px]"
  >
    <img
      src="../../assets/imgs/ortesys-arm.png"
      alt="Ortesys Arm"
      class="w-[91px] h-[214px]"
    />
    <div>
      <h2 class="text-[#131e41] font-bold text-[34px] mb-2">{{ text }}</h2>
      <div class="flex flex-col justify-start gap-3">
        <Button text="Editar" />
        <Button text="Remover" color="red" />
        <Button text="Controle de acesso" color="yellow" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
</script>
