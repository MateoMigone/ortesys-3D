<template>
  <div>
    <div>
      <label
        v-if="edit"
        class="text-[#2d5893] font-bold text-xl max-w-max select-none cursor-pointer"
        @click="openEditVariableModal"
        >{{ variable.title }}</label
      >
      <label
        v-else
        class="text-[#2d5893] font-bold text-xl max-w-max select-none"
        @mouseenter="toggleShowRefImg"
        @mouseleave="toggleShowRefImg"
        >{{ variable.title }}</label
      >
      <input
        type="text"
        class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
        placeholder="Preencha com as medidas"
      />
      <p class="text-sm font-medium">{{ variable.subtitle }}</p>
    </div>

    <EditVariableModal
      :openRequest="showEditVariableModal"
      :toggleModal="openEditVariableModal"
    />
  </div>
</template>

<script setup>
const { variable, toggleShowRefImg, edit } = defineProps([
  "variable",
  "toggleShowRefImg",
  "edit",
]);

const showEditVariableModal = ref(false);

const openEditVariableModal = () => {
  showEditVariableModal.value = !showEditVariableModal.value;
};
</script>

<style scoped></style>
