<template>
  <div
    class="flex items-center justify-between border-2 border-gray-200 bg-white rounded-lg"
    style="
      width: 800px;
      height: 114.38px;
      border-radius: 16px;
      border: 2px solid #f4f4f4;
      padding: 0 26px;
    "
  >
    <div class="flex items-center gap-2" style="min-width: 139px">
      <span
        class="block w-10 h-10 rounded-full"
        style="background-color: #ff0505"
      ></span>
      <span class="font-archivo font-bold text-20">Vermelho</span>
    </div>
    <div class="flex items-center gap-4">
      <span class="font-archivo font-bold text-25" style="color: #2fb7a0">
        32kg
      </span>
      <span
        class="font-archivo font-bold text-25"
        style="color: #2d5893; width: 121px; height: 25px"
      >
        Utilizado
      </span>
    </div>
    <div class="flex items-center gap-4">
      <span class="font-archivo font-bold text-25" style="color: #2fb7a0">
        32kg
      </span>
      <span
        class="font-archivo font-bold text-25"
        style="color: #2d5893; width: 121px; height: 25px"
      >
        Solicitado
      </span>
    </div>
    <Button color="green" text="Enviar" style="width: 165px; height: 40px" />
  </div>
</template>
