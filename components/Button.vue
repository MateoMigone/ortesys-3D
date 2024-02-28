<template>
  <div>
    <button
      class="flex w-full justify-center rounded-md px-3 py-1.5 text-base font-medium shadow-sm"
      :class="color || 'default'"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
const { text, color } = defineProps(["text", "color"]);
</script>

<style scoped>
.default {
  color: rgba(92, 106, 196, 1);
  background-color: rgba(92, 106, 196, 0.15);
}

.default:hover {
  color: white;
  background-color: rgba(92, 106, 196, 1);
}

.red {
  color: rgba(196, 92, 92, 1);

  background-color: rgba(196, 92, 92, 0.15);
}

.red:hover {
  color: white;
  background-color: rgba(196, 92, 92, 1);
}

.yellow {
  color: rgba(230, 175, 35, 1);

  background-color: rgba(230, 175, 35, 0.15);
}

.yellow:hover {
  color: white;
  background-color: rgba(230, 175, 35, 1);
}

.green {
  color: rgba(92, 196, 109, 1);
  background-color: rgba(92, 196, 109, 0.15);
}

.green:hover {
  color: white;
  background-color: rgba(92, 196, 109, 1);
}
</style>
