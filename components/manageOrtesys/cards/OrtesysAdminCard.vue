<template>
  <div
    class="bg-white shadow-sm rounded-2xl flex justify-center items-center gap-8 w-full h-[280px] p-8"
  >
    <img
      src="~/assets/imgs/ortesys-arm.png"
      alt="Ortesys Arm"
      class="w-[91px] h-[214px]"
    />
    <div class="flex flex-col gap-2">
      <h2 class="text-[#131e41] font-bold text-[34px] mb-2 leading-9">
        {{ text }}
      </h2>
      <div class="flex flex-col justify-start gap-3 w-[175px]">
        <Button text="Editar" @click="goToOrtesysUpdate" />
        <Button text="Remover" color="red" />
        <Button text="Controle de acesso" color="yellow" @click="openModal" />
      </div>
    </div>

    <AccessControlModal :openRequest="showModal" :toggleModal="openModal" />
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);

const router = useRouter();
const ortesysId = ref(1);
const showModal = ref(false);

const openModal = () => (showModal.value = !showModal.value);

const goToOrtesysUpdate = () => {
  router.push("/manageOrtesys/updateOrtesys/" + ortesysId.value);
};
</script>
