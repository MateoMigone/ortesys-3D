<template>
  <div
    v-show="openRequest"
    class="fixed inset-0 bg-black bg-opacity-40 z-30 flex justify-end items-center"
    @click="closeModal"
  >
    <div
      @click.stop
      class="bg-white w-1/3 flex flex-col justify-center items-center gap-5 py-12 rounded-2xl relative right-[15%]"
    >
      <div class="flex flex-col gap-2 items-end">
        <div class="flex flex-col gap-2 w-[250px]">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Cor</label
          >
          <input type="color" class="w-full bg-white h-[40px]" />
        </div>

        <div class="flex flex-col gap-2 w-[250px]">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Nome</label
          >
          <input
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
          />
        </div>

        <div class="flex flex-col gap-2 w-[250px]">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Custo</label
          >
          <input
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
          />
        </div>

        <div class="flex flex-col gap-2 w-[250px]">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Preço</label
          >
          <input
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
          />
        </div>

        <Button
          text="Aplicar"
          color="green"
          class="w-[250px] h-[40px] mt-4"
          @click="createNewMaterial"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { openRequest, toggleModal, material } = defineProps([
  "openRequest",
  "toggleModal",
  "material",
]);

const closeModal = () => {
  toggleModal();
};

const createNewMaterial = () => {
  // post all the info to create new material
  closeModal();
};
</script>
