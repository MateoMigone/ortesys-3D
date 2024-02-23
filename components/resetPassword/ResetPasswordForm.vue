<template>
  <div>
    <div class="min-h-full px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-[34px] w-[190px]"
          src="../../assets/imgs/logo.png"
          alt="Ortesys Gen"
        />
        <h3 class="mt-4 text-center text-[27px] font-bold leading-9">
          Senha de acceso
        </h3>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div class="mb-8">
            <p
              class="mb-5 text-[20px] text-center font-semibold leading-6 text-gray-800"
            >
              Digite seu CPF para criar sua senha
            </p>
            <div class="mt-2">
              <input
                id="cpf"
                name="cpf"
                type="text"
                autocomplete="cpf"
                required
                placeholder="CPF"
                class="block w-full rounded-md border-0 px-3 py-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs leading-6"
              />
            </div>
          </div>

          <div>
            <p class="text-xl font-semibold leading-6 text-gray-800">
              Por onde você quer receber o link para criar sua senha?
            </p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="h-6 w-6 text-indigo-600"
                />
                <label
                  for="push-everything"
                  class="block text-md font-medium leading-6"
                  >E-mail</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-6 w-6 border-red-900 text-red-600 focus:ring-green-600 border-5"
                />
                <label
                  for="push-email"
                  class="block text-md font-medium leading-6"
                  >SMS</label
                >
              </div>
            </div>
          </div>

          <div>
            <Button type="submit" text="Enviar" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  background-color: rgba(92, 106, 196, 0.1);
}
</style>
