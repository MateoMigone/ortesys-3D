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
          <NuxtLink to="/infoPanel/createUser">
            <Button
              text="Adicionar novo usuário"
              color="green"
              class="w-[250px]"
            />
          </NuxtLink>
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
      <div v-if="clinicUser === ''" class="flex flex-col gap-5">
        <OrtesysInfoCard text="Total" />
        <OrtesysInfoCard
          text="Paulo"
          type="user"
          :clinicUser="clinicUser"
          :setClinicUser="setClinicUser"
        />
        <OrtesysInfoCard
          text="Santi"
          type="user"
          :clinicUser="clinicUser"
          :setClinicUser="setClinicUser"
        />
        <OrtesysInfoCard
          text="Pedro"
          type="user"
          :clinicUser="clinicUser"
          :setClinicUser="setClinicUser"
        />
      </div>

      <div v-else class="flex flex-col gap-5">
        <OrtesysInfoCard text="Total" />
        <OrtesysInfoCard
          :text="clinicUser"
          type="user"
          :clinicUser="clinicUser"
          :setClinicUser="setClinicUser"
        />
        <OrtesysInfoCard text="Rick" type="user" />
        <OrtesysInfoCard text="Monstro" type="user" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});

const clinicUser = ref("");

const setClinicUser = (name) => {
  clinicUser.value = name;
};
</script>

<style scoped></style>
