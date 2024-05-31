<template>
  <TextBanner title="Selecione a versão da órteses desejada" />
  <div class="flex">
    <div class="w-1/2 bg-white p-12 rounded-xl">
      <!-- Available versions  -->
      <div class="w-[170px] flex flex-col gap-3">
        <!-- SHOULD USE A V-FOR TO SHOW ALL THE VERSIONS AVAILABLE -->
        <Button
          text="Punho"
          color="purple"
          @click="setSelectedVersion('Punho')"
        />
        <Button
          text="Punho Inferior"
          color="purple"
          @click="setSelectedVersion('Punho inferior')"
        />
        <Button
          text="Punho Completo"
          color="purple"
          @click="setSelectedVersion('Punho completo')"
        />
      </div>
    </div>

    <!-- Selected ortesys image -->
    <div class="w-1/2 flex flex-col justify-center items-center gap-5 h-[55vh]">
      <img
        class="h-[90%] mt-10"
        src="~/assets/imgs/ortesys-arm-shadow.png"
        alt="Ortesys Arm"
      />
    </div>
  </div>
</template>

<script setup>
const { setSelectedVersion } = defineProps(["setSelectedVersion"]);
// SHOULD RECEIVE THE AVAILABLE VERSIONS OF THE SELECTED ORTESYS
// SHOULD RECEIVE THE SELECTED ORTESYS IMAGE
</script>
