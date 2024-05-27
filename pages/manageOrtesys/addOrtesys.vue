<template>
  <div>
    <OrtesysForm
      v-show="!showAddVariable && !showAddFiles"
      :setShowAddVariable="setShowAddVariable"
      :setShowAddFiles="setShowAddFiles"
    />
    <AddVariable
      v-show="showAddVariable"
      :setShowAddVariable="setShowAddVariable"
    />
    <AddFiles v-show="showAddFiles" :setShowAddFiles="setShowAddFiles" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

const showAddVariable = ref(false);
const showAddFiles = ref(false);

const setShowAddVariable = (status) => {
  showAddVariable.value = status;
};

const setShowAddFiles = (status) => {
  showAddFiles.value = status;
};
</script>

<style scoped></style>
