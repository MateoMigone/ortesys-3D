<template>
  <div class="flex justify-center bg-[#f4f4f4] min-h-[100vh] py-10">
    <div class="flex flex-col items-center justify-center gap-10">
      <div
        class="flex items-center justify-center bg-[#ffff] w-[400px] h-[100px] rounded-2xl"
      >
        <NuxtLink to="/infoPanel/usersHistory">
          <Button text="Voltar" color="red" class="w-[214px] h-[40px]" />
        </NuxtLink>
      </div>
      <UserForm submitAction="update" />
      <Footer class="w-full" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});
</script>

<style lang="scss" scoped></style>
