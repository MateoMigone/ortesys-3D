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
      <!-- <div class="flex gap-4 items-end">
        <div class="flex flex-col gap-2">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Quantidade</label
          >
          <input
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
          />
        </div>
        <Button
          text="Enviar"
          color="primary"
          class="w-[250px] h-[40px]"
          @click="handleClick"
        />
      </div>

      <div class="flex gap-4 items-end">
        <div class="flex flex-col gap-2">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Quantidade</label
          >
          <input
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
          />
        </div>
        <Button
          text="Enviar sem custo"
          color="green"
          class="w-[250px] h-[40px]"
          @click="handleClick"
        />
      </div> -->
      <!-- <div class="flex gap-4 items-end">
        <div class="flex flex-col gap-2">
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Quantidade</label
          >
          <input
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
          />
        </div>

        <Button
          text="Enviar"
          color="primary"
          class="w-[150px] h-[40px]"
          @click="handleClick"
        />

        <Button
          text="Enviar sem custo"
          color="green"
          class="w-[150px] h-[40px]"
          @click="handleClick"
        />
      </div> -->
      <div class="flex flex-col gap-4 items-end">
        <div class="flex flex-col gap-2 w-[250px]">
          <!-- Quantity title -->
          <label
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
            >Quantidade</label
          >
          <!-- Quantity input -->
          <input
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
          />
        </div>

        <!-- Send material button -->
        <Button
          text="Enviar"
          color="primary"
          class="w-[250px] h-[40px]"
          @click="handleClick"
        />

        <!-- Send free material button -->
        <Button
          text="Enviar sem custo"
          color="green"
          class="w-[250px] h-[40px]"
          @click="handleClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { openRequest, toggleModal } = defineProps([
  "openRequest",
  "toggleModal",
]);
// SHOULD RECEIVE SELECTED USER (BY URL PARAM)

const closeModal = () => {
  toggleModal();
};

const handleClick = () => {
  toggleModal();
};
</script>
