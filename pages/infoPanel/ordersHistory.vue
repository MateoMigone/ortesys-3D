<template>
  <div class="w-[90%] mx-auto flex flex-col gap-6">
    <!-- Show text banner if stats are from a selected user  -->
    <TextBanner v-if="user" title="Paulo Tavares" subtitle="Clinica" />

    <!-- Date filter button -->
    <DropdownButton :options="options" type="date" />

    <div class="flex flex-col gap-5 max-h-[65vh] overflow-y-auto">
      <!-- Show all the ortesys info cards with v-for -->
      <!-- OrtesysInfoCard should receive an object with all the stats to be shown in it -->
      <OrtesysInfoCard text="Total" />
      <OrtesysInfoCard text="Punho" />
      <OrtesysInfoCard text="Tornozelo" />
      <OrtesysInfoCard text="Braço" />
      <OrtesysInfoCard text="Polegar" />
      <OrtesysInfoCard text="Cotovelo" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

// SHOULD GET ALL THE GENERATED ORTESYS INFO FROM THE API

const user = ref(false);

const options = ["Esse mês", "Esse ano", "Total"];
</script>

<style lang="scss" scoped></style>
