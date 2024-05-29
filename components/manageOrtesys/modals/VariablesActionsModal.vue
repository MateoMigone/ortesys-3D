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
      <div v-if="type === 'Medida'" class="w-2/3 flex flex-col gap-6">
        <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Arquivo</label
          >
          <select
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          >
            <option selected disabled hidden>Selecione o arquivo</option>
            <option>Arquivo 1</option>
            <option>Arquivo 2</option>
          </select>
        </div>

        <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Variável</label
          >
          <select
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          >
            <option selected disabled hidden>Selecione a variável</option>
            <option>Variável 1</option>
            <option>Variável 2</option>
          </select>
        </div>
      </div>

      <div v-else>
        <div v-show="!actionSelected">
          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
              >Ação da variável
            </label>
            <select
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
              v-model="actionSelected"
            >
              <option selected disabled hidden>Selecione uma ação:</option>
              <option>Sustituir valor</option>
              <option>Selecionar recurso a ser exportado</option>
            </select>
          </div>
        </div>

        <div v-show="actionSelected === 'Sustituir valor'" class="flex gap-6">
          <div class="flex flex-col gap-6 w-[45%]">
            <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
              <label
                class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
                >Arquivo</label
              >
              <select
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
              >
                <option selected disabled hidden>Selecione o arquivo</option>
                <option>Arquivo 1</option>
                <option>Arquivo 2</option>
              </select>
            </div>

            <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
              <label
                class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
                >Variável</label
              >
              <select
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
              >
                <option selected disabled hidden>Selecione a variável</option>
                <option>Variável 1</option>
                <option>Variável 2</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col gap-6 w-[45%]">
            <div class="flex flex-col gap-1.5 2xl:gap-2">
              <label
                class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
                >Valor 1</label
              >
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              />
            </div>

            <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
              <label
                class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
                >Valor 2</label
              >
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              />
            </div>

            <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
              <label
                class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
                >Valor 3</label
              >
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              />
            </div>
          </div>
        </div>

        <div
          v-show="actionSelected === 'Selecionar recurso a ser exportado'"
          class="w-full flex flex-col gap-6"
        >
          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
              >Arquivo</label
            >
            <select
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            >
              <option selected disabled hidden>Selecione o arquivo</option>
              <option>Arquivo 1</option>
              <option>Arquivo 2</option>
            </select>
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
              >Recurso 1</label
            >
            <select
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            >
              <option selected disabled hidden>Selecione a variável</option>
              <option>Recurso A</option>
              <option>Recurso B</option>
            </select>
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
              >Recurso 2</label
            >
            <select
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            >
              <option selected disabled hidden>Selecione a variável</option>
              <option>Recurso A</option>
              <option>Recurso B</option>
            </select>
          </div>
        </div>
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

const actionSelected = ref("");

const closeModal = () => {
  actionSelected.value = "";
  toggleModal();
};
</script>

<style scoped></style>
