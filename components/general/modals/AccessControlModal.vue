<template>
  <div
    v-show="openRequest"
    class="fixed inset-0 bg-black bg-opacity-40 z-10 flex justify-end items-center"
    @click="closeModal"
  >
    <div
      @click.stop
      class="bg-white w-1/3 flex flex-col justify-center items-center gap-5 py-12 rounded-2xl relative right-[15%]"
    >
      <Button
        text="Apenas eu"
        color="purple"
        class="w-[250px] h-[40px]"
        @click.prevent="selectOption"
      />
      <Button
        text="Eu e colaboradores"
        color="green"
        class="w-[250px] h-[40px]"
        @click.prevent="selectOption"
      />
      <Button
        text="Todos"
        color="yellow"
        class="w-[250px] h-[40px]"
        @click.prevent="selectOption"
      />
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

const selectOption = () => {
  // set access control value in the component that called this modal
  closeModal();
};
</script>
