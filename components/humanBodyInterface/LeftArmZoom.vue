<template>
  <!-- Background opacity (hover) -->
  <div class="fixed inset-0 bg-black bg-opacity-40 z-10"></div>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 z-20"
    v-show="
      armActive ||
      shoulderActive ||
      forearmActive ||
      handActive ||
      thumbActive ||
      indexFingerActive ||
      middleFingerActive ||
      ringFingerActive ||
      littleFingerActive
    "
  ></div>

  <div class="relative overflow-hidden w-full h-[500px]">
    <!-- Complete body zoomed -->
    <img
      src="../../assets/imgs/humanBody/blue/completeBody.svg"
      alt=""
      class="h-[1200px] absolute left-[-200px] top-[-150px] z-10"
    />
  </div>

  <!-- Left arm -->
  <div
    class="absolute top-[160px] left-[420px] z-20 flex flex-row-reverse items-center"
    v-show="armActive"
  >
    <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
      <p class="font-extrabold text-2xl">Braço</p>
      <p class="leading-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <hr class="border-[1.5px] border-white w-[60px]" />
    <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
  </div>
  <div>
    <NuxtLink to="/newOrtesys">
      <svg
        viewBox="0 0 231 344"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-[294px] absolute top-[45px] left-[250px] pointer-events-none z-10"
        :class="armActive && 'z-20'"
      >
        <path
          d="M25.0659 106.799C31.6259 125.879 44.9759 146.539 47.9859 149.549C47.9859 149.549 57.7259 171.569 59.7759 173.619C59.7759 173.619 89.4959 215.619 103.846 223.819C114.556 229.939 133.816 252.589 142.906 263.689L142.796 263.769C142.796 263.769 143.946 265.039 145.126 266.409C146.246 267.799 147.066 268.829 147.516 269.389C147.566 269.469 147.616 269.539 147.646 269.619C148.266 270.799 152.316 275.349 152.466 279.409C152.606 283.479 157.206 293.609 159.306 297.979C161.406 302.359 163.726 306.009 164.356 308.099C164.996 310.189 166.356 316.389 166.676 318.329C167.006 320.279 168.346 325.509 168.556 327.079C168.766 328.649 170.726 340.659 175.316 340.439C179.906 340.199 176.946 327.879 176.456 325.639C175.956 323.399 175.506 317.669 175.336 316.949C175.196 316.289 174.536 310.259 174.626 309.029L174.796 308.759C175.266 308.689 176.736 309.119 176.966 309.439C177.236 309.789 182.436 320.679 183.146 322.299C183.856 323.919 188.706 331.669 189.196 332.619C189.686 333.559 195.436 345.609 200.086 342.869C204.746 340.149 197.506 330.939 196.346 328.939C195.186 326.939 191.336 318.649 190.966 317.709C190.596 316.769 187.616 309.779 187.686 309.339C187.746 308.889 188.306 308.989 188.676 309.269C189.046 309.539 195.646 320.529 196.356 321.479C197.066 322.419 202.866 331.569 203.256 332.079C203.646 332.589 208.756 344.769 213.496 341.229C218.226 337.689 211.576 329.219 210.336 327.109C209.096 324.999 204.746 318.019 203.506 316.039C202.276 314.049 196.706 305.789 197.176 305.059C197.636 304.329 198.496 303.439 199.096 302.999C199.686 302.559 200.846 302.579 201.126 302.959C201.416 303.339 206.586 307.429 208.876 309.589C211.176 311.749 215.916 315.829 216.626 316.769C217.336 317.709 225.376 328.509 229.466 324.729C233.556 320.949 223.586 311.259 222.666 310.019C221.736 308.779 217.046 302.809 215.146 301.109H215.086C213.176 299.409 206.856 293.609 205.646 292.279C204.436 290.949 197.786 281.899 198.116 279.589C198.446 277.269 198.566 275.799 199.046 275.269C199.526 274.739 201.186 273.579 203.176 273.869C205.166 274.159 212.616 277.629 213.276 276.599C214.486 277.379 223.736 275.379 228.846 269.569C233.936 263.769 228.806 262.309 224.366 263.989C219.926 265.669 215.806 264.859 213.836 264.569C211.876 264.289 207.986 263.349 205.136 261.389C202.286 259.439 201.346 257.549 193.766 256.459C186.176 255.369 176.026 252.039 173.146 251.619C171.966 251.449 170.686 250.419 169.596 249.269L169.826 249.099L155.346 228.839C152.986 225.639 150.566 221.899 147.996 218.789L140.096 209.139C137.286 203.639 133.836 197.149 130.706 191.349C127.486 185.429 124.236 179.519 120.746 173.739C118.976 170.879 117.206 167.829 114.846 165.429C108.106 158.269 101.136 149.729 95.0859 142.669C91.2859 133.779 86.2359 120.619 82.6359 111.509C82.6759 111.819 70.2359 79.1392 70.5259 80.4692C71.4459 74.0892 70.9059 67.6592 70.2859 61.2892C69.6159 54.9292 68.6359 48.6192 67.4359 42.3392C65.7759 37.6992 63.7859 33.1692 61.3059 28.9092C48.7959 7.70917 30.5959 2.10917 7.38588 0.0791703C7.35588 0.0791703 7.32588 0.0791703 7.28588 0.0691703C2.88588 -0.57083 -0.814121 3.32917 0.155879 7.67917C5.20588 30.3092 17.8859 85.8992 25.0659 106.799ZM146.586 268.199C146.896 268.579 147.146 268.919 147.336 269.189L146.586 268.199Z"
          :fill="armColor"
          @mouseover="changeArmToGreen"
          @mouseleave="changeArmToBlue"
          class="cursor-pointer pointer-events-auto"
        />
      </svg>
    </NuxtLink>
  </div>

  <div>
    <!-- Left shoulder -->
    <div
      class="absolute top-[40px] left-[370px] z-20 flex flex-row-reverse items-center"
      v-show="shoulderActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Ombro</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 80 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[104.5px] absolute top-[40px] left-[236px] pointer-events-none z-10"
          :class="(shoulderActive || armActive) && 'z-20'"
        >
          <path
            d="M79.3265 82.5529L79.4065 70.1929C79.4065 70.1929 79.3865 64.7929 78.5765 59.0929C77.7665 53.3929 76.2265 44.4629 76.2265 44.4629C76.2265 44.4629 70.3865 28.8529 64.1865 22.6229C57.9865 16.3929 50.3565 9.04293 37.5265 5.82293C24.6965 2.60293 14.9465 2.02293 14.9465 2.02293C14.9465 2.02293 9.10649 0.90293 6.78649 0.0129297C4.46649 -0.87707 -29.3535 82.5529 79.3265 82.5529Z"
            :fill="shoulderColor"
            @mouseover="changeShoulderToGreen"
            @mouseleave="changeShoulderToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Left forearm -->
    <div
      class="absolute top-[235px] left-[450px] z-20 flex flex-row-reverse items-center"
      v-show="forearmActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Antebraço</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 114 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[145.3px] absolute top-[225px] left-[325px] pointer-events-none z-10"
          :class="(forearmActive || armActive) && 'z-20'"
        >
          <path
            d="M113.41 108.97C112.24 108.8 110.96 107.77 109.87 106.63C109.99 106.52 110.09 106.45 110.09 106.45C104.65 99.01 93.63 83.06 88.25 76.13L80.35 66.48C77.54 60.95 74.1 54.49 70.96 48.68C67.74 42.76 64.5 36.85 61 31.07C59.23 28.21 57.47 25.16 55.1 22.76C48.35 15.6 41.38 7.07 35.33 0L3.05176e-05 30.96C3.05176e-05 30.96 29.72 72.96 44.07 81.16C54.78 87.27 74.04 109.92 83.13 121.03L83.01 121.11C83.01 121.11 84.15 122.37 85.34 123.75C86.46 125.14 87.28 126.16 87.73 126.74C87.78 126.82 87.83 126.9 87.86 126.96C88.49 128.13 92.54 132.69 92.68 136.75L113.41 108.97Z"
            :fill="forearmColor"
            @mouseover="changeForearmToGreen"
            @mouseleave="changeForearmToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Left hand -->
    <div
      class="absolute top-[350px] left-[560px] z-20 flex flex-row-reverse items-center"
      v-show="handActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Mão direita</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 82 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[106px] absolute top-[363px] left-[439px] pointer-events-none z-10"
          :class="(handActive || armActive) && 'z-20'"
        >
          <path
            d="M0.752745 18.3661C-0.0774419 19.0732 -0.241434 20.2929 0.36327 21.2051C1.65467 23.1524 3.08957 25.7147 3.17156 28.1028C3.31505 32.1718 7.9067 42.3082 10.0078 46.6846C12.1089 51.0611 14.4252 54.72 15.0607 56.8109C15.6961 58.9017 17.0593 65.1025 17.377 67.0498C17.705 68.9972 19.0476 74.2346 19.2526 75.8027C19.4576 77.3708 21.4254 89.3932 26.0171 89.1677C30.6087 88.9319 27.6467 76.6021 27.1547 74.3575C26.6525 72.113 26.2016 66.3837 26.0376 65.6662C25.8941 65.0103 25.2381 58.9735 25.3304 57.7436L25.5046 57.4771C25.9761 57.4053 27.4417 57.8358 27.6774 58.1535C27.9439 58.502 33.1505 69.3969 33.8577 71.0163C34.5649 72.6357 39.4128 80.3943 39.9048 81.3373C40.3967 82.2802 46.1465 94.3333 50.7997 91.5967C55.4631 88.8704 48.2169 79.6564 47.0587 77.6578C45.9006 75.6592 42.0468 67.3676 41.6779 66.4246C41.3089 65.4817 38.3264 58.4917 38.3981 58.051C38.4596 57.6001 39.0233 57.7026 39.3923 57.9793C39.7613 58.2458 46.3618 69.2432 47.069 70.1964C47.7762 71.1393 53.5772 80.2918 53.9667 80.8043C54.3562 81.3168 59.4705 93.5031 64.2057 89.9569C68.9306 86.4106 62.2891 77.9448 61.0489 75.8334C59.8088 73.7221 55.4631 66.7424 54.2229 64.754C52.993 62.7657 47.4277 54.4946 47.8889 53.7669C48.3501 53.0392 49.2111 52.1475 49.8055 51.7068C50.4 51.266 51.5581 51.2865 51.8349 51.6658C52.1218 52.045 57.2977 56.1344 59.5833 58.297C61.8791 60.4596 66.6245 64.5388 67.3317 65.4817C68.0389 66.4246 76.0845 77.2273 80.174 73.4454C84.2634 69.6634 74.2909 59.9676 73.3685 58.7275C72.4358 57.4873 67.7519 51.512 65.8455 49.8107C63.9392 48.1195 57.6154 42.3185 56.406 40.9861C55.1966 39.6537 48.5449 30.6036 48.8728 28.2873C49.2008 25.971 49.3238 24.4951 49.8055 23.9621C50.2872 23.4292 51.9476 22.271 53.936 22.558C55.9243 22.845 63.3755 26.3194 64.0314 25.2843C65.2408 26.0632 74.4959 24.0646 79.6 18.2533C84.7041 12.442 79.559 10.9866 75.1211 12.6675C70.6832 14.3484 66.563 13.5387 64.5951 13.2517C62.6375 12.975 58.7428 12.032 55.8936 10.0744C53.0443 8.12708 52.1013 6.23098 44.5272 5.14456C38.1316 4.23238 27.2982 1.20886 23.8135 0.101942C23.1063 -0.123541 22.3274 0.0301975 21.7636 0.511911L0.783491 18.3661H0.752745Z"
            :fill="handColor"
            @mouseover="changeHandToGreen"
            @mouseleave="changeHandToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Left thumb -->
    <div
      class="absolute top-[320px] left-[560px] z-20 flex flex-row-reverse items-center"
      v-show="thumbActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Polegar</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[43px] absolute top-[373px] left-[503px] pointer-events-none z-10"
          :class="(thumbActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M0 16.2963C0.481713 15.7633 2.14209 14.6051 4.13043 14.8921C6.11878 15.1791 13.57 18.6536 14.2259 17.6184C15.4353 18.3973 24.6904 16.3988 29.7945 10.5874C34.8986 4.77614 29.7535 3.32075 25.3156 5.00162C20.8777 6.68249 16.7575 5.8728 14.7896 5.58582C12.832 5.3091 8.93732 4.36617 6.08804 2.40857C4.86838 1.57838 4.00745 0.758442 2.81854 0L0 16.286V16.2963Z"
            :fill="thumbColor"
            @mouseover="changeThumbToGreen"
            @mouseleave="changeThumbToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Left index finger -->
    <div
      class="absolute top-[400px] left-[554px] z-20 flex flex-row-reverse items-center"
      v-show="indexFingerActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Indicador</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 30 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[39.2px] absolute top-[417px] left-[506px] pointer-events-none z-10"
          :class="(indexFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M0 10.0585C0.286978 10.4378 5.46283 14.5272 7.74841 16.6898C10.0442 18.8524 14.7896 22.9316 15.4968 23.8745C16.204 24.8174 24.2497 35.6201 28.3391 31.8381C32.4285 28.0562 22.4561 18.3604 21.5336 17.1202C20.6009 15.8801 15.917 9.9048 14.0107 8.20343C12.3913 6.75829 7.54343 2.32038 5.40134 0.229535C4.99137 -0.170184 4.31493 -0.0266968 4.08944 0.496013L0 10.0585Z"
            :fill="indexFingerColor"
            @mouseover="changeIndexFingerToGreen"
            @mouseleave="changeIndexFingerToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Left middle finger -->
    <div
      class="absolute top-[425px] left-[530px] z-20 flex flex-row-reverse items-center"
      v-show="middleFingerActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Meio</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 27 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[35px] absolute top-[433px] left-[490px] pointer-events-none z-10"
          :class="(middleFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M0 4.21243C0.368972 4.47891 6.96948 15.4763 7.67667 16.4295C8.38387 17.3724 14.1849 26.525 14.5744 27.0374C14.9639 27.5499 20.0782 39.7362 24.8134 36.19C29.5383 32.6438 22.8968 24.1779 21.6566 22.0666C20.4165 19.9552 16.0708 12.9755 14.8306 10.9872C13.6007 8.99882 8.03538 0.727695 8.4966 0L0.0102436 4.21243H0Z"
            :fill="middleFingerColor"
            @mouseover="changeMiddleFingerToGreen"
            @mouseleave="changeMiddleFingerToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Left ring finger -->
    <div
      class="absolute top-[435px] left-[505px] z-20 flex flex-row-reverse items-center"
      v-show="ringFingerActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Anelar</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 25 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[33.3px] absolute top-[438px] left-[474px] pointer-events-none z-10"
          :class="(ringFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M0 0.102495C0.26648 0.450968 5.47308 11.3459 6.18028 12.9653C6.88747 14.5846 11.7354 22.3433 12.2273 23.2862C12.7193 24.2292 18.4691 36.2822 23.1222 33.5457C27.7856 30.8194 20.5394 21.6054 19.3813 19.6068C18.2231 17.6082 14.3694 9.31654 14.0004 8.37361C13.6315 7.43068 10.6489 0.440716 10.7207 0L0 0.102495Z"
            :fill="ringFingerColor"
            @mouseover="changeRingFingerToGreen"
            @mouseleave="changeRingFingerToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Left little finger -->
    <div
      class="absolute top-[432px] left-[472px] z-20 flex flex-row-reverse items-center"
      v-show="littleFingerActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Mindinho</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <svg
          viewBox="0 0 14 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[18.9px] absolute top-[436px] left-[458px] pointer-events-none z-10"
          :class="(littleFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M0 0C0.635452 2.09084 1.9986 8.29162 2.31633 10.239C2.6443 12.1863 3.98695 17.4237 4.19194 18.9918C4.39692 20.5599 6.36477 32.5823 10.9564 32.3568C15.5481 32.1211 12.586 19.7912 12.0941 17.5467C11.5919 15.3021 11.1409 9.57277 10.9769 8.85533C10.8334 8.19938 10.1775 2.16259 10.2697 0.932679L0 0Z"
            :fill="littleFingerColor"
            @mouseover="changeLittleFingerToGreen"
            @mouseleave="changeLittleFingerToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const shoulderColor = ref("#2D5893");
