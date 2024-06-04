<template>
  <div class="w-[90%] mx-auto flex flex-col gap-6">
    <div class="flex flex-col gap-5">
      <div class="grid grid-cols-2 place-items-center gap-6 2xl:gap-12">
        <!-- Page title -->
        <h2
          class="bg-white text-[#2d5893] text-4xl font-bold w-full py-7 text-center rounded-2xl"
        >
          Usuários
        </h2>

        <!-- Open add new user button -->
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

      <!-- General users stat cards -->
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
      <div class="flex flex-col gap-3">
        <!-- Return button -->
        <Button
          v-if="clinicUser"
          text="Voltar"
          color="red"
          class="w-[200px] h-[40px]"
          @click.stop="setClinicUser('')"
        />
        <!-- Date filter button -->
        <div class="flex gap-6">
          <DropdownButton :options="options" type="date" />
          <DropdownButton :options="options" type="date" />
          <DropdownButton :options="options" type="date" />
          <DropdownButton :options="options" type="date" />
        </div>
      </div>
      <!-- Show clinic user and sub-users if a clinic user is selected -->
      <div
        v-if="clinicUser === ''"
        class="flex flex-col gap-5 max-h-[60vh] overflow-y-auto"
      >
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

      <!-- Show all clinic users if no clinic user is selected -->
      <div v-else class="flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
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
// SHOULD GET ALL USERS AND USER STATS FROM THE API

const clinicUser = ref("");

const options = ["Esse mês", "Esse ano", "Total"];

const setClinicUser = (name) => {
  clinicUser.value = name;
};
</script>

<style scoped></style>
