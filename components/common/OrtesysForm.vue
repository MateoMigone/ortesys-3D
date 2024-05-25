<template>
  <div class="flex w-[90%] mx-auto">
    <form
      class="flex flex-col justify-center items-center gap-3 w-1/2 h-full bg-white px-12 py-6 rounded-xl"
    >
      <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
        <label
          for="ortesys-name"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Nome da órteses</label
        >
        <input
          id="ortesys-name"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
          v-model="name"
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5 w-full">
        <label
          for="ortesys-name"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Descrição da órteses</label
        >
        <textarea
          id="ortesys-name"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 resize-none overflow-auto"
          v-model="description"
        />
      </div>

      <div class="w-full flex flex-col gap-3">
        <Button
          text="Adicionar variável"
          color="purple"
          class="text-[15px]"
          @click.prevent="setShowAddVariable(true)"
        />
        <Button text="Salvar configurações" color="green" class="text-[15px]" />
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
defineProps(["setShowAddVariable"]);

const router = useRouter();

const name = ref("");
const description = ref("");

/* const handleSubmit = () => {
  router.push("/manageOrtesys/addVariable");
}; */
</script>

<style scoped></style>
