<template>
  <div>
    <!-- Update ortesys form -->
    <OrtesysForm
      v-show="!showVariableForm && !showAddFiles"
      :setShowVariableForm="setShowVariableForm"
      :setShowAddFiles="setShowAddFiles"
      :ortesysToUpdate="ortesysToUpdate"
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
    <AddFiles
      v-show="showAddFiles"
      :setShowAddFiles="setShowAddFiles"
      :ortesysToUpdateVariables="ortesysToUpdate.variables"
    />
  </div>
</template>

<script setup>
import { provide } from "vue";

definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});
// SHOULD RECEIVE SELECTED ORTESYS (URL PARAM)

const showVariableForm = ref(false);
const showAddFiles = ref(false);
const selectedVariableType = ref("Medida");
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
      title: "Tamanho",
      subtitle: "Deve estar entre 250 e 300 cm",
      enabledText: "CORTA",
      disabledText: "LONGA",
    },
    {
      type: "Barra",
      title: "Nível de regidez",
      subtitle: "Deve estar entre 01 e 03",
      qty: 3,
    },
    {
      type: "Computed",
      title: "Comprimento",
      subtitle: "Distancia para tirar as medidas",
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

const setSelectedVariableType = (newType) => {
  selectedVariableType.value = newType;
};
</script>

<style scoped></style>
