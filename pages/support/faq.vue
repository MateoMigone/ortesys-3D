<template>
  <div class="bg-[#f4f4f4] min-h-[100vh] flex justify-center">
    <div class="flex flex-col items-center justify-between gap-8 w-2/3">
      <div class="flex flex-col items-center gap-7 w-full 2xl:gap-10">
        <!-- Header -->
        <Header class="mt-5" />

        <div class="flex flex-col items-center gap-6 w-[90%]">
          <div class="flex gap-6">
            <!-- Return button -->
            <NuxtLink to="/support">
              <Button text="Voltar" color="red" class="w-[200px]" />
            </NuxtLink>

            <!-- Open add new tutorial button -->
            <!-- Shown only if user "Admin" or "Gerente" -->
            <Button
              text="Adicionar pergunta frequente"
              color="green"
              class="w-[250px]"
              @click="openNewFaqModal"
            />
          </div>

          <!-- Show all the faq -->
          <div class="w-full flex flex-col gap-5 max-h-[65vh] overflow-y-auto">
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
          </div>
        </div>
      </div>

      <!-- New tutorial modal shown if opened  -->
      <NewFaqModal
        :openRequest="showNewFaqModal"
        :toggleModal="openNewFaqModal"
      />
      <Footer class="mb-5 justify-self-end" />
    </div>
  </div>
</template>

<script setup>
/* definePageMeta({
  middleware: "auth",
}); */
// SHOULD GET ALL THE FAQS FROM THE API (if included in apis)

const showNewFaqModal = ref(false);

const openNewFaqModal = () => {
  showNewFaqModal.value = !showNewFaqModal.value;
};
</script>
