<template>
  <div
    v-show="openRequest"
    class="fixed inset-0 bg-black bg-opacity-40 z-10 flex justify-end items-center"
    @click="closeModal"
  >
    <div
      @click.stop
      class="bg-white w-1/3 flex flex-col justify-center items-center gap-6 p-12 rounded-2xl relative right-[15%]"
    >
      <!-- Field input shown depending on the variable type -->
      <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
        <label
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
          >{{
            (type === "Medida" && "Valor mínimo") ||
            (type === "Botao" && "Opção 1") ||
            (type === "Barra" && "Número de opções") ||
            (type === "Computed" && "Equação")
          }}</label
        >
        <input
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
        />
      </div>

      <!-- Field input shown for variable types "Medida" or "Botao" -->
      <div
        v-show="type !== 'Barra' && type !== 'Computed'"
        class="flex flex-col gap-1.5 2xl:gap-2 w-full"
      >
        <label
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
          >{{
            (type === "Medida" && "Valor máximo") ||
            (type === "Botao" && "Opção 2")
          }}</label
        >
        <input
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { openRequest, toggleModal, type } = defineProps([
  "openRequest",
  "toggleModal",
  "type",
]);
// SHOULD RECEIVE UPDATE FUNCTIONS IF NECCESSARY

const closeModal = () => {
  toggleModal();
};
</script>

<style scoped></style>
