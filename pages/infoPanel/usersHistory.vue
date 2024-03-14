<template>
  <div class="w-[90%] mx-auto flex flex-col gap-6">
    <div class="flex flex-col gap-5">
      <div class="grid grid-cols-2 place-items-center gap-6 2xl:gap-12">
        <h2
          class="bg-white text-[#2d5893] text-4xl font-bold w-full py-7 text-center rounded-2xl"
        >
          Usuários
        </h2>
        <div
          class="bg-white w-full h-full rounded-2xl flex justify-center items-center"
        >
          <Button
            text="Adicionar novo usuário"
            color="green"
            class="w-[250px]"
          />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-10 2xl:gap-12">
        <StatCard title="Ativos" value="32" />
        <StatCard title="Inativos" value="32" />
        <NuxtLink to="/infoPanel/ordersHistory">
          <StatCard
            title="Total"
            value="132"
            class="hover:drop-shadow hover:bg-slate-50"
          />
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <DateFilterButton />
      <div class="flex flex-col gap-5">
        <OrtesysInfoCard />
        <OrtesysInfoCard type="user" />
        <OrtesysInfoCard type="user" />
        <OrtesysInfoCard type="user" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
</script>

<style scoped></style>
