<template>
  <div>
    <button
      class="flex w-full justify-center rounded-md px-3 py-1.5 text-md font-medium leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
const { text } = defineProps(["text"]);
</script>

<style scoped>
button {
  background-color: rgba(45, 88, 147, 1);
}

button:hover {
  background-color: #2fb7a0;
}
</style>
