<template>
  <!-- Show the form if it wasn´t sent  -->
  <ResetPasswordForm v-if="!formSent" @submit.prevent="submitForm" />
  <!-- If the form was sent show this message component -->
  <ResetPasswordMessage v-else />
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
