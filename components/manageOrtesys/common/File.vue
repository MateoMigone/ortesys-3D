<template>
  <div class="flex flex-col gap-6">
    <!-- Return button -->
    <Button
      text="Voltar"
      color="red"
      class="w-[230px] text-[15px]"
      @click="setFileSelected(false)"
    />

    <div class="flex gap-[7%] overflow-x-auto">
      <!-- Conditional file variables form -->
      <form class="min-w-[46.5%]">
        <div
          class="flex flex-col gap-5 bg-white px-12 py-10 rounded-xl mb-[20px]"
        >
          <!-- Select conditional file  -->
          <Button
            text="Arquivo A"
            color="primary"
            class="w-full text-[15px]"
            @click.prevent="handleUpdateFileInput"
          />
          <!-- Hidden file input -->
          <input type="file" ref="updateFileInput" class="hidden" />

          <!-- Remove conditional file button -->
          <Button
            text="Remover arquivo"
            color="red"
            class="w-full text-[15px]"
            @click.prevent="openConfirmRemoveModal"
          />

          <!-- Cost input -->
          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Custo</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite um número"
            />
          </div>

          <!-- Price input -->
          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Preço</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite um número"
            />
          </div>

          <!-- Material input -->
          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Material</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite o material"
            />
          </div>

          <!-- Time input -->
          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Tempo</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite o tempo"
            />
          </div>
        </div>

        <div
          class="flex flex-col gap-5 min-w-[46.5%] bg-white px-12 py-10 rounded-xl mb-[20px]"
        >
          <!-- SHOW CONDITIONAL FILE VARIABLE FOR ALL SELECTED ORTESYS VARIABLES WITH V-FOR -->
          <FileConditionalVariable
            v-for="(item, index) in ortesysToUpdateVariables"
            :key="index"
            :variable="item"
          />

          <Button
            text="Salvar"
            color="secondary"
            class="w-full text-[15px]"
            @click.prevent=""
          />
        </div>
      </form>

      <!-- Show add new conditional file at the end -->
      <div
        class="min-w-[46.5%] h-full bg-white px-12 py-10 rounded-xl mb-[20px]"
      >
        <Button
          text="Adicionar arquivo"
          color="green"
          class="w-full text-[15px]"
          @click="handleNewFileInput"
        />
        <input type="file" ref="newFileInput" class="hidden" />
      </div>
    </div>

    <!-- Confirm remove modal shown if opened -->
    <ConfirmRemoveModal
      :openRequest="showConfirmRemoveModal"
      :toggleModal="openConfirmRemoveModal"
    />
  </div>
</template>

<script setup>
const { setFileSelected, ortesysToUpdateVariables } = defineProps([
  "setFileSelected",
  "ortesysToUpdateVariables",
]);
// SHOULD RECEIVE ALL SELECTED ORTESYS FILES AND VARIABLES

const showConfirmRemoveModal = ref(false);

const updateFileInput = ref(null);
const newFileInput = ref(null);

const openConfirmRemoveModal = () => {
  showConfirmRemoveModal.value = !showConfirmRemoveModal.value;
};

const handleUpdateFileInput = () => {
  updateFileInput.value.click();
};

const handleNewFileInput = () => {
  newFileInput.value.click();
};
</script>

<style scoped></style>
