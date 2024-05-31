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
          <!-- Name info field -->
          <div>
            <h3 class="text-[#2d5893] font-bold text-xl">Nome</h3>
            <div
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            >
              Paulo Tavares
            </div>
          </div>

          <!-- Email info field -->
          <div>
            <h3 class="text-[#2d5893] font-bold text-xl">E-mail</h3>
            <div
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            >
              paulotavares@gmail.com
            </div>
          </div>

          <!-- Phone number info field -->
          <div>
            <h3 class="text-[#2d5893] font-bold text-xl">Telefone*</h3>
            <div
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            >
              +55 (DDD) 00000-0000
            </div>
          </div>

          <!-- User role info field -->
          <div>
            <h3 class="text-[#2d5893] font-bold text-xl">Função</h3>
            <div
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            >
              ADM
            </div>
          </div>
        </div>

        <!-- Change password button -->
        <Button
          color="primary"
          text="Trocar senha"
          class="w-3/5 max-w-[285px] my-3"
          @click.prevent="goToPasswordChange"
        />
      </form>
    </div>

    <!-- Show stats only if user role is "Admin" or "Gerente" -->
    <div
      class="rounded-2xl border-[1px] p-5 grid grid-cols-3 p-5 gap-6 place-items-center"
      v-if="userRole === 'Admin' || userRole === 'Gerente'"
    >
      <!-- Show stat cards (maybe with v-for) -->
      <StatCard
        title="Órteses geradas"
        value="32"
        @click="goToInfoPanel"
        class="cursor-pointer hover:drop-shadow hover:bg-slate-50"
      />
      <StatCard title="Filamento utilizado" value="32kg" />
      <StatCard title="Tempo de impressão" value="32h" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

// SHOULD GET THE USER STATS FROM THE API

const userRole = ref("Admin");
const router = useRouter();

const goToPasswordChange = () => {
  router.push("/myAccount/changePassword");
};

const goToInfoPanel = () => {
  router.push("/infoPanel/ordersHistory");
};
</script>

<style scoped></style>
