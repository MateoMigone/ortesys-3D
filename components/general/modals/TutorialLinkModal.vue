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
      <!-- Discount title -->
      <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl text-center"
        >Cole o link do tutorial</label
      >
      <!-- Discount input -->
      <input
        type="text"
        class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 text-center"
        placeholder="Link:"
        v-model="link"
      />
      <!-- Apply changes button -->
      <Button
        text="Salvar"
        color="secondary"
        class="w-[250px] h-[40px]"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
const { openRequest, toggleModal, setTutorialLink, tutorialLink } = defineProps(
  ["openRequest", "toggleModal", "setTutorialLink", "tutorialLink"]
);

const link = ref("");

const closeModal = () => {
  toggleModal();
};

const handleClick = () => {
  setTutorialLink(link.value);
  closeModal();
};
</script>
