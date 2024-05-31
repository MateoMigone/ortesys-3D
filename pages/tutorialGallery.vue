<template>
  <div class="bg-[#f4f4f4] min-h-[100vh] flex justify-center">
    <div class="flex flex-col items-center justify-between gap-8 w-2/3">
      <div class="flex flex-col items-center gap-7 w-full 2xl:gap-10">
        <!-- Header -->
        <Header class="mt-5" />

        <!-- Return button -->
        <div class="flex flex-col items-center gap-5 w-[90%]">
          <NuxtLink to="/support">
            <Button text="Voltar" color="red" class="w-[200px]" />
          </NuxtLink>

          <!-- Show the tutorial cards for all tutorials -->
          <!-- Apply filters -->
          <TutorialCard text="Órteses de Polegar" />
          <TutorialCard text="Órteses de Braço" />
          <TutorialCard text="Órteses de Tornozelo" />
          <TutorialCard text="Órteses de Teste" />
        </div>
      </div>
      <Footer class="mb-5 justify-self-end" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
// SHOULD GET ALL THE TUTORIALS FROM THE API
</script>
