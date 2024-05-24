<template>
  <div
    class="w-[90%] mx-auto bg-white shadow-lg rounded-2xl p-7 flex flex-col gap-4"
  >
    <div class="rounded-2xl border-[1px] p-5 flex justify-center">
      <form
        action=""
        class="flex flex-col items-center justify-center gap-6 w-2/3"
      >
        <div class="flex flex-col items-center gap-2 2xl:mt-5">
          <img
            class="h-[62px] w-[62px] rounded-full border-2 border-[#2d5893] p-1"
            src="../assets/imgs/user-avatar.png"
            alt="Profile image"
          />
          <h4 class="font-semibold text-[#2d5893] text-lg">Dr Paulo Tavares</h4>
        </div>

        <div class="w-full max-w-[475px] flex flex-col gap-4">
          <div>
            <label for="fist" class="text-[#2d5893] font-bold text-xl"
              >Nome</label
            ><br />
            <input
              type="text"
              name="fist"
              id="fist"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div>
            <label for="fist" class="text-[#2d5893] font-bold text-xl"
              >E-mail</label
            ><br />
            <input
              type="text"
              name="fist"
              id="fist"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
              placeholder="cliente@gmail.com"
            />
          </div>
          <div>
            <label for="fist" class="text-[#2d5893] font-bold text-xl"
              >Telefone*</label
            ><br />
            <input
              type="text"
              name="fist"
              id="fist"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
              placeholder="+55 (DDD) 00000-0000"
            />
          </div>
        </div>
        <Button
          color="secondary"
          text="Salvar alterações"
          class="w-3/5 max-w-[285px] my-3"
          @click.prevent
        />
      </form>
    </div>
    <div
      class="rounded-2xl border-[1px] p-5 grid grid-cols-3 grid-rows-2 p-5 gap-6 place-items-center"
    >
      <StatCard title="Órteses geradas" value="32" />

      <StatCard title="Receita estimada" value="R$32,00" />

      <StatCard title="Gesso salvo" value="32kg" />

      <StatCard title="Filamento utilizado" value="32kg" />

      <StatCard title="Velcro utilizado" value="32m" />

      <StatCard title="Tempo de impressão" value="32h" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});
</script>

<style scoped></style>
