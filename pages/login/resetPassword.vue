<template>
  <reset-password-form v-if="!formSent" @submit.prevent="submitForm" />
  <reset-password-message v-else />
</template>

<script setup>
definePageMeta({
  layout: "loginlayout",
});

const formSent = ref(false);

const submitForm = () => {
  formSent.value = true;
};
</script>
