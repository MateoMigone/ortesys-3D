<template>
  <div class="mx-auto w-full max-w-sm">
    <div>
      <!-- Ortesys Gen logo -->
      <img
        class="mx-auto h-[32px] w-[180px] 2xl:h-[34px] 2xl:w-[190px]"
        src="../../assets/imgs/logo.png"
        alt="Ortesys Gen"
      />
      <!-- Title -->
      <h3 class="font-bold text-center mt-4 2xl:mt-6 text-[25px] 2xl:text-3xl">
        Senha de acceso
      </h3>
    </div>
    <!-- Reset password form -->
    <form class="space-y-6 mt-5 2xl:mt-8">
      <div class="mb-8">
        <!-- Input CPF -->
        <p
          class="text-center font-semibold text-gray-800 mb-5 text-lg 2xl:text-xl"
        >
          Digite seu email para criar sua senha
        </p>
        <div class="mt-2">
          <input
            type="text"
            autocomplete="email"
            required
            placeholder="Digite seu email"
            class="w-full rounded-md px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 bg-[#5C6AC4] bg-opacity-10 placeholder:text-blue-950 text-sm 2xl:text-base"
          />
        </div>
      </div>
      <!-- Input link receiving option -->
      <fieldset>
        <legend
          class="leading-6 font-semibold text-gray-800 text-lg 2xl:text-xl"
        >
          Por onde você quer receber o link para criar sua senha?
        </legend>
        <div class="mt-4 space-y-4 2xl:space-y-6">
          <!-- Email option -->
          <label class="flex items-center gap-x-3">
            <input
              name="linkReceivingOption"
              type="radio"
              class="h-5 w-5 2xl:h-6 2xl:w-6 cursor-pointer"
            />
            <span class="text-md font-medium cursor-pointer">E-mail</span>
          </label>
          <!-- SMS option -->
          <label class="flex items-center gap-x-3">
            <input
              name="linkReceivingOption"
              type="radio"
              class="h-5 w-5 2xl:h-6 2xl:w-6 cursor-pointer"
            />
            <span class="text-md font-medium cursor-pointer">SMS</span>
          </label>
        </div>
      </fieldset>
      <!-- Submit form button -->
      <div>
        <Button type="submit" text="Enviar" class="w-full" />
      </div>
    </form>
  </div>
</template>

<script setup>
/* ADD LOGIC FOR FUNCTIONALLITY */
</script>
