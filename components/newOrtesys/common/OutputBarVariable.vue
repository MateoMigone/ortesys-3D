<template>
  <div
    class="bg-white rounded-2xl relative w-full"
    :class="size === 'lg' && 'p-6 text-center'"
  >
    <label v-if="size === 'lg'" class="text-[#2d5893] font-bold text-2xl">{{
      variable.title
    }}</label>
    <label
      v-else-if="size !== 'lg' && !edit"
      class="text-[#2d5893] font-bold text-xl"
      @mouseenter="toggleShowRefImg"
      @mouseleave="toggleShowRefImg"
      >{{ variable.title }}</label
    >
    <label
      v-else
      class="text-[#2d5893] font-bold text-xl max-w-max select-none cursor-pointer"
      @click="openEditVariableModal"
      >{{ variable.title }}</label
    >
    <p class="text-sm text-[#131E41]">{{ variable.subtitle }}</p>
    <input
      :value="inputValue"
      type="range"
      min="1"
      :max="variable.qty"
      class="mt-4 mb-2 rounded-full overflow-hidden appearance-none w-full"
      :class="size === 'lg' && 'my-4'"
    />
    <div class="flex justify-between w-full">
      <span
        v-for="n in variable.qty"
        class="text-blue-600 select-none cursor-pointer"
        @click="changeValue(n)"
        >{{ "0" + n }}</span
      >
    </div>

    <EditVariableModal
      :openRequest="showEditVariableModal"
      :toggleModal="openEditVariableModal"
    />
  </div>
</template>

<script setup>
const { variable, toggleShowRefImg, size, edit } = defineProps([
  "variable",
  "toggleShowRefImg",
  "size",
  "edit",
]);

const inputValue = ref(1);
const showEditVariableModal = ref(false);

const changeValue = (n) => (inputValue.value = n);

const openEditVariableModal = () => {
  showEditVariableModal.value = !showEditVariableModal.value;
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  width: 12px;
  appearance: none;
  height: 12px;
  cursor: pointer;
  background: #2fb7a0;
  box-shadow: -405px 0 0 400px #2d5893;
  border-radius: 100%;
}

input[type="range"]::-moz-range-thumb {
  width: 12px;
  height: 12px;
  cursor: pointer;
  background: #2fb7a0;
  box-shadow: -405px 0 0 400px #2d5893;
  border-radius: 100%;
  border: none; /* Remove the default border */
}
</style>
