<template>
  <div
    class="bg-white shadow-sm rounded-2xl flex justify-center items-center gap-8 w-full h-[280px] p-8"
  >
    <!-- Ortesys image -->
    <img
      src="~/assets/imgs/ortesys-arm.png"
      alt="Ortesys Arm"
      class="w-[91px] h-[214px]"
    />

    <div class="flex flex-col gap-2">
      <!-- Ortesys title -->
      <h2 class="text-[#131e41] font-bold text-[34px] mb-2 leading-9">
        {{ text }}
      </h2>

      <div class="flex flex-col justify-start gap-3 w-[175px]">
        <!-- Open edit ortesys button -->
        <Button text="Editar" @click="goToOrtesysUpdate" />
        <!-- Remove ortesys button -->
        <Button text="Remover" color="red" @click="openConfirmRemoveModal" />
        <!-- Open access control modal button -->
        <Button
          text="Controle de acesso"
          color="yellow"
          @click="openAccessControlModal"
        />
      </div>
    </div>

    <!-- Access control modal shown if opened -->
    <AccessControlModal
      :openRequest="showAccessControlModal"
      :toggleModal="openAccessControlModal"
    />

    <!-- Confirm remove modal shown if opened -->
    <ConfirmRemoveModal
      :openRequest="showConfirmRemoveModal"
      :toggleModal="openConfirmRemoveModal"
    />
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
// SHOULD RECEIVE SELECTED ORTESYS

const router = useRouter();
const ortesysId = ref(1);
const showAccessControlModal = ref(false);
const showConfirmRemoveModal = ref(false);

const openAccessControlModal = () => {
  showAccessControlModal.value = !showAccessControlModal.value;
};
const openConfirmRemoveModal = () => {
  showConfirmRemoveModal.value = !showConfirmRemoveModal.value;
};

const goToOrtesysUpdate = () => {
  router.push("/manageOrtesys/updateOrtesys/" + ortesysId.value);
};
</script>
