<template>
  <div
    class="flex items-center justify-between rounded-2xl min-h-[115px] px-[26px] shadow-sm bg-white"
  >
    <div class="flex gap-6 2xl:gap-12">
      <div class="flex items-center gap-2 min-w-[140px]">
        <!-- Color display -->
        <span class="block w-10 h-10 rounded-full" :class="color"></span>
        <!-- Color name -->
        <span class="font-bold text-lg 2xl:text-2xl">{{ color }}</span>
      </div>

      <!-- User material stats -->
      <div class="flex gap-6 2xl:gap-12">
        <!-- Quantity used -->
        <div class="flex flex-col items-center">
          <span class="font-bold text-[#2fb7a0] text-xl 2xl:text-2xl">
            32kg
          </span>
          <span class="font-bold text-[#2d5893] text-xl 2xl:text-2xl">
            Utilizado
          </span>
        </div>
        <!-- Quantity requested -->
        <div class="flex flex-col items-center">
          <span class="font-bold text-[#2fb7a0] text-xl 2xl:text-2xl">
            32kg
          </span>
          <span class="font-bold text-[#2d5893] text-xl 2xl:text-2xl">
            Solicitado
          </span>
        </div>
        <!-- Material price -->
        <div class="flex flex-col items-center">
          <span class="font-bold text-[#2fb7a0] text-xl 2xl:text-2xl">
            R$ 00
          </span>
          <span class="font-bold text-[#2d5893] text-xl 2xl:text-2xl">
            Preço
          </span>
        </div>
      </div>
    </div>

    <!-- Open send material modal button -->
    <Button
      color="green"
      text="Enviar"
      class="w-[165px] h-[40px]"
      @click="openSendModal"
    />

    <!-- Send material modal shown if opened -->
    <SendMaterialModal
      :openRequest="showSendModal"
      :toggleModal="openSendModal"
    />
  </div>
</template>

<script setup>
const { color } = defineProps(["color"]);
// SHOULD RECEIVE ALL "FILAMENTO"/"VELCRO" AND SELECTED USER (URL PARAM)

const showSendModal = ref(false);

const openSendModal = () => {
  showSendModal.value = !showSendModal.value;
};
</script>

<style scoped>
.Vermelho {
  background-color: #ff0505;
}
</style>
