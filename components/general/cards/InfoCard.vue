<template>
  <div class="flex justify-around gap-4 p-6 pt-3">
    <!-- Stat -->
    <div
      class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2 cursor-pointer rounded-xl"
      :class="type === 'user' && 'hover:drop-shadow hover:bg-slate-50'"
      @click="goToUserOrtesysStats"
    >
      <!-- Stat value -->
      <div
        class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8 pt-3"
      >
        32
      </div>
      <!-- Stat title -->
      <div
        class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg pb-3"
      >
        Órteses geradas
      </div>
    </div>
    <!-- Stat -->
    <div
      class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
    >
      <!-- Stat value -->
      <div
        class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8 pt-3"
      >
        R$32
      </div>
      <!-- Stat title -->
      <div class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg">
        Receita
      </div>
    </div>
    <!-- Stat -->
    <div
      class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
    >
      <!-- Stat value -->
      <div
        class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8 pt-3"
      >
        32kg
      </div>
      <!-- Stat title -->
      <div class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg">
        Gesso salvo
      </div>
    </div>
    <!-- Stat -->
    <div
      class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
    >
      <!-- Stat value -->
      <div
        class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8 pt-3"
      >
        32kg
      </div>
      <!-- Stat title -->
      <div class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg">
        Filamento utilizado
      </div>
    </div>
    <!-- Stat -->
    <div
      class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
    >
      <!-- Stat value -->
      <div
        class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8 pt-3"
      >
        32m
      </div>
      <!-- Stat title -->
      <div class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg">
        Velcro utilizado
      </div>
    </div>
    <!-- Stat -->
    <div
      class="flex flex-col items-center text-center max-w-[90px] 2xl:max-w-[100px] gap-2"
    >
      <!-- Stat value -->
      <div
        class="text-[32px] 2xl:text-4xl font-bold text-[#2fb7a0] leading-8 pt-3"
      >
        32h
      </div>
      <!-- Stat title -->
      <div class="font-bold text-[#2d5893] leading-5 2xl:leading-5 2xl:text-lg">
        Tempo de impressão
      </div>
    </div>
  </div>
</template>

<script setup>
const { type } = defineProps(["type"]);
// SHOULD RECEIVE ALL STATS INFO

const router = useRouter();

const goToUserOrtesysStats = () => router.push("/infoPanel/ordersHistory");
</script>
