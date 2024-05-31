<template>
  <div class="w-[90%] mx-auto">
    <!-- If the ortesys version was selected show the ortesys generator form -->
    <OrtesysGenerator
      v-if="selectedVersion"
      :setSelectedVersion="setSelectedVersion"
    />

    <!-- If no ortesys version was selected show the version options -->
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
