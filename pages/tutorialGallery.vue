<template>
  <div class="bg-[#f4f4f4] min-h-[100vh] flex justify-center">
    <div class="flex flex-col items-center justify-between gap-6 w-2/3">
      <div class="flex flex-col items-center gap-7 w-full 2xl:gap-10">
        <!-- Header -->
        <Header class="mt-5" />

        <div class="flex flex-col items-center gap-8 w-[90%]">
          <div class="flex gap-6">
            <!-- Return button -->
            <NuxtLink to="/support">
              <Button text="Voltar" color="red" class="w-[200px]" />
            </NuxtLink>

            <!-- Open add new tutorial button -->
            <!-- Shown only if user "Admin" or "Gerente" -->
            <Button
              text="Adicionar tutorial"
              color="green"
              class="w-[200px]"
              @click="openNewTutorialModal"
            />
          </div>

          <!-- Show the tutorial cards for all tutorials -->
          <!-- Apply filters -->
          <div class="w-full flex flex-col gap-5 max-h-[65vh] overflow-y-auto">
            <TutorialCard text="Órteses de Polegar" />
            <TutorialCard text="Órteses de Braço" />
            <TutorialCard text="Órteses de Tornozelo" />
            <TutorialCard text="Órteses de Teste" />
            <TutorialCard text="Órteses de Polegar" />
            <TutorialCard text="Órteses de Braço" />
            <TutorialCard text="Órteses de Tornozelo" />
            <TutorialCard text="Órteses de Teste" />
          </div>
        </div>
      </div>

      <!-- New tutorial modal shown if opened  -->
      <NewTutorialModal
        :openRequest="showNewTutorialModal"
        :toggleModal="openNewTutorialModal"
      />
      <Footer class="mb-5 justify-self-end" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
// SHOULD GET ALL THE TUTORIALS FROM THE API

const showNewTutorialModal = ref(false);

const openNewTutorialModal = () => {
  showNewTutorialModal.value = !showNewTutorialModal.value;
};
</script>
