<template>
  <div>
    <div
      class="flex flex-col gap-2 mx-auto w-full max-w-[560px] 2xl:max-w-[340px]"
    >
      <!-- Ortesys gen icon -->
      <img
        src="../../assets/imgs/logo.png"
        alt="Ortesys Gen"
        class="mx-auto h-[30px] w-[170px]"
      />

      <!-- Title -->
      <h3
        class="text-center blue-text font-bold mt-3 text-[20px] 2xl:text-[20px]"
      >
        Crie sua senha
      </h3>

      <!-- Info paragraph -->
      <p
        class="text-center font-bold leading-6 mt-2 2xl:mt-3 text-[20px] 2xl:text-[20px] w-[340px] mx-auto"
      >
        Falta pouco! Crie uma senha para acessar seu painel.
      </p>

      <!-- Password requirements title -->
      <p
        class="text-center blue-text font-bold mb-3 mt-2 2xl:mt-3 text-[20px] 2xl:text-[20px]"
      >
        Sua senha deve ter:
      </p>

      <!-- Password requirements -->
      <ul class="grid grid-cols-2 2xl:grid-cols-1 mx-auto 2xl:mx-0">
        <!-- Characters quantity -->
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

        <!-- Special character -->
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

        <!-- Uppercase letter -->
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

        <!-- Lowercase letter -->
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

        <!-- Number -->
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

        <!-- Repeated password -->
        <li class="mb-2 flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[20px] rounded-full icon-border"
            :class="{ valid: samePass }"
          >
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            />
          </svg>
          senhas coincidentes
        </li>
      </ul>

      <div class="flex items-center gap-3 mt-5 2xl:mt-0">
        <!-- Caution icon -->
        <img
          src="../../assets/imgs/warning-icon.png"
          alt="Warning icon"
          class="w-[30px] h-[30px] 2xl:w-[42px] 2xl:h-[42px]"
        />

        <!-- Caution message -->
        <p class="my-1">
          Evite senhas utilizadas em outros sites, ou que sejam fáceis de
          descobrir
        </p>
      </div>

      <!-- Create new password form -->
      <form action="#" class="flex 2xl:flex-col items-center gap-2 mt-2">
        <!-- New password input -->
        <div class="w-[260px]">
          <input
            v-model="pass"
            @input="validatePassword"
            id="newPass"
            name="newPass"
            type="text"
            required
            placeholder="Criar senha"
            class="w-full rounded-md px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-950 text-sm leading-6"
          />
        </div>

        <!-- Repeat new password input -->
        <div class="w-[260px]">
          <input
            v-model="repeatedPass"
            @input="checkRepeatedPass"
            id="newPassRepeat"
            name="newPassRepeat"
            type="text"
            required
            placeholder="Repetir senha"
            class="w-full rounded-md px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-950 text-sm leading-6"
          />
        </div>

        <!-- Submit form button -->
        <Button
          type="submit"
          text="Criar senha"
          class="w-[260px]"
          @click.prevent="handleSubmit"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "loginlayout",
});
// SHOULD RECEIVE SELECTED USER

const router = useRouter();

const pass = ref("");
const repeatedPass = ref("");
const charQty = ref(false);
const specialChar = ref(false);
const mayus = ref(false);
const minus = ref(false);
const number = ref(false);
const samePass = ref(false);

const checkCharQty = () => pass.value.length > 5;

const checkSpecialChar = () => {
  const regex = /[@*!%;:.]/;
  return regex.test(pass.value);
};

const checkMayus = () => {
  const regex = /[A-Z]/;
  return regex.test(pass.value);
};

const checkMinus = () => {
  const regex = /[a-z]/;
  return regex.test(pass.value);
};

const checkNumber = () => {
  const regex = /\d/;
  return regex.test(pass.value);
};

const checkRepeatedPass = () => {
  samePass.value = pass.value === repeatedPass.value;
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

  // checks if the password and the repeated password are the same
  checkRepeatedPass();
};

const submitValidation = () => {
  return (
    charQty.value &&
    specialChar.value &&
    mayus.value &&
    minus.value &&
    number.value &&
    samePass.value
  );
};

const handleSubmit = () => {
  submitValidation() && router.push("/login");
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

input {
  background-color: rgba(92, 106, 196, 0.1);
}
</style>
