<template>
  <form
    class="flex flex-col items-center justify-center gap-12 rounded-2xl bg-[#ffff] shadow-xl py-12 w-[700px] 2xl:w-[800px]"
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
        />
      </div>
      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="cpf-cnpj"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >CPF ou CNPJ</label
        >
        <input
          id="cpf-cnpj"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          placeholder="Digite seu número"
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="specialty"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Especialidade</label
        >
        <input
          id="specialty"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label for="email" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >E-mail</label
        >
        <input
          id="email"
          type="email"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
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
          />
        </div>
      </div>
      <div class="flex gap-2 2xl:gap-2.5">
        <div class="flex flex-col gap-2 2xl:gap-2.5 relative w-1/2">
          <label
            for="estado"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Estado</label
          >
          <select
            id="estado"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none dropdown-icon px-3.5 py-1.5 2xl:py-2"
          >
            <option disabled selected hidden></option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
          </select>
        </div>

        <div class="flex flex-col gap-2 2xl:gap-2.5 relative w-1/2">
          <label
            for="cidade"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Cidade</label
          >
          <select
            id="cidade"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none dropdown-icon px-3.5 py-1.5 2xl:py-2"
          >
            <option disabled selected hidden></option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label for="rua" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Rua</label
        >
        <input
          id="rua"
          type="text"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          placeholder="Digite o endereço"
        />
      </div>

      <div class="flex gap-2 2xl:gap-2.5">
        <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
          <label
            for="numero"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Número</label
          >
          <input
            id="numero"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          />
        </div>

        <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
          <label
            for="complemento"
            class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
            >Complemento</label
          >
          <input
            id="complemento"
            type="text"
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5 relative">
        <label for="role" class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Papel</label
        >
        <select
          id="role"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none dropdown-icon px-3.5 py-1.5 2xl:py-2"
        >
          <option disabled selected hidden></option>
          <option>Doutor</option>
          <option>Colaborador</option>
        </select>
      </div>

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
        />
      </div>

      <div class="flex flex-col gap-2 2xl:gap-2.5">
        <label
          for="passwordRepeat"
          class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
          >Repetir senha</label
        >
        <input
          id="passwordRepeat"
          type="password"
          class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1.5 2xl:py-2"
        />
      </div>

      <Button text="Concluir" color="purple" />
    </div>
  </form>
</template>

<script setup>
const { submitAction } = defineProps(["submitAction"]);
const title = ref("");
title.value = submitAction === "create" ? "Criando novo" : "Atualizando";
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
