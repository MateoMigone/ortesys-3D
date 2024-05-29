<template>
  <div>
    <OrtesysForm
      v-show="!showVariableForm && !showAddFiles"
      :setShowVariableForm="setShowVariableForm"
      :setShowAddFiles="setShowAddFiles"
    />
    <VariableForm
      v-show="showVariableForm"
      :setShowVariableForm="setShowVariableForm"
    />
    <AddFiles v-show="showAddFiles" :setShowAddFiles="setShowAddFiles" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

const showVariableForm = ref(false);
const showAddFiles = ref(false);

const setShowVariableForm = (status) => {
  showVariableForm.value = status;
};

const setShowAddFiles = (status) => {
  showAddFiles.value = status;
};
</script>

<style scoped></style>
