<template>
  <div class="flex w-[90%] mx-auto">
    <!-- This is the form displayed when "Medidas" is the variable type selected -->
    <form
      class="flex flex-col justify-center gap-3 w-1/2 h-full bg-white px-12 py-6 rounded-xl"
      v-show="variableType === 'Medida' || variableType === 'Computed'"
    >
      <div class="flex flex-col gap-1.5 2xl:gap-2">
        <!-- Variable title input -->
        <input
          type="text"
          placeholder="Título da variável"
          class="font-bold text-lg text-[#2D5893] placeholder:text-light px-2"
        />

        <!-- Show field variable preview if variabale type "Medida" -->
        <div
          v-show="variableType === 'Medida'"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 cursor-pointer"
          @click="openVariablesModal"
        >
          <span class="text-sm">Preencha com as medidas</span>
        </div>

        <!-- Show computed variable preview if variabale type "Computed" -->
        <div
          v-show="variableType === 'Computed'"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#5CC46D] bg-opacity-10 px-3.5 py-1 2xl:py-1.5 h-[35px]"
        >
          <span class="text-sm"></span>
        </div>

        <!-- Variable subtitle input  -->
        <input
          type="text"
          placeholder="Subítulo da variável"
          class="text-base placeholder:text-light px-2"
        />
      </div>

      <div class="w-full flex flex-col gap-3">
        <!-- Open variables config modal button -->
        <Button
          :text="variableType === 'Medida' ? 'Filtros' : 'Calculo do campo'"
          color="red"
          class="text-[15px]"
          @click.prevent="openVariablesConfigModal"
        />
        <!-- Open variables actions modal button -->
        <Button
          text="Sustituir valor"
          color="purple"
          class="text-[15px]"
          @click.prevent="openVariablesActionsModal"
        />
        <!-- Save variable changes button -->
        <Button
          text="Salvar"
          color="green"
          class="text-[15px]"
          @click.prevent="setShowVariableForm(false)"
        />
      </div>
    </form>

    <!-- This is the form displayed when "Botao" is the variable type selected -->
    <form
      class="flex flex-col justify-center gap-3 w-1/2 h-full bg-white px-12 py-6 rounded-xl"
      v-show="variableType === 'Botao'"
    >
      <div class="flex flex-col gap-1.5 2xl:gap-2">
        <!-- Variable title input -->
        <input
          type="text"
          placeholder="Título da variável"
          class="font-bold text-lg text-[#2D5893] placeholder:text-light px-2"
        />

        <!-- Button variable preview -->
        <div
          class="flex gap-1 rounded-full border-[2px] border-[#2D5893] bg-[#FCFCFF] px-1 py-1 2xl:py-1.5 cursor-pointer w-[90px]"
          @click="openVariablesModal"
        >
          <span class="text-sm text-white bg-[#2FB7A0] rounded-full p-1.5"
            >ON</span
          >
          <span class="text-sm text-[#C45C5C] rounded-full p-1.5">OFF</span>
        </div>

        <!-- Variable subtitle input -->
        <input
          type="text"
          placeholder="Subítulo da variável"
          class="text-base placeholder:text-light px-2"
        />
      </div>

      <div class="w-full flex flex-col gap-3">
        <!-- Open variable config modal button -->
        <Button
          text="Nomes das opções"
          color="red"
          class="text-[15px]"
          @click.prevent="openVariablesConfigModal"
        />
        <!-- Open variables actions modal button -->
        <Button
          text="Ação da variável"
          color="purple"
          class="text-[15px]"
          @click.prevent="openVariablesActionsModal"
        />
        <!-- Save variable changes button -->
        <Button
          text="Salvar"
          color="green"
          class="text-[15px]"
          @click.prevent="setShowVariableForm(false)"
        />
      </div>
    </form>

    <!-- This is the form displayed when "Barra" is the variable type selected -->
    <form
      class="flex flex-col justify-center gap-3 w-1/2 h-full bg-white px-12 py-6 rounded-xl"
      v-show="variableType === 'Barra'"
    >
      <div class="flex flex-col gap-6">
        <div class="flex flex-col">
          <!-- Variable subtitle input -->
          <input
            type="text"
            placeholder="Título da variável"
            class="font-bold text-lg text-[#2D5893] placeholder:text-light px-2 text-center"
          />

          <!-- Variable subtitle input -->
          <input
            type="text"
            placeholder="Subítulo da variável"
            class="text-base placeholder:text-light px-2 text-center"
          />
        </div>

        <!-- Bar variable preview -->
        <div
          class="flex flex-col gap-4 cursor-pointer"
          @click="openVariablesModal"
        >
          <div class="relative">
            <div
              class="absolute left-0 w-full py-[4px] bg-[#2D5893] rounded-full"
            ></div>
            <div
              class="absolute top-[-2px] left-[33%] z-10 p-[6px] bg-[#2FB7A0] rounded-full"
            ></div>
            <div
              class="absolute right-0 w-[66%] py-[4px] bg-[white] opacity-[0.8] rounded-full"
            ></div>
          </div>
          <div class="flex justify-between w-full">
            <span class="text-sm text-[#2D5893] font-bold">Mínimo</span>
            <span class="text-sm text-[#2D5893] font-bold">Máximo</span>
          </div>
        </div>
      </div>

      <!-- Variable description input -->
      <input
        type="text"
        placeholder="Subítulo da variável"
        class="text-base placeholder:text-light px-2"
      />

      <div class="w-full flex flex-col gap-3">
        <!-- Open variables config modal button -->
        <Button
          text="Número de opções"
          color="red"
          class="text-[15px]"
          @click.prevent="openVariablesConfigModal"
        />
        <!-- Open variables actions modal button -->
        <Button
          text="Ação da variável"
          color="purple"
          class="text-[15px]"
          @click.prevent="openVariablesActionsModal"
        />
        <!-- Save variable changes button -->
        <Button
          text="Salvar"
          color="green"
          class="text-[15px]"
          @click.prevent="handleSubmit"
        />
      </div>
    </form>

    <div class="w-1/2 flex flex-col justify-center items-center gap-5 h-[55vh]">
      <ImagePlaceholder />
    </div>

    <!-- Variables modal shown if opened -->
    <VariablesModal
      :openRequest="showVariablesModal"
      :toggleModal="openVariablesModal"
      :setVariableType="setVariableType"
    />

    <!-- Variables config modal shown if opened -->
    <VariablesConfigModal
      :openRequest="showVariablesConfigModal"
      :toggleModal="openVariablesConfigModal"
      :type="variableType"
    />

    <!-- Variables actions modal shown if opened -->
    <VariablesActionsModal
      :openRequest="showVariablesActionsModal"
      :toggleModal="openVariablesActionsModal"
      :type="variableType"
    />
  </div>
</template>

<script setup>
const { setShowVariableForm, variableType, setVariableType } = defineProps([
  "setShowVariableForm",
  "variableType",
  "setVariableType",
]);
// SHOULD RECEIVE SELECTED ORTESYS AND VARIABLE IF UPDATING

const showVariablesModal = ref(false);
const showVariablesConfigModal = ref(false);
const showVariablesActionsModal = ref(false);

const openVariablesModal = () => {
  showVariablesModal.value = !showVariablesModal.value;
};

const openVariablesConfigModal = () => {
  showVariablesConfigModal.value = !showVariablesConfigModal.value;
};

const openVariablesActionsModal = () => {
  showVariablesActionsModal.value = !showVariablesActionsModal.value;
};

const handleSubmit = () => {
  // Post the new variable or update an existing one
  setShowVariableForm(false);
};
//
</script>

<style lang="scss" scoped></style>
