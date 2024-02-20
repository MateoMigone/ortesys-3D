<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-[36px] w-[205px]"
          src="/logo.png"
          alt="Ortesys Gen"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Senha de acceso
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <p class="mt-1 text-sm leading-6 text-gray-700">
              Digite seu CPF para criar sua senha
            </p>
            <div class="mt-2">
              <input
                id="cpf"
                name="cpf"
                type="text"
                autocomplete="cpf"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Por onde você quer receber o link para criar sua senha?
            </p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-everything"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >E-mail</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >SMS</label
                >
              </div>
            </div>
          </div>

          <div>
            <Button type="submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "loginlayout",
});
</script>

<style scoped>
input {
  background-color: rgba(92, 106, 196, 0.1);
}
</style>
