<template>
  <div class="relative flex justify-center items-center w-[220px]">
    <select
      name="dateFilter"
      id="dateFilter"
      class="appearance-none w-[220px] text-center text-sm font-bold text-[#2d5893] py-2.5 rounded-2xl cursor-pointer"
    >
      <option value="default" disabled selected hidden>Seleccione</option>
      <option value="thisMonth">Esse mês</option>
      <option value="thisYear">Esse ano</option>
      <option value="total">Total</option>
    </select>
    <div class="absolute left-5">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66667 7.88238H7.33333V6.58826H4.66667V7.88238ZM0 0.117676V1.41179H12V0.117676H0ZM2 4.64709H10V3.35297H2V4.64709Z"
          fill="#2D5893"
        />
      </svg>
    </div>
    <div class="absolute right-5">
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.06667 8.6639L4 11.6079L0.933333 8.6639L-1.67852e-07 9.5599L4 13.3999L8 9.5599L7.06667 8.6639ZM7.06667 5.3359L4 2.3919L0.933333 5.3359L-3.91654e-07 4.4399L4 0.599904L8 4.4399L7.06667 5.3359Z"
          fill="#2D5893"
        />
      </svg>
    </div>
  </div>
  <!-- <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggle"
      >
        Options
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg"
      role="menu"
      aria-orientation="vertical"
    >
      <div class="py-1" role="none">
        <a
          href="#"
          class="text-gray-700 block px-4 py-2 text-sm z-11"
          role="menuitem"
          id="menu-item-0"
          >Account settings</a
        >
        <a
          href="#"
          class="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          id="menu-item-1"
          >Support</a
        >
        <a
          href="#"
          class="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          id="menu-item-2"
          >License</a
        >
      </div>
    </div>
  </div> -->
</template>

<script setup>
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
