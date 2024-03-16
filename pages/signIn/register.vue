<template>
  <div class="flex flex-col items-center justify-center bg-[#f4f4f4]">
    <div
      class="mt-10 flex items-center justify-center bg-[#ffff] w-[392px] h-[93px] rounded-2xl"
    >
      <Button
        text="Painel de informações"
        color="green"
        class="w-[214px] h-[40px]"
      />
    </div>
    <div
      class="flex items-center justify-center w-[800px] h-[1181px] rounded-2xl bg-[#ffff] mt-14"
    >
      <div class="flex flex-col w-[461px] h-[931px] gap-6">
        <div class="flex flex-col gap-2.5">
          <label
            for="registration-date"
            class="text-xl font-bold text-[#2D5893]"
            >Data do cadastro</label
          >
          <input
            id="registration-date"
            type="text"
            class="w-[460px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
            placeholder="__/__/____"
          />
        </div>
        <div class="flex flex-col gap-2.5">
          <label for="complete-name" class="text-xl font-bold text-[#2D5893]"
            >Nome completo</label
          >
          <input
            id="complete-name"
            type="text"
            class="w-[460px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
          />
        </div>
        <div class="flex flex-col gap-2.5">
          <label for="cpf-cnpj" class="text-xl font-bold text-[#2D5893]"
            >CPF ou CNPJ</label
          >
          <input
            id="cpf-cnpj"
            type="text"
            class="w-[460px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
            placeholder="Digite seu número"
          />
        </div>

        <div class="flex flex-col gap-2.5">
          <label for="specialty" class="text-xl font-bold text-[#2D5893]"
            >Especialidade</label
          >
          <input
            id="specialty"
            type="text"
            class="w-[460px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
          />
        </div>

        <div class="flex flex-col gap-2.5">
          <label for="email" class="text-xl font-bold text-[#2D5893]"
            >E-mail</label
          >
          <input
            id="email"
            type="email"
            class="w-[460px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
          />
        </div>
        <div class="flex w-[457px] h-[76px] gap-2.5">
          <div class="flex flex-col w-[116px] h-[76px] gap-4">
            <label for="ddi" class="text-xl font-bold text-[#2D5893]"
              >DDI</label
            >
            <input
              id="ddi"
              type="text"
              class="w-[116px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
            />
          </div>

          <div class="flex flex-col w-[212px] h-[76px] gap-4">
            <label for="phone-number" class="text-xl font-bold text-[#2D5893]"
              >Número</label
            >
            <input
              id="phone-number"
              type="text"
              class="w-[212px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
            />
          </div>
        </div>
        <div class="flex w-[457px] h-[76px] gap-2.5">
          <div class="flex flex-col w-[212px] h-[76px] gap-4 relative">
            <label for="estado" class="text-xl font-bold text-[#2D5893]"
              >Estado</label
            >
            <select
              id="estado"
              class="w-[212px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] pr-8 pl-3 bg-[#FCFCFF] appearance-none dropdown-icon"
            >
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
            </select>
          </div>

          <div class="flex flex-col w-[212px] h-[76px] gap-4 relative">
            <label for="cidade" class="text-xl font-bold text-[#2D5893]"
              >Cidade</label
            >
            <select
              id="cidade"
              class="w-[212px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] pr-8 pl-3 bg-[#FCFCFF] appearance-none dropdown-icon"
            >
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
            </select>
          </div>
        </div>
        <div class="flex w-[457px] h-[76px] gap-2.5">
          <div class="flex flex-col w-full h-[76px] gap-4">
            <label for="rua" class="text-xl font-bold text-[#2D5893]"
              >Rua</label
            >
            <input
              id="rua"
              type="text"
              class="w-full h-[40px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
              placeholder="Digite o endereço"
            />
          </div>
        </div>
        <div class="flex w-[457px] h-[76px] gap-2.5">
          <div class="flex flex-col w-[229px] h-[67px] gap-4">
            <label for="numero" class="text-xl font-bold text-[#2D5893]"
              >Número</label
            >
            <input
              id="numero"
              type="text"
              class="w-[229px] h-[31px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
            />
          </div>

          <div class="flex flex-col w-[214px] h-[67px] gap-4">
            <label for="complemento" class="text-xl font-bold text-[#2D5893]"
              >Complemento</label
            >
            <input
              id="complemento"
              type="text"
              class="w-[214px] h-[31px] rounded-md border-[1px] border-[#CDCEE4] p-3.5 bg-[#FCFCFF]"
            />
          </div>
        </div>
        <Button text="Concluir" color="purple" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
