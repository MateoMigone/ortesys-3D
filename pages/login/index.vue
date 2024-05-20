<template>
  <div class="background">
    <div
      class="flex flex-col justify-center px-6 py-12 m-[100px] 2xl:m-[140px]"
    >
      <div class="mx-auto w-full max-w-sm">
        <h2 class="text-center text-2xl 2xl:text-3xl font-bold">Login</h2>
      </div>

      <div class="mt-5 2xl:mt-8 mx-auto w-full max-w-sm">
        <form class="flex flex-col items-center" @submit.prevent="handleSubmit">
          <div class="w-2/3 2xl:w-3/4 mt-2 2xl:mt-3">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              placeholder="Seu email..."
              class="w-full rounded-md px-3 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-950 text-sm"
              v-model="email"
            />
          </div>

          <div class="w-2/3 2xl:w-3/4 mt-2 2xl:mt-3">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              placeholder="Sua senha..."
              class="w-full rounded-md px-3 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-950 text-sm"
              v-model="password"
            />
          </div>

          <div class="w-2/3 2xl:w-3/4 mt-2 2xl:mt-3">
            <NuxtLink to=""
              ><Button type="submit" text="Continuar" class="w-full"
            /></NuxtLink>
          </div>
        </form>

        <p class="underline mt-5 2xl:mt-8 text-center text-sm 2xl:text-base">
          <NuxtLink to="../login/resetPassword">Esqueci minha senha</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "loginlayout",
});

/* const validateUser = ref(false); */
const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  const { data, error } = await useFetch(
    "https://ortesys.pro/api/v1/Conta/OAuth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        senha: password.value,
      }),
    }
  );

  /* validateUser.value = error.value ? false : true; */
};
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