const shoulderActive = ref(false);

const forearmColor = ref("#2D5893");
const forearmActive = ref(false);

const thumbColor = ref("#2D5893");
const thumbActive = ref(false);

const indexFingerColor = ref("#2D5893");
const indexFingerActive = ref(false);

const middleFingerColor = ref("#2D5893");
const middleFingerActive = ref(false);

const ringFingerColor = ref("#2D5893");
const ringFingerActive = ref(false);

const littleFingerColor = ref("#2D5893");
const littleFingerActive = ref(false);

const handColor = ref("#2D5893");
const handActive = ref(false);

const armColor = ref("#2D5893");
const armActive = ref(false);

const changeShoulderToBlue = () => {
  shoulderColor.value = "#2D5893";
  shoulderActive.value = false;
};

const changeShoulderToGreen = () => {
  shoulderColor.value = "#2FB7A0";
  shoulderActive.value = true;
};

const changeForearmToBlue = () => {
  forearmColor.value = "#2D5893";
  forearmActive.value = false;
};

const changeForearmToGreen = () => {
  forearmColor.value = "#2FB7A0";
  forearmActive.value = true;
};

const changeThumbToBlue = () => {
  thumbColor.value = "#2D5893";
  thumbActive.value = false;
};

const changeThumbToGreen = () => {
  thumbColor.value = "#2FB7A0";
  thumbActive.value = true;
};

