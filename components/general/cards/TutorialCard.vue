<template>
  <div
    class="bg-white flex justify-between items-center shadow rounded-xl p-6 w-full"
  >
    <!-- Play tutorial icon -->
    <div class="flex items-center justify-center w-[80px] [h-80px]">
      <img
        src="~/assets/imgs/playicon.png"
        alt="Play Icon"
        class="w-full h-full"
      />
    </div>

    <!-- Tutorial title -->
    <span class="text-[25px] font-bold"> {{ text }} </span>

    <div class="flex flex-col gap-2">
      <!-- Tutorial link button -->
      <Button text="Tutorial" class="w-[110px]" />

      <!-- Edit tutorial link button -->
      <Button
        v-if="user === 'Admin' || user === 'Gerente'"
        text="Editar link"
        class="w-[110px]"
        @click="openTutorialLinkModal"
      />
    </div>
    <TutorialLinkModal
      :openRequest="showTutorialLinkModal"
      :toggleModal="openTutorialLinkModal"
      :setTutorialLink="setTutorialLink"
    />
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
// SHOULD RECEIVE ALL THE TUTORIALS

const user = ref("Admin");
const tutorialLink = ref("");
const showTutorialLinkModal = ref(false);

const setTutorialLink = (link) => {
  tutorialLink.value = link;
};

const openTutorialLinkModal = () => {
  showTutorialLinkModal.value = !showTutorialLinkModal.value;
};
</script>
