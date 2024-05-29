<template>
  <div class="flex w-[90%] mx-auto max-h-[70vh]">
    <form
      class="flex flex-col items-center gap-3 w-1/2 bg-white px-12 py-6 rounded-xl overflow-auto"
    >
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

      <!-- If we are updating an existing ortesys this will be rendered -->
      <component
        v-if="ortesysToUpdate"
        v-for="(item, index) in ortesysToUpdate.variables"
        :key="index"
        :is="getComponent(item.type)"
        :variable="item"
        class="w-full"
        edit=" {{ true }}"
      />

      <div class="w-full flex flex-col gap-3">
        <Button
          text="Adicionar variável"
          color="purple"
          class="text-[15px]"
          @click.prevent="setShowVariableForm(true)"
        />

        <Button
          text="Arquivos"
          color="yellow"
          class="text-[15px]"
          @click.prevent="setShowAddFiles(true)"
        />

        <Button
          text="Salvar configurações"
          color="green"
          class="text-[15px]"
          @click.prevent="handleSubmit"
        />
      </div>
    </form>
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
import OutputBarVariable from "~/components/newOrtesys/common/OutputBarVariable.vue";
import OutputButtonVariable from "~/components/newOrtesys/common/OutputButtonVariable.vue";
import OutputFieldVariable from "~/components/newOrtesys/common/OutputFieldVariable.vue";

const { setShowVariableForm, setShowAddFiles, ortesysToUpdate } = defineProps([
  "setShowVariableForm",
  "setShowAddFiles",
  "ortesysToUpdate",
]);

const router = useRouter();

const handleSubmit = () => {
  // If ortesys prop is undefined ---> post new ortesys(api)
  // Else ---> update ortesys(api)
  router.push("/manageOrtesys");
};

const getComponent = (type) => {
  switch (type) {
    case "Medida":
      return OutputFieldVariable;
    case "Botao":
      return OutputButtonVariable;
    case "Barra":
      return OutputBarVariable;
    default:
      return null;
  }
};
</script>

<style scoped></style>
