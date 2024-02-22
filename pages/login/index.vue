<template>
  <div
    class="background flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Login
      </h2>
    </div>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="flex flex-col items-center" action="#" method="POST">
        <div class="md:w-2/3 mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            placeholder="Seu email..."
            class="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>

        <div class="w-2/3 mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            placeholder="Sua senha..."
            class="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>

        <div class="w-2/3 mt-2">
          <Button type="submit" text="Continuar" />
        </div>
      </form>

      <p class="underline mt-5 text-center text-sm">
        <NuxtLink to="../login/resetPassword">Esqueci minha senha</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "loginlayout",
});
</script>

<style scoped>
.background {
  background-image: url("../../assets/imgs/ortesys-background-logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

input {
  background-color: rgba(92, 106, 196, 0.1);
}

p {
  color: rgba(45, 88, 147, 1);
}
</style>
