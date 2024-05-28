<template>
  <div class="w-[90%] mx-auto flex flex-col gap-5">
    <DateFilterButton />
    <div class="grid grid-cols-3 gap-6 place-items-center 2xl:grid-cols-4">
      <NuxtLink to="/infoPanel/ordersHistory" class="w-full">
        <StatCard
          title="Órteses geradas"
          value="32"
          class="leading-10 hover:drop-shadow hover:bg-slate-50"
        />
      </NuxtLink>
      <StatCard title="Receita" value="R$32,00" class="leading-10" />
      <StatCard title="Gesso salvo" value="32kg" class="leading-10" />
      <NuxtLink to="/infoPanel/materialsHistory/filamento" class="w-full">
        <StatCard
          title="Filamento utilizado"
          value="32kg"
          class="leading-10 hover:drop-shadow hover:bg-slate-50"
        />
      </NuxtLink>
      <NuxtLink to="/infoPanel/materialsHistory/velcro" class="w-full">
        <StatCard
          title="Velcro utilizado"
          value="32m"
          class="leading-10 hover:drop-shadow hover:bg-slate-50"
        />
      </NuxtLink>
      <StatCard title="Tempo de impressão" value="32h" class="leading-10" />
      <NuxtLink to="/infoPanel/usersHistory" class="w-full">
        <StatCard
          title="Usuários ativos"
          value="32"
          class="leading-10 hover:drop-shadow hover:bg-slate-50"
        />
      </NuxtLink>
      <NuxtLink to="/infoPanel" class="w-full">
        <StatCard class="leading-10 hover:drop-shadow hover:bg-slate-50" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});
</script>
