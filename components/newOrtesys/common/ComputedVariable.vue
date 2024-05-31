<template>
  <div>
    <div>
      <!-- Computed variable title if editing ortesys -->
      <label
        v-if="edit"
        class="text-[#2d5893] font-bold text-xl max-w-max select-none cursor-pointer"
        @click="openEditVariableModal"
        >{{ variable.title }}
      </label>

      <!-- Computed variable title if generating ortesys -->
      <label
        v-else
        class="text-[#2d5893] font-bold text-xl max-w-max select-none"
        @mouseenter="toggleShowRefImg"
        @mouseleave="toggleShowRefImg"
        >{{ variable.title }}
      </label>

      <!-- Computed variable preview -->
      <div
        class="bg-[#5CC46D] bg-opacity-10 border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm h-[42px]"
      >
        <span class="text-sm"></span>
      </div>

      <!-- Computed variable subtitle -->
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
