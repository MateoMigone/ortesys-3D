<template>
  <div>
    <!-- Add ortesys form -->
    <OrtesysForm
      v-show="!showVariableForm && !showAddFiles"
      :setShowVariableForm="setShowVariableForm"
      :setShowAddFiles="setShowAddFiles"
      :setSelectedVariableType="setSelectedVariableType"
    />

    <!-- Add/update ortesys variable form -->
    <VariableForm
      v-show="showVariableForm"
      :setShowVariableForm="setShowVariableForm"
      :variableType="selectedVariableType"
      :setVariableType="setSelectedVariableType"
    />

    <!-- Add/update ortesys files -->
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
const selectedVariableType = ref("Medida");

const setShowVariableForm = (status) => {
  showVariableForm.value = status;
};

const setShowAddFiles = (status) => {
  showAddFiles.value = status;
};

const setSelectedVariableType = (newType) => {
  selectedVariableType.value = newType;
};
</script>

<style scoped></style>
