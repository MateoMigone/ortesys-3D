<template>
  <div>
    <div class="flex flex-col gap-2">
      <!-- Button variable title if editing ortesys -->
      <label
        v-if="edit"
        class="text-[#2d5893] font-bold text-xl max-w-max select-none cursor-pointer"
        @click="openEditVariableModal"
        >{{ variable.title }}</label
      >

      <!-- Button variable title if generating ortesys -->
      <label
        v-else
        class="text-[#2d5893] font-bold text-xl max-w-max select-none"
        @mouseenter="toggleShowRefImg"
        @mouseleave="toggleShowRefImg"
        >{{ variable.title }}</label
      >

      <!-- Button variable input -->
      <div
        class="flex gap-1 rounded-full border-[2px] border-[#2D5893] bg-[#FCFCFF] px-1 py-1 2xl:py-1.5 cursor-pointer max-w-max"
        @click="toggleOnOff"
      >
        <span
          class="text-sm text-[#2FB7A0] rounded-full p-1.5 px-3.5 select-none"
          :class="status && 'text-white bg-[#2FB7A0]'"
          >{{ variable.enabledText }}</span
        >
        <span
          class="text-sm text-[#C45C5C] rounded-full p-1.5 px-3.5 select-none"
          :class="!status && 'text-white bg-[#C45C5C]'"
          >{{ variable.disabledText }}</span
        >
      </div>

      <!-- Button variable subtitle -->
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

const status = ref(false);
const showEditVariableModal = ref(false);

const toggleOnOff = () => (status.value = !status.value);

const openEditVariableModal = () => {
  showEditVariableModal.value = !showEditVariableModal.value;
};
</script>

<style scoped></style>
