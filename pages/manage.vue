<template>
  <div class="w-[90%] mx-auto flex flex-col gap-5">
    <DateFilterButton class="self-end" />
    <div class="flex flex-col gap-4">
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
});
</script>
