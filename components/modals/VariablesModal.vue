<template>
  <div
    v-show="openRequest"
    class="fixed inset-0 bg-black bg-opacity-40 z-10 flex justify-end items-center"
    @click="closeModal"
  >
    <div
      @click.stop
      class="bg-white w-1/3 flex flex-col justify-center items-center gap-6 py-12 rounded-2xl relative right-[15%]"
    >
      <div
        class="w-[250px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 cursor-pointer"
        @click="selectMeasure"
      >
        <span class="text-sm">Preencha com as medidas</span>
      </div>
      <div
        class="flex gap-1 rounded-full border-[2px] border-[#2D5893] bg-[#FCFCFF] px-1 py-1 2xl:py-1.5 cursor-pointer"
        @click="selectButton"
      >
        <span class="text-sm text-white bg-[#2FB7A0] rounded-full p-1.5"
          >ON</span
        >
        <span class="text-sm text-[#C45C5C] rounded-full p-1.5">OFF</span>
      </div>
      <div class="flex flex-col gap-4 cursor-pointer" @click="selectBar">
        <div class="relative">
          <div
            class="absolute left-0 w-[250px] py-[4px] bg-[#2D5893] rounded-full"
          ></div>
          <div
            class="absolute top-[-2px] left-[88px] z-10 p-[6px] bg-[#2FB7A0] rounded-full"
          ></div>
          <div
            class="absolute right-0 w-[160px] py-[4px] bg-[white] opacity-[0.8] rounded-full"
          ></div>
        </div>
        <div class="flex justify-between w-[250px]">
          <span class="text-sm text-[#2D5893] font-bold">Mínimo</span>
          <span class="text-sm text-[#2D5893] font-bold">Máximo</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { openRequest, toggleModal, setVariableType } = defineProps([
  "openRequest",
  "toggleModal",
  "setVariableType",
]);

const closeModal = () => {
  toggleModal();
};

const selectMeasure = () => {
  setVariableType("Medida");
  toggleModal();
};

const selectButton = () => {
  setVariableType("Botao");
  toggleModal();
};

const selectBar = () => {
  setVariableType("Barra");
  toggleModal();
};
</script>

<style scoped></style>
