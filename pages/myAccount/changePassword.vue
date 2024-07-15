<template>
  <div
    class="w-[90%] mx-auto bg-white shadow-lg rounded-2xl p-7 flex flex-col gap-4"
  >
    <div class="rounded-2xl border-[1px] p-5 flex justify-center">
      <form class="flex flex-col items-center justify-center gap-6 w-2/3">
        <div class="flex flex-col items-center gap-2 2xl:mt-5">
          <!-- Profile image -->
          <img
            class="h-[62px] w-[62px] rounded-full border-2 border-[#2d5893] p-1"
            src="~/assets/imgs/user-avatar.png"
            alt="Profile image"
          />

          <!-- Profile name -->
          <h4 class="font-semibold text-[#2d5893] text-lg">Dr Paulo Tavares</h4>
        </div>

        <div class="w-full max-w-[475px] flex flex-col gap-4">
          <!-- Actual password input -->
          <div>
            <label class="text-[#2d5893] font-bold text-xl">Senha atual</label
            ><br />
            <input
              type="password"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
              placeholder="Digite sua senha atual"
            />
          </div>

          <!-- New password input -->
          <div>
            <label class="text-[#2d5893] font-bold text-xl">Nova senha</label
            ><br />
            <input
              type="password"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
              placeholder="Digite sua nova senha"
            />
          </div>

          <!-- Repeat new password input -->
          <div>
            <label class="text-[#2d5893] font-bold text-xl"
              >Confirme nova senha</label
            ><br />
            <input
              type="password"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
              placeholder="Digite sua nova senha"
            />
          </div>
        </div>

        <!-- Save password change button -->
        <Button
          color="secondary"
          text="Salvar alterações"
          class="w-3/5 max-w-[285px] my-3"
          @click.prevent="handlePasswordChange"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

const router = useRouter();

const handlePasswordChange = () => {
  // SHOULD POST FOR AUTHENTICATING ACTUAL PASSWORD AND CONFIRM PASSWORD CHANGE
  router.push("/myAccount");
};
</script>

<style scoped></style>
