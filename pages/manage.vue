<template>
  <div class="w-[90%] mx-auto flex flex-col gap-5">
    <!-- Filter by date button -->
    <DropdownButton class="self-end" :options="options" type="date" />

    <!-- Generated ortesys  -->
    <div class="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
      <!-- Show all the generated ortesys from this user -->
      <!-- Apply date filters -->
      <OrderCard filesQty="2" />
      <OrderCard filesQty="2" />
      <OrderCard filesQty="2" />
      <OrderCard filesQty="2" />
      <OrderCard filesQty="2" />
      <OrderCard filesQty="2" />
      <OrderCard filesQty="2" />
      <OrderCard filesQty="2" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  /* middleware: "auth", */
});

// SHOULD GET ALL THE GENERATED ORTESYS HISTORY OF THE USER FROM THE API

const options = ["Esse mês", "Esse ano", "Total"];
</script>
