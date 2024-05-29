<template>
  <form
    class="flex flex-col items-center justify-center gap-12 rounded-2xl bg-[#ffff] shadow-xl py-12 w-[700px] 2xl:w-[800px]"
    @submit.prevent="handleSubmit"
  >
    <h3
      class="border-[2px] rounded-full py-1.5 px-7 text-xl 2xl:text-2xl"
      :class="
        submitAction === 'create'
          ? 'text-[#5CC46D] border-[#5CC46D]'
          : 'text-[#E6AF23] border-[#E6AF23]'
      "
    >
      {{ title }} usuário
    </h3>
    <div class="flex flex-col w-[400px] gap-5 2xl:w-[450px] 2xl:gap-6">
      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="complete-name"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Nome completo</label
        >
        <input
          id="complete-name"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="name"
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="username"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Nome de usuário</label
        >
        <input
          id="username"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="username"
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="birth-date"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Data de nascimento</label
        >
        <input
          id="birth-date"
          type="datetime-local"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="birthDate"
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label for="gender" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Genero</label
        >
        <select
          id="uf"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none dropdown-icon px-3.5 py-1.5 2xl:py-2"
          v-model="uf"
        >
          <option disabled selected hidden></option>
          <option>Nenhum</option>
          <option>Masculino</option>
          <option>Feminino</option>
          <option>NaoInformado</option>
        </select>
      </div>

      <!--  <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="cpf-cnpj"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >CPF ou CNPJ</label
        >
        <input
          id="cpf-cnpj"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="cpf"
        />
      </div> -->

      <div class="flex gap-2 2xl:gap-2.5">
        <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
          <label
            for="profession"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Profissão</label
          >
          <input
            id="profession"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            v-model="profession"
          />
        </div>

        <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
          <label
            for="specialty"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Especialidade</label
          >
          <input
            id="specialty"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            v-model="specialty"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label for="email" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >E-mail</label
        >
        <input
          id="email"
          type="email"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="email"
        />
      </div>
      <div class="flex gap-2 2xl:gap-2.5">
        <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/4">
          <label for="ddi" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >DDI</label
          >
          <input
            id="ddi"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            v-model="ddi"
          />
        </div>

        <div class="flex flex-col gap-2 2xl:gap-2.5 w-3/4">
          <label
            for="phone-number"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Número</label
          >
          <input
            id="phone-number"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            v-model="phoneNumber"
          />
        </div>
      </div>
      <div class="flex gap-2 2xl:gap-2.5">
        <div class="flex flex-col gap-2 2xl:gap-2.5 relative w-1/2">
          <label for="uf" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >UF</label
          >
          <select
            id="uf"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none dropdown-icon px-3.5 py-1.5 2xl:py-2"
            v-model="uf"
          >
            <option disabled selected hidden></option>
            <option>RJ</option>
            <option>SP</option>
          </select>
        </div>

        <div class="flex flex-col gap-2 2xl:gap-2.5 relative w-1/2">
          <label for="city" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Cidade</label
          >
          <select
            id="city"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none dropdown-icon px-3.5 py-1.5 2xl:py-2"
            v-model="city"
          >
            <option disabled selected hidden></option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
          </select>
        </div>
      </div>

      <!-- <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label for="street" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Rua</label
        >
        <input
          id="street"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="street"
        />
      </div> -->

      <!-- <div class="flex gap-2 2xl:gap-2.5">
        <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
          <label
            for="street-number"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Número</label
          >
          <input
            id="street-number"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            v-model="streetNumber"
          />
        </div> -->

      <!-- <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
          <label
            for="street-complement"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Complemento</label
          >
          <input
            id="street-complement"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
            v-model="streetComplement"
          />
        </div>
      </div> -->

      <!-- <div class="flex flex-col gap-2 2xl:gap-2.5 relative">
        <label for="role" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Papel</label
        >
        <select
          id="role"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none dropdown-icon px-3.5 py-1.5 2xl:py-2"
          v-model="role"
        >
          <option disabled selected hidden></option>
          <option>Doutor</option>
          <option>Colaborador</option>
        </select>
      </div> -->

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="password"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Senha</label
        >
        <input
          id="password"
          type="password"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="password"
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="password-repeat"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Repetir senha</label
        >
        <input
          id="password-repeat"
          type="password"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="passwordRepeat"
        />
      </div>

      <hr class="border-[#CDCEE4] mt-3" />
      <div class="flex gap-2 2xl:gap-2.5">
        <input
          id="marketing-notifications"
          type="checkbox"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          v-model="marketingNotifications"
        />
        <label
          for="marketing-notifications"
          class="font-bold text-md 2xl:text-lg"
          >Quero receber notificações de marketing</label
        >
      </div>
      <hr class="border-[#CDCEE4] mb-3" />
      <Button text="Concluir" color="purple" />
    </div>
  </form>
</template>

<script setup>
const { submitAction } = defineProps(["submitAction"]);
const title = ref("");
title.value = submitAction === "create" ? "Criando novo" : "Atualizando";

const name = ref("");
const username = ref("");
const birthDate = ref("");
const gender = ref("");
const cpf = ref("");
const profession = ref("");
const specialty = ref("");
const email = ref("");
const ddi = ref("");
const phoneNumber = ref("");
const uf = ref("");
const city = ref("");
const street = ref("");
const streetNumber = ref("");
const streetComplement = ref("");
const role = ref("");
const password = ref("");
const passwordRepeat = ref("");
const marketingNotifications = ref(false);

const handleSubmit = async () => {
  // Convert the date to ISO 8601 format
  const isoBirthDate = new Date(birthDate.value).toISOString();

  // Concatenate ddi and phone number to create full phone number
  const fullPhoneNumber = `${ddi.value} ${phoneNumber.value}`;

  /* // Concatenate street, street number and street complement to create address
  const address = `${street.value} ${streetNumber.value} ${streetComplement.value}` */

  // Post the form data
  const { data } = await useFetch("https://ortesys.pro/api/v1/Conta/Registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: name.value,
      username: username.value,
      dataNascimento: isoBirthDate,
      genero: gender.value,
      telefone: fullPhoneNumber,
      profissao: profession.value,
      especializacao: specialty.value,
      cidade: city.value,
      uf: uf.value,
      email: email.value,
      notificacoesMarketing: marketingNotifications.value,
      senha: password.value,
      confirmarSenha: passwordRepeat.value,
    }),
  });
};
</script>

<style scoped>
.dropdown-icon {
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1.5 1.25L5.3636 5.1136C5.71508 5.46508 6.28492 5.46508 6.6364 5.1136L10.5 1.25" stroke="%232D5893" stroke-width="1.8" stroke-linecap="round"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 12px 7px;
  -webkit-appearance: none; /* For WebKit browsers */
  -moz-appearance: none; /* For Mozilla browsers */
  appearance: none; /* For modern browsers */
  padding-right: 2rem; /* Make space for the icon */
}
</style>
