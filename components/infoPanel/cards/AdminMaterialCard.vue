<template>
  <div
    class="flex items-center justify-between rounded-2xl h-[160px] px-[26px] shadow-sm bg-white"
  >
    <div class="flex items-center gap-12">
      <!-- Color display -->
      <div class="flex flex-col items-center gap-2">
        <span class="block w-10 h-10 rounded-full" :class="color"></span>
        <span class="font-bold text-lg 2xl:text-2xl">{{ color }}</span>
      </div>

      <!-- Used material stat -->
      <div class="flex flex-col gap-3 2xl:gap-6 2xl:flex-row">
        <div class="flex flex-col items-center">
          <span class="font-bold text-[#2fb7a0] text-xl 2xl:text-2xl">
            32kg
          </span>
          <span class="font-bold text-[#2d5893] text-xl 2xl:text-2xl">
            Utilizado
          </span>
        </div>

        <!-- Requested material stat -->
        <div class="flex flex-col items-center">
          <span class="font-bold text-[#2fb7a0] text-xl 2xl:text-2xl">
            32kg
          </span>
          <span class="font-bold text-[#2d5893] text-xl 2xl:text-2xl">
            Solicitado
          </span>
        </div>
      </div>
    </div>

    <div class="w-[150px] 2xl:w-[200px]">
      <!-- Price input -->
      <div class="flex flex-col">
        <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
          >Preço</label
        >
        <input
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-2 py-0.5 2xl:py-1 text-center"
          placeholder="Digite o preço:"
        />
      </div>

      <!-- Cost input -->
      <div class="flex flex-col">
        <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
          >Custo</label
        >
        <input
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-2 py-0.5 2xl:py-1 text-center"
          placeholder="Digite o custo:"
        />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <!-- Save changes button -->
      <Button
        color="secondary"
        text="Salvar"
        class="w-[165px] h-[40px]"
        @click=""
      />
      <!-- Remove button -->
      <Button
        color="red"
        text="Remover"
        class="w-[165px] h-[40px]"
        @click="openConfirmRemoveModal"
      />
    </div>

    <!-- Confirm remove modal shown if opened -->
    <ConfirmRemoveModal
      :openRequest="showConfirmRemoveModal"
      :toggleModal="openConfirmRemoveModal"
    />
  </div>
</template>

<script setup>
const { color } = defineProps(["color"]);

const showConfirmRemoveModal = ref(false);

const openConfirmRemoveModal = () => {
  showConfirmRemoveModal.value = !showConfirmRemoveModal.value;
};
</script>

<style scoped>
.Vermelho {
  background-color: #ff0505;
}
</style>
