<template>
  <div
    class="rounded-xl shadow-sm flex items-center justify-between bg-white w-full p-5 2xl:p-10"
    :class="type === 'materialProfile' && 'p-10'"
  >
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
        <NuxtLink :to="type === 'printer' && '/managePrinter/updatePrinter'">
          <Button text="Editar" class="w-[165px] 2xl:w-[130px]" />
        </NuxtLink>
        <Button text="Remover" color="red" class="w-[165px] 2xl:w-[130px]" />
      </div>
      <div
        :class="
          type === 'materialProfile'
            ? 'flex flex-row gap-2.5'
            : 'flex flex-col gap-2 2xl:flex-row 2xl:gap-2.5'
        "
      >
        <NuxtLink to="/managePrinter/materialProfiles">
          <Button
            v-if="type === 'printer'"
            text="Perfis/materiais"
            color="secondary"
            class="w-[165px]"
          />
        </NuxtLink>
        <Button
          text="Controle de acesso"
          color="yellow"
          class="w-[165px]"
          @click.stop="openModal"
        />
      </div>
    </div>
    <AccessControlModal :openRequest="showModal" :toggleModal="openModal" />
  </div>
</template>

<script setup>
const { text, type } = defineProps(["text", "type"]);
const showModal = ref(false);

const openModal = () => {
  showModal.value = !showModal.value;
};
</script>
