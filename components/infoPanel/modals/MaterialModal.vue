<template>
  <div
    v-show="openRequest"
    class="fixed inset-0 bg-black bg-opacity-40 z-10 flex justify-end items-center"
    @click="closeModal"
  >
    <div
      @click.stop
      class="bg-white w-1/3 flex flex-col justify-center items-center gap-5 py-12 rounded-2xl relative right-[15%]"
    >
      <!-- Filamento button -->
      <NuxtLink to="/infoPanel/user/filamento">
        <Button text="Filamento" color="red" class="w-[250px] h-[40px]" />
      </NuxtLink>
      <!-- Velcro button -->
      <NuxtLink to="/infoPanel/user/velcro">
        <Button text="Velcro" color="yellow" class="w-[250px] h-[40px]" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { openRequest, toggleModal } = defineProps([
  "openRequest",
  "toggleModal",
]);
// SHOULD RECEIVE SELECTED USER

const closeModal = () => {
  toggleModal();
};
</script>

<style scoped></style>
