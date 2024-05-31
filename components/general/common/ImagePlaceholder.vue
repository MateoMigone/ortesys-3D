<template>
  <div class="flex flex-col gap-6 items-center">
    <!-- Placeholder image -->
    <img src="~/assets/imgs/img-placeholder.png" class="w-[80%]" />
    <!-- Add new image button -->
    <Button
      text="Adicionar uma imagem"
      color="yellow"
      class="w-[250px]"
      @click="handleInputImageFile"
    />
    <!-- Hidden input image file -->
    <input type="file" ref="inputImageFile" class="hidden" />
  </div>
</template>

<script setup>
const inputImageFile = ref(null);

const handleInputImageFile = () => {
  inputImageFile.value.click();
  // SHOULD HANDLE IMAGE SELECTED
};
</script>

<style scoped></style>
