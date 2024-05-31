<template>
  <div
    class="flex items-center justify-start h-[150px] bg-white px-4 gap-12 border-t-[4px] border-[#f4f4f4]"
  >
    <div class="flex gap-8 overflow-x-auto .scrollbar px-1">
      <!-- Variable info -->
      <GeneratedOrtesysVariable
        v-for="item in variables"
        :key="item.id"
        :name="item.name"
        :measure="item.measure"
      />
    </div>

    <!-- Tutorial button -->
    <Button text="Tutorial" color="primary" class="w-[200px]" />
  </div>
</template>

<script setup>
// SHOULD RECEIVE SELECTED GENERATED ORTESYS WITH IT´S TUTORIAL AND VARIABLES
const variables = [
  { id: 1, name: "Rigidez", measure: "1 a 3" },
  { id: 2, name: "Calcanhar", measure: "16x21cm" },
  { id: 3, name: "Largura", measure: "16x21cm" },
  { id: 4, name: "Comprimento", measure: "16x21cm" },
  { id: 5, name: "Comprimento", measure: "16x21cm" },
  { id: 6, name: "Comprimento", measure: "16x21cm" },
  { id: 7, name: "Comprimento", measure: "16x21cm" },
  { id: 8, name: "Comprimento", measure: "16x21cm" },
];
</script>
