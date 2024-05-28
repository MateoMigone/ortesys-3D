<template>
  <div
    v-show="openRequest"
    class="fixed inset-0 bg-black bg-opacity-40 z-30 flex justify-end items-center"
    @click="closeModal"
  >
    <div
      @click.stop
      class="bg-white w-1/3 flex flex-col justify-center items-center gap-5 py-12 rounded-2xl relative right-[15%]"
    >
      <h3 class="text-2xl font-bold text-[#2D5893]">Impressoras 3D</h3>
      <Button
        text="Manuseio de impressora"
        color="purple"
        class="w-[250px] h-[40px]"
        @click="handleClick"
      />
      <Button
        text="Manutenção de impressora"
        color="purple"
        class="w-[250px] h-[40px]"
        @click="handleClick"
      />
      <Button
        text="Reparos de impressora"
        color="purple"
        class="w-[250px] h-[40px]"
        @click="handleClick"
      />
      <Button
        text="Problemas de impressão"
        color="purple"
        class="w-[250px] h-[40px]"
        @click="handleClick"
      />

      <h3 class="text-2xl font-bold text-[#2D5893]">Outros</h3>
      <Button
        text="Moldagem"
        color="yellow"
        class="w-[250px] h-[40px]"
        @click="handleClick"
      />
      <Button
        text="Software"
        color="yellow"
        class="w-[250px] h-[40px]"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
const { openRequest, toggleModal } = defineProps([
  "openRequest",
  "toggleModal",
]);

const router = useRouter();

const closeModal = () => {
  toggleModal();
};

const handleClick = () => {
  router.push("/tutorialGallery");
  toggleModal();
};
</script>
