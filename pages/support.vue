<template>
  <div class="widith-[90%] mx-auto">
    <TextBanner
      title="Como podemos ajudar? "
      subtitle="Contacte-nos através dos links abaixo:"
    />
    <div
      class="flex justify-center items-center h-[553px] rounded-2xl bg-white"
    >
      <div class="flex flex-col items-center w-[555px] h-[418px] gap-6">
        <div>
          <Button
            text="Acessar perguntas frequentes"
            color="purple"
            class="w-64 h-10"
          />
        </div>
        <div class="flex flex-col items-center w-[556px] h-[105px]">
          <h3 class="font-bold text-4xl text-[#2D5893]">
            Ainda está com dúvida?
          </h3>
          <span class="font-medium text-2xl text-[#2D5893] text-center"
            >Entre em contato conosco através dos nossos canais de atendimento
            online :)</span
          >
        </div>
        <div class="flex flex-col items-center w-[251px] h-[76px] gap-4">
          <span class="text-xl font-bold text-[#2D5893]">E-mail</span>
          <Button text="Enviar um e-mail" color="purple w-[251px] h-[40px]" />
        </div>
        <div class="flex flex-col items-center w-[251px] h-[76px] gap-4">
          <span class="text-xl font-bold text-[#2D5893]">Chat</span>
          <Button text="Abrir o chat" color="purple w-[251px] h-[40px]" />
        </div>
        <div class="flex justify-between gap-1.5">
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
