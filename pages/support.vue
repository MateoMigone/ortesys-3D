<template>
  <div class="w-[90%] mx-auto">
    <TextBanner
      title="Como podemos ajudar? "
      subtitle="Contacte-nos através dos links abaixo:"
    />
    <div
      class="flex justify-center items-center rounded-2xl bg-white py-12 2xl:py-16"
    >
      <div class="flex flex-col items-center gap-6">
        <div>
          <Button
            text="Acessar perguntas frequentes"
            color="purple"
            class="w-[270px]"
          />
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-bold text-[#2D5893] text-3xl 2xl:text-4xl">
            Ainda está com dúvida?
          </h3>
          <span
            class="font-medium text-[#2D5893] text-center w-[450px] text-xl 2xl:text-2xl 2xl:w-[500px]"
            >Entre em contato conosco através dos nossos canais de atendimento
            online :)</span
          >
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="text-xl font-bold text-[#2D5893]">E-mail</span>
          <Button text="Enviar um e-mail" color="purple" class="w-[270px]" />
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="text-xl font-bold text-[#2D5893]">Chat</span>
          <Button text="Abrir o chat" color="purple" class="w-[270px]" />
        </div>
        <div class="flex justify-between gap-2">
          <Button text="Feedback" color="secondary" />
          <Button text="Videos tutoriais" />
          <Button text="Solicitar órteses diferente" color="red" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
</script>
