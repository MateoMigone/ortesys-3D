<template>
  <div class="flex flex-col gap-6 w-[90%] mx-auto">
    <!-- All files will be shown if no file is selected -->
    <div v-show="!fileSelected" class="flex flex-col gap-6">
      <Button
        text="Voltar"
        color="red"
        class="w-[230px] text-[15px]"
        @click="setShowAddFiles(false)"
      />
      <div class="flex gap-12 w-full">
        <div class="flex flex-col gap-5 w-1/2 bg-white px-12 py-10 rounded-xl">
          <Button
            text="Arquivo 1"
            color="primary"
            class="w-full text-[15px]"
            @click="setFileSelected(true)"
          />

          <Button
            text="Remover arquivo"
            color="red"
            class="w-full text-[15px]"
          />
        </div>
        <div
          class="flex flex-col justify-center gap-5 w-1/2 bg-white px-12 py-10 rounded-xl"
        >
          <Button
            text="Adicionar arquivo"
            color="green"
            class="w-full text-[15px]"
            @click="setFileSelected(true)"
          />
        </div>
      </div>
    </div>

    <!-- File will be shown if selected -->
    <File v-show="fileSelected" :setFileSelected="setFileSelected" />
  </div>
</template>

<script setup>
defineProps(["setShowAddFiles"]);

const fileSelected = ref(false);

const setFileSelected = (status) => {
  fileSelected.value = status;
};
</script>

<style scoped></style>
