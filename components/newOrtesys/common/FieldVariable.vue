<template>
  <div>
    <div>
      <!-- Field variable title if editing ortesys -->
      <label
        v-if="edit"
        class="text-[#2d5893] font-bold text-xl max-w-max select-none cursor-pointer"
        @click="openEditVariableModal"
        >{{ variable.title }}</label
      >

      <!-- Field variable title if generating ortesys -->
      <label
        v-else
        class="text-[#2d5893] font-bold text-xl max-w-max select-none"
        @mouseenter="toggleShowRefImg"
        @mouseleave="toggleShowRefImg"
        >{{ variable.title }}</label
      >

      <!-- Field variable input -->
      <input
        type="text"
        class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
        placeholder="Preencha com as medidas"
      />

      <!-- Field variable subtitle -->
      <p class="text-sm font-medium">{{ variable.subtitle }}</p>
    </div>

    <!-- Modal shown if hovering title while editing ortesys -->
    <EditVariableModal
      :openRequest="showEditVariableModal"
      :toggleModal="openEditVariableModal"
      :variableType="variable.type"
      :setSelectedVariableType="setSelectedVariableType"
    />
  </div>
</template>

<script setup>
const { variable, toggleShowRefImg, edit, setSelectedVariableType } =
  defineProps([
    "variable",
    "toggleShowRefImg",
    "edit",
    "setSelectedVariableType",
  ]);

const showEditVariableModal = ref(false);

const openEditVariableModal = () => {
  showEditVariableModal.value = !showEditVariableModal.value;
};
</script>

<style scoped></style>
