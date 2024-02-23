<template>
  <div>
    <div class="flex flex-col gap-2 mx-auto w-full max-w-sm">
      <img
        src="../../assets/imgs/logo.png"
        alt="Ortesys Gen"
        class="mx-auto h-[30px] w-[170px]"
      />
      <h3 class="text-center text-[20px] blue-text font-bold">
        Crie sua senha
      </h3>
      <p class="text-center text-[20px] font-bold leading-6">
        Falta pouco! Crie uma senha para acessar seu painel.
      </p>
      <p class="text-center text-[20px] blue-text font-bold mb-3">
        Sua senha deve ter:
      </p>
      <ul>
        <li class="mb-1 flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[20px] rounded-full icon-border"
            :class="{ valid: charQty }"
          >
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>

          6 ou mais caracteres
        </li>
        <li class="mb-1 flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[20px] rounded-full icon-border"
            :class="{ valid: specialChar }"
          >
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          um caracter especial (@*!%;:.)
        </li>
        <li class="mb-1 flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[20px] rounded-full icon-border"
            :class="{ valid: mayus }"
          >
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          uma letra maiúscula
        </li>
        <li class="mb-1 flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[20px] rounded-full icon-border"
            :class="{ valid: minus }"
          >
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          uma letra minúscula
        </li>
        <li class="mb-1 flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[20px] rounded-full icon-border"
            :class="{ valid: number }"
          >
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          um número
        </li>
        <li class="mb-2 flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[20px] rounded-full icon-border"
            :class="{ valid: nonSequencialNumbers }"
          >
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          números não sequenciais
        </li>
      </ul>
      <div class="flex items-center gap-4">
        <img
          src="../../assets/imgs/warning-icon.png"
          alt="Warning icon"
          class="w-[42px] h-[42px]"
        />
        <p>
          Evite senhas utilizadas em outros sites, ou que sejam fáceis de
          descobrir
        </p>
      </div>
      <form action="#" class="flex flex-col items-center">
        <div class="md:w-2/3 mt-2">
          <input
            v-model="pass"
            @input="validatePassword"
            id="newPass"
            name="newPass"
            type="text"
            required
            placeholder="Criar senha"
            class="w-full rounded-md px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>
        <div class="md:w-2/3 mt-2">
          <input
            id="newPassRepeat"
            name="newPassRepeat"
            type="password"
            required
            placeholder="Repetir senha"
            class="w-full rounded-md px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm"
          />
        </div>
        <Button type="submit" text="Criar senha" class="w-2/3 mt-2" />
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "loginlayout",
});

const pass = ref("");
const charQty = ref(false);
const specialChar = ref(false);
const mayus = ref(false);
const minus = ref(false);
const number = ref(false);
const nonSequencialNumbers = ref(false);

const checkCharQty = () => pass.value.length > 5;

const checkSpecialChar = () => {
  const uppercaseRegex = /[@*!%;:.]/;
  return uppercaseRegex.test(pass.value);
};

const checkMayus = () => {
  const uppercaseRegex = /[A-Z]/;
  return uppercaseRegex.test(pass.value);
};

const checkMinus = () => {
  const uppercaseRegex = /[a-z]/;
  return uppercaseRegex.test(pass.value);
};

const checkNumber = () => {
  const uppercaseRegex = /\d/;
  return uppercaseRegex.test(pass.value);
};

const checkNonSequencialNumbers = () => {
  const regex = /(01|12|23|34|45|56|67|78|89|98|87|76|65|54|43|32|21|10)/;
  return !regex.test(pass.value);
};

const validatePassword = () => {
  // checks if the password has 6 or more characters
  charQty.value = checkCharQty();

  // checks if the password has any special character
  specialChar.value = checkSpecialChar();

  // checks if the password has a mayus
  mayus.value = checkMayus();

  // checks if the password has a minus
  minus.value = checkMinus();

  // checks if the password has a number
  number.value = checkNumber();

  // checks if the password has non sequencial numbers
  nonSequencialNumbers.value = checkNonSequencialNumbers();
};
</script>

<style scoped>
.blue-text {
  color: #2d5893;
}

.icon-border {
  fill: rgba(217, 217, 217, 1);
}

.valid {
  background-color: #bef264;
}
</style>
