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
      <!-- Open edit variable form button -->
      <Button
        text="Editar"
        color="purple"
        class="w-[250px] h-[40px]"
        @click.prevent="goToVariableEdit"
      />
      <!-- Remove varibale button -->
      <Button
        text="Remover"
        color="red"
        class="w-[250px] h-[40px]"
        @click.prevent="selectOption"
      />
      <!-- Open access control modal button -->
      <Button
        text="Controle de visualização"
        color="yellow"
        class="w-[250px] h-[40px]"
        @click.prevent="openAccessControlModal"
      />
    </div>

    <!-- Access control modal shown if opened  -->
    <AccessControlModal
      :openRequest="showAccessControlModal"
      :toggleModal="openAccessControlModal"
    />
  </div>
</template>

<script setup>
const { openRequest, toggleModal, variableType, setSelectedVariableType } =
  defineProps([
    "openRequest",
    "toggleModal",
    "variableType",
    "setSelectedVariableType",
  ]);

const showAccessControlModal = ref(false);

const closeModal = () => {
  toggleModal();
};

const openAccessControlModal = () => {
  showAccessControlModal.value = !showAccessControlModal.value;
};

const selectOption = () => {
  closeModal();
};

const setShowVariableForm = inject("setShowVariableForm");

const goToVariableEdit = () => {
  closeModal();
  setSelectedVariableType(variableType);
  setShowVariableForm(true);
};
</script>
