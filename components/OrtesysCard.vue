<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden"
    style="width: 392px; height: 303px"
  >
    <!-- Flex container for image and content, centered horizontally and vertically -->
    <div class="flex items-center justify-center h-full px-6">
      <!-- Added padding to the left and right of the card -->
      <!-- Image on the left, adjusted size and removed additional margin -->
      <img
        class="object-cover rounded-l-lg h-56 flex-shrink-0"
        src="../assets/imgs/ortesys-arm.png"
        alt="Ortesys Arm"
      />
      <!-- Spacer div to control the space between the image and the text/button flexbox -->
      <div class="w-4"></div>
      <!-- Adjust this width to control spacing -->
      <!-- Flexbox container for text and button, centered in the remaining space -->
      <div class="flex flex-col justify-center flex-grow p-4">
        <div>
          <h2 class="text-2xl font-bold text-[#131E41]">Punho</h2>
          <p class="text-[#131E41] mt-2">
            Destinada a fraturas e entorses com ruptura de ligamentos do colo
            metacarpiano.
          </p>
        </div>
        <!-- Button at the bottom of the flex container -->
        <div class="w-40 h-10 mt-4">
          <!-- Adjusted margin-top for spacing above the button -->
          <Button text="Personalizar" class="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import your Button component if needed
</script>

<style scoped>
/* Scoped styles for image border radius */
.rounded-l-lg {
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}
</style>
