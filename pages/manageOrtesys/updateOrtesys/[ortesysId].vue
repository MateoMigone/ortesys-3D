<template>
  <div>
    <OrtesysForm
      v-show="!showVariableForm && !showAddFiles"
      :setShowVariableForm="setShowVariableForm"
      :setShowAddFiles="setShowAddFiles"
      :ortesysToUpdate="ortesysToUpdate"
    />
    <VariableForm
      v-show="showVariableForm"
      :setShowVariableForm="setShowVariableForm"
    />
    <AddFiles v-show="showAddFiles" :setShowAddFiles="setShowAddFiles" />
  </div>
</template>

<script setup>
import { provide } from "vue";

definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

const showVariableForm = ref(false);
const showAddFiles = ref(false);
const ortesysToUpdate = ref({
  title: "Punho",
  description: "Deve estar entre 250 e 300 cm",
  variables: [
    {
      type: "Medida",
      title: "Palma",
      subtitle: "Deve estar entre 250 e 300 cm",
    },
    {
      type: "Botao",
      title: "Palma",
      subtitle: "Deve estar entre 250 e 300 cm",
      enabledText: "ON",
      disabledText: "OFF",
    },
    {
      type: "Barra",
      title: "Nível de regidez",
      subtitle: "Deve estar entre 01 e 03",
      qty: 3,
    },
  ],
});
// Here i could create a var called "variableToUpdate" to keep track on which variable
// are we going to do the update by using a "setVariableToUpdate(var)" function

const setShowVariableForm = (status) => {
  showVariableForm.value = status;
};
provide("setShowVariableForm", setShowVariableForm);

const setShowAddFiles = (status) => {
  showAddFiles.value = status;
};
</script>

<style scoped></style>
