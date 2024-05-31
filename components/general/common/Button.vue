<template>
  <!-- Prototype button -->
  <button
    class="flex justify-center items-center rounded-md px-3 py-1.5 text-base font-medium shadow-sm"
    :class="color || 'primary'"
  >
    {{ text }}
  </button>
</template>

<script setup>
const { text, color } = defineProps(["text", "color"]);
</script>

<style scoped>
/* Primary color */
.primary {
  color: rgba(45, 88, 147, 1);
  background-color: rgba(45, 88, 147, 0.15);
}

.primary:hover {
  color: white;
  background-color: rgba(45, 88, 147, 1);
}

/* Secondary color */
.secondary {
  color: rgba(47, 183, 160, 1);
  background-color: rgba(47, 183, 160, 0.15);
}

.secondary:hover {
  color: white;
  background-color: rgba(47, 183, 160, 1);
}

/* Secondary dark color */
.secondary-dark {
  color: rgba(47, 183, 160, 1);
  background-color: rgba(47, 183, 160, 0.15);
}

.secondary-dark:hover {
  color: white;
  background-color: rgba(47, 183, 160, 0.4);
}

/* Purple */
.purple {
  color: rgba(92, 106, 196, 1);
  background-color: rgba(92, 106, 196, 0.15);
}

.purple:hover {
  color: white;
  background-color: rgba(92, 106, 196, 1);
}

/* Red */
.red {
  color: rgba(196, 92, 92, 1);

  background-color: rgba(196, 92, 92, 0.15);
}

.red:hover {
  color: white;
  background-color: rgba(196, 92, 92, 1);
}

/* Yellow */
.yellow {
  color: rgba(230, 175, 35, 1);

  background-color: rgba(230, 175, 35, 0.15);
}

.yellow:hover {
  color: white;
  background-color: rgba(230, 175, 35, 1);
}

/* Green */
.green {
  color: rgba(92, 196, 109, 1);
  background-color: rgba(92, 196, 109, 0.15);
}

.green:hover {
  color: white;
  background-color: rgba(92, 196, 109, 1);
}
</style>
