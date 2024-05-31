<template>
  <div
    class="rounded-xl shadow-sm flex items-center justify-between bg-white w-full p-5 2xl:p-10"
    :class="type === 'materialProfile' && 'p-10'"
  >
    <!-- Config card title -->
    <h3 class="text-2xl font-bold">{{ text }}</h3>
    <div
      :class="
        type === 'materialProfile'
          ? 'flex gap-2.5 mr-0'
          : 'grid grid-cols-2 gap-4 ml-auto mr-5 2xl:flex 2xl:gap-2.5 2xl:mr-0'
      "
    >
      <div
        :class="
          type === 'materialProfile'
            ? 'flex flex-row gap-2.5'
            : 'flex flex-col gap-2 2xl:flex-row 2xl:gap-2.5'
        "
      >
        <!-- Update button -->
        <NuxtLink :to="type === 'printer' && '/managePrinter/updatePrinter/id'">
          <Button text="Editar" class="w-[165px] 2xl:w-[130px]" />
        </NuxtLink>

        <!-- Remove button -->
        <Button
          text="Remover"
          color="red"
          class="w-[165px] 2xl:w-[130px]"
          @click="openConfirmRemoveModal"
        />
      </div>

      <div
        :class="
          type === 'materialProfile'
            ? 'flex flex-row gap-2.5'
            : 'flex flex-col gap-2 2xl:flex-row 2xl:gap-2.5'
        "
      >
        <NuxtLink to="/managePrinter/materialProfiles">
          <!-- Open printer´s material profiles (if config card is type printer) -->
          <Button
            v-if="type === 'printer'"
            text="Perfis/materiais"
            color="secondary"
            class="w-[165px]"
          />
        </NuxtLink>

        <!-- Open access control button -->
        <Button
          text="Controle de acesso"
          color="yellow"
          class="w-[165px]"
          @click.stop="openAccessControlModal"
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
const { text, type } = defineProps(["text", "type"]);
// SHOULD RECEIVE SELECTED PRINTER/MATERIAL PROFILE

const showAccessControlModal = ref(false);
const showConfirmRemoveModal = ref(false);

const openAccessControlModal = () => {
  showAccessControlModal.value = !showAccessControlModal.value;
};

const openConfirmRemoveModal = () => {
  showConfirmRemoveModal.value = !showConfirmRemoveModal.value;
};
</script>
