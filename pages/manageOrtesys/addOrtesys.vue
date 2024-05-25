<template>
  <div>
    <OrtesysForm
      v-show="!showAddVariable"
      :setShowAddVariable="setShowAddVariable"
    />
    <AddVariable
      v-show="showAddVariable"
      :setShowAddVariable="setShowAddVariable"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});

const showAddVariable = ref(false);

const setShowAddVariable = (status) => {
  showAddVariable.value = status;
};
</script>

<style scoped></style>