const changeIndexFingerToBlue = () => {
  indexFingerColor.value = "#2D5893";
  indexFingerActive.value = false;
};

const changeIndexFingerToGreen = () => {
  indexFingerColor.value = "#2FB7A0";
  indexFingerActive.value = true;
};

const changeMiddleFingerToBlue = () => {
  middleFingerColor.value = "#2D5893";
  middleFingerActive.value = false;
};

const changeMiddleFingerToGreen = () => {
  middleFingerColor.value = "#2FB7A0";
  middleFingerActive.value = true;
};

const changeRingFingerToBlue = () => {
  ringFingerColor.value = "#2D5893";
  ringFingerActive.value = false;
};

const changeRingFingerToGreen = () => {
  ringFingerColor.value = "#2FB7A0";
  ringFingerActive.value = true;
};

const changeLittleFingerToBlue = () => {
  littleFingerColor.value = "#2D5893";
  littleFingerActive.value = false;
};

const changeLittleFingerToGreen = () => {
  littleFingerColor.value = "#2FB7A0";
  littleFingerActive.value = true;
};

const changeHandToBlue = () => {
  thumbColor.value = "#2D5893";
  indexFingerColor.value = "#2D5893";
  middleFingerColor.value = "#2D5893";
  ringFingerColor.value = "#2D5893";
  littleFingerColor.value = "#2D5893";
  handColor.value = "#2D5893";
  handActive.value = false;
};

