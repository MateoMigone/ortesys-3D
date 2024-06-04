<template>
  <div class="background">
    <div
      class="flex flex-col justify-center px-6 py-12 m-[100px] 2xl:m-[140px]"
    >
      <!-- Login title -->
      <div class="mx-auto w-full max-w-sm">
        <h2 class="text-center text-2xl 2xl:text-3xl font-bold">Login</h2>
      </div>

      <div class="relative mt-5 2xl:mt-8 mx-auto w-full max-w-sm">
        <!-- Login form -->
        <form class="flex flex-col items-center" @submit.prevent="handleSubmit">
          <!-- Login input email -->
          <div class="w-2/3 2xl:w-3/4 mt-2 2xl:mt-3">
            <input
              type="text"
              autocomplete="email"
              placeholder="Seu email..."
              class="w-full rounded-md px-3 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-[#5C6AC4] bg-opacity-10 placeholder:text-blue-950 text-sm"
              v-model="email"
            />
          </div>
          <!-- Login input password -->
          <div class="w-2/3 2xl:w-3/4 mt-2 2xl:mt-3">
            <input
              type="password"
              autocomplete="current-password"
              placeholder="Sua senha..."
              class="w-full rounded-md px-3 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-[#5C6AC4] bg-opacity-10 placeholder:text-blue-950 text-sm"
              v-model="password"
            />
          </div>
          <!-- Login submit button -->
          <div class="w-2/3 2xl:w-3/4 mt-2 2xl:mt-3">
            <Button text="Continuar" class="w-full" />
          </div>
        </form>
        <!-- Forgot my password link -->
        <p
          class="underline mt-5 2xl:mt-8 text-[#2D5893] text-center text-sm 2xl:text-base"
        >
          <NuxtLink to="../login/resetPassword">Esqueci minha senha</NuxtLink>
        </p>

        <!-- Error messages if input is incorrect -->
        <div
          v-if="errorMessage"
          class="absolute flex flex-col gap-2.5 top-[12px] left-[400px] bg-[#DE3618] bg-opacity-80 text-white w-[320px] p-3.5 px-5 italic rounded-xl shadow-2xl"
        >
          <h6 class="font-bold text-lg">Atenção:</h6>
          <ul class="list-disc list-inside">
            <li v-if="errorMessage.error">{{ errorMessage.error }}</li>
            <li v-if="errorMessage.Email">{{ errorMessage.Email[0] }}</li>
            <li v-if="errorMessage.Senha">{{ errorMessage.Senha[0] }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "loginlayout",
});

import { useAuthStore } from "~/stores/auth";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();
const router = useRouter();
const errorMessage = ref(null);

const handleSubmit = async () => {
  /* Post the authorization login values */
  const { data, error } = await useFetch("/api/Conta/OAuth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      senha: password.value,
    }),
  });

  errorMessage.value = error.value.data.errors || error.value.data || null;

  console.log(error.value.data.error);
  /* Let authStore authenticate user*/
  authStore.login(error.value);

  /* Allow the login if the user is authenticated */
  authStore.isAuthenticated && router.push("/");
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/imgs/ortesys-background-logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
