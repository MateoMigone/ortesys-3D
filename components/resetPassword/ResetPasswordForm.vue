<template>
  <div class="mx-auto w-full max-w-sm">
    <div>
      <img
        class="mx-auto h-[32px] w-[180px] 2xl:h-[34px] 2xl:w-[190px]"
        src="../../assets/imgs/logo.png"
        alt="Ortesys Gen"
      />
      <h3 class="font-bold text-center mt-4 2xl:mt-6 text-[25px] 2xl:text-3xl">
        Senha de acceso
      </h3>
    </div>

    <div class="mt-5 2xl:mt-8">
      <form class="space-y-6">
        <div class="mb-8">
          <p
            class="text-center font-semibold text-gray-800 mb-5 text-lg 2xl:text-xl"
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
              class="w-full rounded-md px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-950 text-sm 2xl:text-base"
            />
          </div>
        </div>

        <div>
          <p class="leading-6 font-semibold text-gray-800 text-lg 2xl:text-xl">
            Por onde você quer receber o link para criar sua senha?
          </p>
          <div class="mt-4 space-y-4 2xl:space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                class="h-5 w-5 2xl:h-6 2xl:w-6"
              />
              <label for="push-everything" class="text-md font-medium"
                >E-mail</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="push-email"
                name="push-notifications"
                type="radio"
                class="h-5 w-5 2xl:h-6 2xl:w-6"
              />
              <label for="push-email" class="text-md font-medium">SMS</label>
            </div>
          </div>
        </div>

        <div>
          <Button type="submit" text="Enviar" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
input {
  background-color: rgba(92, 106, 196, 0.1);
}
</style>
