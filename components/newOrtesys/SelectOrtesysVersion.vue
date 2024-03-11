<template>
  <TextBanner title="Selecione a versão da órteses desejada" />
  <div class="flex">
    <div class="w-1/2 bg-white p-12 rounded-xl">
      <div class="w-[170px] flex flex-col gap-3">
        <Button text="Punho" color="purple" />
        <Button text="Punho Inferior" color="purple" />
        <Button text="Punho Completo" color="purple" />
      </div>
    </div>
    <div class="w-1/2 flex flex-col justify-center items-center gap-5 h-[55vh]">
      <img
        class="h-[90%] mt-10"
        src="../../assets/imgs/ortesys-arm-shadow.png"
        alt="Ortesys Arm"
      />
    </div>
  </div>
</template>

<script setup></script>
