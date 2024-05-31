<template>
  <div class="flex flex-col gap-6 w-[90%] mx-auto">
    <!-- All files will be shown if no file is selected -->
    <div v-show="!fileSelected" class="flex flex-col gap-6">
      <!-- Return button -->
      <Button
        text="Voltar"
        color="red"
        class="w-[230px] text-[15px]"
        @click="setShowAddFiles(false)"
      />

      <div class="flex gap-12 w-full">
        <!-- Show all files with v-for -->
        <div class="flex flex-col gap-5 w-1/2 bg-white px-12 py-10 rounded-xl">
          <!-- Open file button -->
          <Button
            text="Arquivo 1"
            color="primary"
            class="w-full text-[15px]"
            @click="setFileSelected(true)"
          />

          <!-- Remove file button -->
          <Button
            text="Remover arquivo"
            color="red"
            class="w-full text-[15px]"
            @click="openConfirmRemoveModal"
          />
        </div>

        <!-- Show add new file at the end -->
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
    <File
      v-show="fileSelected"
      :setFileSelected="setFileSelected"
      :ortesysToUpdateVariables="ortesysToUpdateVariables"
    />

    <!-- Confirm remove modal shown if opened -->
    <ConfirmRemoveModal
      :openRequest="showConfirmRemoveModal"
      :toggleModal="openConfirmRemoveModal"
    />
  </div>
</template>

<script setup>
const { setShowAddFiles, ortesysToUpdateVariables } = defineProps([
  "setShowAddFiles",
  "ortesysToUpdateVariables",
]);
// SHOULD RECEIVE ALL SELECTED ORTESYS FILES

const showConfirmRemoveModal = ref(false);
const fileSelected = ref(false);

const openConfirmRemoveModal = () => {
  showConfirmRemoveModal.value = !showConfirmRemoveModal.value;
};

const setFileSelected = (status) => {
  fileSelected.value = status;
};
</script>

<style scoped></style>
