<template>
  <div class="flex flex-col gap-6 items-center">
    <img src="../../assets/imgs/img-placeholder.png" class="w-[80%]" />
    <Button
      text="Adicionar uma imagem"
      color="yellow"
      class="w-[250px]"
      @click="handleInputImageFile"
    />
    <input type="file" ref="inputImageFile" class="hidden" />
  </div>
</template>

<script setup>
const inputImageFile = ref(null);

const handleInputImageFile = () => {
  inputImageFile.value.click();
};
</script>

<style scoped></style>
