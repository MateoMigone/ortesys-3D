<template>
  <div
    class="flex justify-between items-center bg-white shadow-md rounded-lg p-6 w-800px h-126px"
  >
    <div class="flex items-center justify-center w-80px h-80px">
      <!-- Updated button with shadow effect on hover -->
      <button
        class="w-80px h-80px bg-gray-300 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-outline"
      >
        <img
          src="../assets/imgs/playicon.png"
          alt="Play Icon"
          class="w-full h-full"
        />
      </button>
    </div>
    <div class="flex flex-col justify-center h-full">
      <span
        class="font-archivo text-25px font-bold leading-none text-left text-gray-900 w-227px h-25px"
      >
        Órteses de Polegar
      </span>
    </div>
    <Button text="Tutorial" color="blue" />
  </div>
</template>

<style scoped>
.w-800px {
  width: 800px;
}
.h-126px {
  height: 126px;
}
.w-80px {
  width: 80px;
}
.h-80px {
  height: 80px;
}
.text-25px {
  font-size: 25px;
  line-height: 25px; /* Assuming that the line-height is equal to the font-size for vertical centering */
}
/* Custom shadow utility class for the hover state */
.hover\:shadow-outline:hover {
  box-shadow: 0 0 15px 5px rgba(45, 88, 147, 0.5);
}
</style>
