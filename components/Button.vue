<template>
  <button
    :class="[
      'flex w-[165px] h-[40px] justify-center rounded-md px-3 py-1.5 text-md font-medium leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors',
      textColorClass,
      bgColorClass,
      hoverTextColorClass,
      hoverBgColorClass,
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup>
const { text, color } = defineProps({
  text: String,
  color: String,
});

const colorMap = {
  blue: {
    text: "text-blue-700",
    bg: "bg-blue-100",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-blue-500",
  },
  red: {
    text: "text-red-700",
    bg: "bg-red-100",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-red-500",
  },
  yellow: {
    text: "text-yellow-700",
    bg: "bg-yellow-100",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-yellow-500",
  },
  // Add other colors as needed
};

const textColorClass = colorMap[color]?.text || "text-gray-700";
const bgColorClass = colorMap[color]?.bg || "bg-gray-100";
const hoverTextColorClass = colorMap[color]?.hoverText || "";
const hoverBgColorClass = colorMap[color]?.hoverBg || "";
</script>
