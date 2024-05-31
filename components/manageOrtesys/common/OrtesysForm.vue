<template>
  <div class="flex w-[90%] mx-auto max-h-[70vh]">
    <form
      class="flex flex-col items-center gap-3 w-1/2 bg-white px-12 py-6 rounded-xl overflow-auto"
    >
      <!-- Ortesys title input -->
      <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
        <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Nome da órteses</label
        >
        <!-- If we are updating an existing ortesys it´s title will be shown for editing -->
        <input
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
          :value="ortesysToUpdate ? ortesysToUpdate.title : ''"
        />
      </div>

      <!-- Ortesys description input -->
      <div class="flex flex-col gap-2 2xl:gap-2.5 w-full">
        <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Descrição da órteses</label
        >
        <!-- If we are updating an existing ortesys it´s description will be shown for editing -->
        <textarea
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 resize-none overflow-auto"
          :value="ortesysToUpdate ? ortesysToUpdate.description : ''"
        />
      </div>

      <!-- If we are updating an existing ortesys all it´s variables will be rendered -->
      <component
        v-if="ortesysToUpdate"
        v-for="(item, index) in ortesysToUpdate.variables"
        :key="index"
        :is="getComponent(item.type)"
        :variable="item"
        class="w-full"
        edit=" {{ true }}"
        :setSelectedVariableType="setSelectedVariableType"
      />

      <div class="w-full flex flex-col gap-3">
        <!-- Open add variable form button -->
        <Button
          text="Adicionar variável"
          color="purple"
          class="text-[15px]"
          @click.prevent="setShowVariableForm(true)"
        />
        <!-- Open add computed variable form button -->
        <Button
          text="Adicionar campo calculado"
          color="purple"
          class="text-[15px]"
          @click.prevent="openNewComputedVariable"
        />
        <!-- Open manage ortesys files button -->
        <Button
          text="Arquivos"
          color="yellow"
          class="text-[15px]"
          @click.prevent="setShowAddFiles(true)"
        />
        <!-- Save ortesys changes button -->
        <Button
          text="Salvar configurações"
          color="green"
          class="text-[15px]"
          @click.prevent="handleSubmit"
        />
      </div>
    </form>

    <!-- Add new ortesys image placeholder button -->
    <div class="w-1/2 flex flex-col justify-center items-center gap-5 h-[55vh]">
      <ImagePlaceholder />
      <!-- <img
        class="h-[90%] mt-10"
        src="../../assets/imgs/ortesys-arm-shadow.png"
        alt="Ortesys Arm"
      /> -->
    </div>
  </div>
</template>

<script setup>
import BarVariable from "~/components/newOrtesys/common/BarVariable.vue";
import ButtonVariable from "~/components/newOrtesys/common/ButtonVariable.vue";
import ComputedVariable from "~/components/newOrtesys/common/ComputedVariable.vue";
import FieldVariable from "~/components/newOrtesys/common/FieldVariable.vue";

const {
  setShowVariableForm,
  setShowAddFiles,
  ortesysToUpdate,
  setSelectedVariableType,
} = defineProps([
  "setShowVariableForm",
  "setShowAddFiles",
  "ortesysToUpdate",
  "setSelectedVariableType",
]);
// SHOULD RECEIVE SELECTED ORTESYS IF UPDATING

const router = useRouter();

const openNewComputedVariable = () => {
  setSelectedVariableType("Computed");
  setShowVariableForm(true);
};

const handleSubmit = () => {
  // If ortesys prop is undefined ---> post new ortesys(api)
  // Else ---> update ortesys(api)
  router.push("/manageOrtesys");
};

const getComponent = (type) => {
  switch (type) {
    case "Medida":
      return FieldVariable;
    case "Botao":
      return ButtonVariable;
    case "Barra":
      return BarVariable;
    case "Computed":
      return ComputedVariable;
    default:
      return null;
  }
};
</script>

<style scoped></style>
