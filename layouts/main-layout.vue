<template>
  <div class="bg-[#f4f4f4] flex min-h-[100vh]">
    <!-- Sidebar -->
    <div class="w-1/3 mainBackground">
      <Sidebar />
    </div>

    <!-- Main Content -->
    <div class="flex flex-col gap-5 p-5 w-2/3">
      <!-- Header -->
      <Header />

      <!-- Main section -->
      <div class="min-h-[77.5vh]">
        <slot />
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.mainBackground {
  background-image: url("../assets/imgs/background.png");
  background-position-x: left;
  background-position-y: top;
  background-repeat: repeat-y;
  max-width: 100vw;
}
</style>
