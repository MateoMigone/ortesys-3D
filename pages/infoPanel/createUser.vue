<template>
  <div class="flex justify-center bg-[#f4f4f4] min-h-[100vh] py-10">
    <NuxtLink
      to="/infoPanel/usersHistory"
      class="relative left-[145px] top-[175px] 2xl:top-[185px]"
    >
      <Button text="Voltar" color="red" class="w-[120px] h-[40px]" />
    </NuxtLink>
    <div class="flex flex-col items-center justify-center gap-10">
      <TextBanner title="Preencha os campos abaixo" class="w-full" />
      <UserForm submitAction="create" />
      <Footer class="w-full" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
