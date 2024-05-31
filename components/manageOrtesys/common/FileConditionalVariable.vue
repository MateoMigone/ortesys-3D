<template>
  <div>
    <div
      v-if="variable.type === 'Botao'"
      class="flex flex-col gap-1.5 2xl:gap-2 w-full"
    >
      <legend class="font-bold text-[#2D5893] text-lg 2xl:text-xl">
        {{ variable.title }}
      </legend>
      <div class="flex flex-col justify-between gap-2">
        <label class="flex gap-2.5 cursor-pointer">
          <input
            type="radio"
            name="{{variable.title}}"
            class="w-[18px] cursor-pointer"
          /><span> NENHUM </span>
        </label>
        <label class="flex gap-2.5 cursor-pointer">
          <input
            type="radio"
            name="{{variable.title}}"
            class="w-[18px] cursor-pointer"
          /><span>{{ variable.enabledText }}</span>
        </label>
        <label class="flex gap-2.5 cursor-pointer">
          <input
            type="radio"
            name="{{variable.title}}"
            class="w-[18px] cursor-pointer"
          /><span>{{ variable.disabledText }}</span>
        </label>
      </div>
    </div>

    <div v-else class="flex flex-col gap-1.5 2xl:gap-2 w-full">
      <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl">{{
        variable.title
      }}</label>
      <div class="flex gap-3">
        <input
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
          placeholder="Min:"
        />
        <input
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
          placeholder="Max:"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { variable } = defineProps(["variable"]);
</script>

<style scoped></style>
