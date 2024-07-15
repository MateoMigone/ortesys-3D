<template>
  <div class="flex justify-center bg-[#f4f4f4] py-5">
    <!-- Return button -->
    <NuxtLink
      to="/infoPanel/usersHistory"
      class="relative left-[145px] top-[125px] 2xl:top-[185px] h-[40px]"
    >
      <Button text="Voltar" color="red" class="w-[120px] h-[40px]" />
    </NuxtLink>

    <div class="flex flex-col items-center justify-center gap-5">
      <!-- Text banner -->
      <TextBanner title="Preencha os campos abaixo" class="w-full" />
      <!-- Create new user form -->
      <UserForm submitAction="create" class="max-h-[70vh] overflow-y-auto" />
      <!-- Footer -->
      <Footer class="w-full" />
    </div>
  </div>
</template>

<script setup>
/* definePageMeta({
  middleware: "auth",
}); */
</script>

<style scoped></style>
