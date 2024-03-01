<template>
  <div class="max-w-screen-lg mx-auto py-4">
    <div class="bg-white rounded-lg shadow-md">
      <div
        class="flex justify-center items-center border-b border-gray-200 p-6 cursor-pointer"
        @click="toggle"
      >
        <h2 class="text-xl font-semibold text-gray-800">Punho</h2>
        <i
          :class="{
            'fas fa-chevron-up': isOpen,
            'fas fa-chevron-down': !isOpen,
          }"
          class="text-gray-800 ml-2"
        ></i>
      </div>
      <div v-if="isOpen" class="flex justify-between items-center p-6">
        <div class="flex-1 text-center">
          <div class="text-4xl font-bold text-teal-500">32</div>
          <div class="text-base text-blue-800">Órteses geradas</div>
        </div>
        <div class="flex-1 text-center">
          <div class="text-4xl font-bold text-teal-500">R$32</div>
          <div class="text-base text-blue-800">Receita</div>
        </div>
        <div class="flex-1 text-center">
          <div class="text-4xl font-bold text-teal-500">32kg</div>
          <div class="text-base text-blue-800">Gesso salvo</div>
        </div>
        <div class="flex-1 text-center">
          <div class="text-4xl font-bold text-teal-500">32kg</div>
          <div class="text-base text-blue-800">Filamento utilizado</div>
        </div>
        <div class="flex-1 text-center">
          <div class="text-4xl font-bold text-teal-500">32m</div>
          <div class="text-base text-blue-800">Velcro utilizado</div>
        </div>
        <div class="flex-1 text-center">
          <div class="text-4xl font-bold text-teal-500">32h</div>
          <div class="text-base text-blue-800">Tempo de impressão</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