const changeHandToGreen = () => {
  thumbColor.value = "#2FB7A0";
  indexFingerColor.value = "#2FB7A0";
  middleFingerColor.value = "#2FB7A0";
  ringFingerColor.value = "#2FB7A0";
  littleFingerColor.value = "#2FB7A0";
  handColor.value = "#2FB7A0";
  handActive.value = true;
};

const changeArmToBlue = () => {
  shoulderColor.value = "#2D5893";
  forearmColor.value = "#2D5893";
  thumbColor.value = "#2D5893";
  indexFingerColor.value = "#2D5893";
  middleFingerColor.value = "#2D5893";
  ringFingerColor.value = "#2D5893";
  littleFingerColor.value = "#2D5893";
  handColor.value = "#2D5893";
  armColor.value = "#2D5893";
  armActive.value = false;
};

const changeArmToGreen = () => {
  shoulderColor.value = "#2FB7A0";
  forearmColor.value = "#2FB7A0";
  thumbColor.value = "#2FB7A0";
  indexFingerColor.value = "#2FB7A0";
  middleFingerColor.value = "#2FB7A0";
  ringFingerColor.value = "#2FB7A0";
  littleFingerColor.value = "#2FB7A0";
  handColor.value = "#2FB7A0";
  armColor.value = "#2FB7A0";
  armActive.value = true;
};
</script>

<style scoped></style>
