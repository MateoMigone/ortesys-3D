<template>
  <div>
    <VariableForm
      :type="variableType"
      :setShowAddVariable="setShowAddVariable"
      :setVariableType="setVariableType"
    />
  </div>
</template>

<script setup>
defineProps(["setShowAddVariable"]);

const variableType = ref("Medida");

const setVariableType = (newType) => {
  variableType.value = newType;
};
</script>

<style scoped></style>
