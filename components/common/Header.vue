<template>
  <header
    class="z-30 sticky top-5 bg-white py-4 px-8 w-[90%] mx-auto rounded-2xl flex justify-between gap-3"
  >
    <!-- Search bar -->
    <div class="flex items-center gap-6 2xl:gap-10">
      <div class="flex rounded-full bg-[#f4f4f4]">
        <div class="rounded-full bg-[#f4f4f4] px-2 flex">
          <svg
            class="w-[20px] cursor-pointer"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.43609 3.5C7.43609 5.15744 6.09431 6.5 4.44045 6.5C2.7866 6.5 1.44482 5.15744 1.44482 3.5C1.44482 1.84256 2.7866 0.5 4.44045 0.5C6.09431 0.5 7.43609 1.84256 7.43609 3.5Z"
              fill="#F4F4F4"
              stroke="#2D5893"
            />
            <path
              d="M6.9375 6L9.93375 9"
              stroke="#2D5893"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <input
          type="text"
          class="pl-3 pr-4 py-2 rounded-full bg-[#f4f4f4] focus:outline-none placeholder:text-sm placeholder:text-[#2d5893] text-[#2d5893] text-sm font-medium 2xl:mr-[45px]"
          placeholder="Pesquisar"
        />
      </div>
      <NuxtLink to="/newOrtesys"
        ><h5 class="text-[#2d5893] font-semibold">Membro Superior</h5></NuxtLink
      >
      <NuxtLink to="/newOrtesys"
        ><h5 class="text-[#2d5893] font-semibold">Membro Inferior</h5></NuxtLink
      >
    </div>

    <!-- Menu items -->
    <div class="flex items-center gap-2">
      <!-- <div
        class="bg-[#2d5893] rounded-md w-[34px] h-[34px] flex items-center justify-center"
      >
        <svg
          width="15"
          height="18"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.73665 1.75V14.25L6.11911 10.071C6.60126 9.61125 7.35893 9.61125 7.84109 10.071L12.2235 14.25V1.75H1.73665ZM0.238525 1.5C0.238525 0.809644 0.797471 0.25 1.48697 0.25H12.4732C13.1627 0.25 13.7217 0.809645 13.7217 1.5V14.8333C13.7217 15.9323 12.4071 16.4964 11.6122 15.7385L6.9801 11.3214L2.34796 15.7385C1.55313 16.4964 0.238525 15.9323 0.238525 14.8333V1.5Z"
            fill="white"
          />
        </svg>
      </div> -->

      <div
        class="bg-[#2d5893] rounded-md w-[34px] h-[34px] flex items-center justify-center"
      >
        <svg
          width="15"
          height="17"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.42453 15C5.51267 15 4.77659 14.2269 4.77659 13.2692H8.07247C8.07247 14.2269 7.33639 15 6.42453 15ZM11.9177 12.1154H0.931396V10.9615L2.03002 9.80769V6.79615C2.03002 4.35 3.16161 2.27308 5.3259 1.73077V1.15385C5.3259 0.496154 5.79831 0 6.42453 0C7.05075 0 7.52316 0.496154 7.52316 1.15385V1.73077C9.68745 2.27308 10.819 4.36154 10.819 6.79615V9.80769L11.9177 10.9615V12.1154Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        class="bg-[#2d5893] rounded-md w-[34px] h-[34px] flex items-center justify-center"
      >
        <svg
          width="21"
          height="23"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.24595 11.3333H8.66085V9.91667H7.24595V11.3333ZM7.9534 0C4.04828 0 0.878906 3.17333 0.878906 7.08333C0.878906 10.9933 4.04828 14.1667 7.9534 14.1667C11.8585 14.1667 15.0279 10.9933 15.0279 7.08333C15.0279 3.17333 11.8585 0 7.9534 0ZM7.9534 12.75C4.83355 12.75 2.2938 10.2071 2.2938 7.08333C2.2938 3.95958 4.83355 1.41667 7.9534 1.41667C11.0732 1.41667 13.613 3.95958 13.613 7.08333C13.613 10.2071 11.0732 12.75 7.9534 12.75ZM7.9534 2.83333C6.38993 2.83333 5.1236 4.10125 5.1236 5.66667H6.5385C6.5385 4.8875 7.1752 4.25 7.9534 4.25C8.73159 4.25 9.36829 4.8875 9.36829 5.66667C9.36829 7.08333 7.24595 6.90625 7.24595 9.20833H8.66085C8.66085 7.61458 10.7832 7.4375 10.7832 5.66667C10.7832 4.10125 9.51686 2.83333 7.9534 2.83333Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </header>
</template>
