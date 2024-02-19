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

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div class="mt-2">
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

        <div class="mt-2">
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

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Continuar
          </button>
        </div>
      </form>

      <p class="underline mt-7 text-center text-sm">
        <NuxtLink to="/">Esqueci minha senha</NuxtLink>
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
  background-image: url("/ortesys-background-logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

input {
  background-color: rgba(92, 106, 196, 0.1);
}

button {
  background-color: rgba(45, 88, 147, 1);
}

button:hover {
  background-color: #2fb7a0;
}

p {
  color: rgba(45, 88, 147, 1);
}
</style>
