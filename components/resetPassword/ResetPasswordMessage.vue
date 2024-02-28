<template>
  <div class="background flex justify-center items-center px-8 my-auto">
    <div class="flex flex-col py-[60px] px-[25px] w-[350px] text-center">
      <img
        class="mx-auto h-[34px] w-[190px] mt-5"
        src="../../assets/imgs/logo.png"
        alt="Ortesys Gen"
      />
      <p
        class="font-extrabold text-xl 2xl:text-[22px] mt-3 2xl:mt-5 px-5 2xl:px-2"
      >
        Em breve, você receberá o link para criar sua senha
      </p>
      <p class="font-semibold text-base 2xl:text-lg mt-3 2xl:mt-5">
        Caso você não receba o link em alguns minutos, tente novamente ou entre
        em contato conosco para verificar o que está acontecendo:
      </p>
      <ul class="mb-6 font-semibold text-base 2xl:text-lg mt-3 2xl:mt-5">
        <li>E-mail: suporte@ortesys.com.br</li>
        <li>Telefone: (99) 9999-9999</li>
        <span>em dias úteis, das 9h às 18h</span>
      </ul>
      <NuxtLink to="/login">
        <Button text="Voltar para o login" />
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
