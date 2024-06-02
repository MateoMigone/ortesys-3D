<template>
  <div class="w-[90%] mx-auto">
    <!-- Text banner -->
    <TextBanner
      title="Como podemos ajudar? "
      subtitle="Contacte-nos através dos links abaixo:"
    />

    <div
      class="flex justify-center items-center rounded-2xl bg-white py-12 2xl:py-16"
    >
      <div class="flex flex-col items-center gap-6">
        <!-- Go to frequently asked questions button -->
        <NuxtLink to="/support/faq">
          <Button
            text="Acessar perguntas frequentes"
            color="purple"
            class="w-[270px]"
          />
        </NuxtLink>
        <div class="flex flex-col items-center">
          <!-- Title -->
          <h3 class="font-bold text-[#2D5893] text-3xl 2xl:text-4xl">
            Ainda está com dúvida?
          </h3>

          <!-- Info paragraph -->
          <p
            class="font-medium text-[#2D5893] text-center w-[450px] text-xl 2xl:text-2xl 2xl:w-[500px]"
          >
            Entre em contato conosco através dos nossos canais de atendimento
            online :)
          </p>
        </div>

        <!-- Send email button -->
        <div class="flex flex-col items-center gap-3">
          <span class="text-xl font-bold text-[#2D5893]">E-mail</span>
          <Button
            text="Enviar um e-mail"
            color="purple"
            class="w-[270px]"
            @click="openMail"
          />
        </div>

        <!-- Open chat button -->
        <div class="flex flex-col items-center gap-3">
          <span class="text-xl font-bold text-[#2D5893]">Chat</span>
          <Button
            text="Abrir o chat"
            color="purple"
            class="w-[270px]"
            @click="openWhatsApp"
          />
        </div>

        <div class="flex justify-between gap-2">
          <!-- Send feedback email button -->
          <Button text="Feedback" color="secondary" @click="openFeedbackMail" />
          <!-- Open tutorials modal button -->
          <Button text="Videos tutoriais" @click="openModal" />
          <!-- Send new ortesys request email button -->
          <Button
            text="Solicitar órteses diferente"
            color="red"
            @click="openNewOrtesysMail"
          />
        </div>
      </div>
    </div>

    <!-- Hidden link for mail sending -->
    <a ref="mailLink" href="mailto:contato@ortesys.com.br" class="hidden" />

    <!-- Hidden link for feedback mail sending -->
    <a
      ref="feedbackMailLink"
      href="mailto:contato@ortesys.com.br?subject=Feedback"
      class="hidden"
    />

    <!-- Hidden link for new ortesys request mail sending -->
    <a
      ref="newOrtesysMailLink"
      href="mailto:contato@ortesys.com.br?subject=Solicitar órteses diferente"
      class="hidden"
    />

    <!-- Tutorials modal shown if opened -->
    <TutorialsModal :openRequest="showModal" :toggleModal="openModal" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

const showModal = ref(false);

const mailLink = ref("");
const feedbackMailLink = ref("");
const newOrtesysMailLink = ref("");

const openModal = () => {
  showModal.value = !showModal.value;
};

const openMail = () => {
  mailLink.value.click();
};

const openFeedbackMail = () => {
  feedbackMailLink.value.click();
};

const openNewOrtesysMail = () => {
  newOrtesysMailLink.value.click();
};

const openWhatsApp = () => {
  const phoneNumber = "5521990177117";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, "_blank");
};
</script>
