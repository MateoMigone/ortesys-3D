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
      <!-- Confirm remove question -->
      <h3 class="text-xl font-bold text-[#2D5893]">
        Tem certeza que deseja remover?
      </h3>

      <div class="flex gap-3 w-[300px]">
        <!-- Confirm button -->
        <Button
          text="Sim"
          color="green"
          class="w-full h-[40px]"
          @click="handleClick"
        />

        <!-- Cancel button -->
        <Button
          text="Não"
          color="red"
          class="w-full h-[40px]"
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

const closeModal = () => {
  toggleModal();
};

const handleClick = () => {
  // SHOULD DELETE WHATEVER IT RECEIVES OR CANCEL THE OPERATION
  closeModal();
};
</script>
