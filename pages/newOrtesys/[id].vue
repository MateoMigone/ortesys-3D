<template>
  <div class="w-[90%] mx-auto">
    <OrtesysGenerator
      v-if="selectedVersion"
      :setSelectedVersion="setSelectedVersion"
    />
    <SelectOrtesysVersion v-else :setSelectedVersion="setSelectedVersion" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  middleware: "auth",
});

const selectedVersion = ref("");

const setSelectedVersion = (version) => {
  selectedVersion.value = version;
};
</script>

<style scoped></style>
