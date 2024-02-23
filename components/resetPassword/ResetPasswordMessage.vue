<template>
  <div class="background flex justify-center items-center px-8 my-auto">
    <div class="flex flex-col py-[60px] px-[25px] w-[350px] text-center">
      <img
        class="mx-auto h-[34px] w-[190px] mt-5"
        src="../../assets/imgs/logo.png"
        alt="Ortesys Gen"
      />
      <p class="text-xl font-extrabold mt-3 px-5">
        Em breve, você receberá o link para criar sua senha
      </p>
      <p class="text-md mt-3 font-semibold">
        Caso você não receba o link em alguns minutos, tente novamente ou entre
        em contato conosco para verificar o que está acontecendo:
      </p>
      <ul class="text-md mt-3 mb-6 font-semibold">
        <li>E-mail: suporte@ortesys.com.br</li>
        <li>Telefone: (99) 9999-9999</li>
        <span>em dias úteis, das 9h às 18h</span>
      </ul>
      <NuxtLink to="/login">
        <Button text="Voltar para o login" class="text-[12px]" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("../../assets/imgs/resetPassBg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
