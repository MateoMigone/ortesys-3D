<template>
  <div class="relative flex justify-center items-center">
    <select
      name="dateFilter"
      id="dateFilter"
      class="appearance-none w-[220px] text-center text-sm font-bold text-[#2d5893] py-2.5 rounded-2xl"
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
</template>
