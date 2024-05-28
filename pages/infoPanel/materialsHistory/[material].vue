<template>
  <div class="w-[90%] mx-auto flex flex-col items-center gap-6">
    <div class="w-[400px] bg-white flex justify-center py-8 rounded-2xl">
      <Button
        :text="buttonText"
        color="green"
        class="w-[250px] h-[40px]"
        @click="openNewMaterialModal"
      />
    </div>
    <div class="flex flex-col gap-5 w-full">
      <AdminMaterialCard color="Vermelho" />
      <AdminMaterialCard color="Vermelho" />
      <AdminMaterialCard color="Vermelho" />
    </div>

    <NewMaterialModal
      material="material"
      :openRequest="showNewMaterialModal"
      :toggleModal="openNewMaterialModal"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
const { material } = useRoute().params;
const buttonText = ref("Adicionar novo " + material);
const showNewMaterialModal = ref(false);

const openNewMaterialModal = () => {
  showNewMaterialModal.value = !showNewMaterialModal.value;
};
</script>

<style scoped></style>
