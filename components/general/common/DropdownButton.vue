<template>
  <!-- REDESIGN DATE FILTER BUTTON -->
  <div
    class="toggle relative flex justify-center items-center cursor-pointer select-none h-full"
    :class="type === 'date' && 'w-[220px] bg-white rounded-2xl py-2.5'"
    @click="toggle"
  >
    <!-- Select user role button -->
    <span
      v-if="type === 'userRole'"
      class="flex items-center justify-center w-[100px] h-[44px] py-1.5 px-3 text-[#2FB7A0] bg-[#2FB7A0] bg-opacity-[0.15] text-center text-base font-medium leading-4 rounded-md shadow-sm toggle hover:text-white hover:bg-[#2FB7A0] hover:bg-opacity-1"
      >{{ actualRole }}</span
    >
    <!-- Select date filter button -->
    <span
      v-if="type === 'date'"
      class="text-[#2D5893] text-sm text-center font-bold truncate w-[65%] pl-1.5 toggle"
      >{{ selectedOption || "Seleccione" }}</span
    >

    <!-- Options dropdown list -->
    <ul
      v-show="isOpen"
      class="absolute top-[50px] w-full apply-shadow bg-white p-3 rounded-lg text-[#5C6AC4] z-10"
      :class="type === 'userRole' && 'top-[0px] right-[-210px] min-w-[200px]'"
      v-on-click-outside="closeDropdown"
    >
      <!-- Show all options with v-for -->
      <li
        v-for="(item, index) in options"
        :key="index"
        class="py-1 font-medium"
        @click="setSelectedOption(item)"
      >
        {{ item }}
      </li>
    </ul>
    <!-- Left icon for date filter button -->
    <div v-if="type === 'date'" class="absolute left-5 toggle">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="toggle"
      >
        <path
          d="M4.66667 7.88238H7.33333V6.58826H4.66667V7.88238ZM0 0.117676V1.41179H12V0.117676H0ZM2 4.64709H10V3.35297H2V4.64709Z"
          fill="#2D5893"
          class="toggle"
        />
      </svg>
    </div>
    <!-- Right icon for date filter button -->
    <div v-if="type === 'date'" class="absolute right-5 toggle">
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="toggle"
      >
        <path
          d="M7.06667 8.6639L4 11.6079L0.933333 8.6639L-1.67852e-07 9.5599L4 13.3999L8 9.5599L7.06667 8.6639ZM7.06667 5.3359L4 2.3919L0.933333 5.3359L-3.91654e-07 4.4399L4 0.599904L8 4.4399L7.06667 5.3359Z"
          fill="#2D5893"
          class="toggle"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { vOnClickOutside } from "@vueuse/components";

const { options, type } = defineProps(["options", "type"]);

const isOpen = ref(false);
const selectedOption = ref("");
const actualRole = ref("Clinica");

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (event) => {
  if (!event.target.classList.contains("toggle")) {
    isOpen.value = false;
  }
};

const setSelectedOption = (option) => {
  // SHOULD UPDATE THE USER ROLE WITH A POST TO THE API IF TYPE "USER ROLE"
  if (type === "userRole") {
    actualRole.value = option;
  }

  // SHOULD FILTER THE RESULTS WITH SELECTED VALUE
  if (type === "date") {
    selectedOption.value = option;
  }
};
</script>

<style>
.apply-shadow {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>
