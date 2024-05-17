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
      class="h-[1200px] absolute right-[-200px] top-[-150px] z-10"
    />
  </div>

  <!-- Right arm -->
  <div
    class="absolute top-[160px] right-[420px] z-20 flex items-center"
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
        class="w-[296px] absolute top-[42px] right-[248px] pointer-events-none z-10"
        :class="armActive && 'z-20'"
      >
        <path
          d="M205.897 106.803C199.337 125.883 185.987 146.543 182.977 149.553C182.977 149.553 173.237 171.573 171.187 173.623C171.187 173.623 141.467 215.623 127.117 223.823C116.407 229.943 97.1466 252.593 88.0566 263.693L88.1666 263.773C88.1666 263.773 87.0166 265.043 85.8366 266.413C84.7166 267.803 83.8966 268.833 83.4466 269.393C83.3966 269.473 83.3466 269.543 83.3166 269.623C82.6966 270.803 78.6466 275.353 78.4966 279.413C78.3566 283.483 73.7566 293.613 71.6566 297.983C69.5566 302.363 67.2366 306.013 66.6066 308.103C65.9666 310.193 64.6066 316.393 64.2866 318.333C63.9566 320.283 62.6166 325.513 62.4066 327.083C62.1966 328.653 60.2366 340.663 55.6466 340.443C51.0566 340.203 54.0166 327.883 54.5066 325.643C55.0066 323.403 55.4566 317.673 55.6266 316.953C55.7666 316.293 56.4266 310.263 56.3366 309.033L56.1666 308.763C55.6966 308.693 54.2266 309.123 53.9966 309.443C53.7266 309.793 48.5266 320.683 47.8166 322.303C47.1066 323.923 42.2566 331.673 41.7666 332.623C41.2766 333.563 35.5266 345.613 30.8766 342.873C26.2166 340.153 33.4566 330.943 34.6166 328.943C35.7766 326.943 39.6266 318.653 39.9966 317.713C40.3666 316.773 43.3466 309.783 43.2766 309.343C43.2166 308.893 42.6566 308.993 42.2866 309.273C41.9166 309.543 35.3166 320.533 34.6066 321.483C33.8966 322.423 28.0966 331.573 27.7066 332.083C27.3166 332.593 22.2066 344.773 17.4666 341.233C12.7366 337.693 19.3866 329.223 20.6266 327.113C21.8666 325.003 26.2166 318.023 27.4566 316.043C28.6866 314.053 34.2566 305.793 33.7866 305.063C33.3266 304.333 32.4666 303.443 31.8666 303.003C31.2766 302.563 30.1166 302.583 29.8366 302.963C29.5466 303.343 24.3766 307.433 22.0866 309.593C19.7866 311.753 15.0466 315.833 14.3366 316.773C13.6266 317.713 5.58658 328.513 1.49658 324.733C-2.59342 320.953 7.37659 311.263 8.29659 310.023C9.22659 308.783 13.9166 302.813 15.8166 301.113H15.8766C17.7866 299.413 24.1066 293.613 25.3166 292.283C26.5266 290.953 33.1766 281.903 32.8466 279.593C32.5166 277.273 32.3966 275.803 31.9166 275.273C31.4366 274.743 29.7766 273.583 27.7866 273.873C25.7966 274.163 18.3466 277.633 17.6866 276.603C16.4766 277.383 7.22658 275.383 2.11658 269.573C-2.97342 263.773 2.15659 262.313 6.59659 263.993C11.0366 265.673 15.1566 264.863 17.1266 264.573C19.0866 264.293 22.9766 263.353 25.8266 261.393C28.6766 259.443 29.6166 257.553 37.1966 256.463C44.7866 255.373 54.9366 252.043 57.8166 251.623C58.9966 251.453 60.2766 250.423 61.3666 249.273L61.1366 249.103L75.6166 228.843C77.9766 225.643 80.3966 221.903 82.9666 218.793L90.8666 209.143C93.6766 203.643 97.1266 197.153 100.257 191.353C103.477 185.433 106.727 179.523 110.217 173.743C111.987 170.883 113.757 167.833 116.117 165.433C122.857 158.273 129.827 149.733 135.877 142.673C139.677 133.783 144.727 120.623 148.327 111.513C148.287 111.823 160.727 79.143 160.437 80.473C159.517 74.093 160.057 67.663 160.677 61.293C161.347 54.933 162.327 48.623 163.527 42.343C165.187 37.703 167.177 33.173 169.657 28.913C182.167 7.71295 200.367 2.11295 223.577 0.0829545C223.607 0.0829545 223.637 0.0829545 223.677 0.0729545C228.077 -0.567046 231.777 3.33295 230.807 7.68295C225.757 30.313 213.077 85.903 205.897 106.803ZM84.3766 268.203C84.0666 268.583 83.8166 268.923 83.6266 269.193L84.3766 268.203Z"
          :fill="armColor"
          @mouseover="changeArmToGreen"
          @mouseleave="changeArmToBlue"
          class="cursor-pointer pointer-events-auto"
        />
      </svg>
    </NuxtLink>
  </div>

  <div>
    <!-- Right shoulder -->
    <div
      class="absolute top-[40px] right-[370px] z-20 flex items-center"
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
          class="w-[104.5px] absolute top-[40px] right-[235px] pointer-events-none z-10"
          :class="(shoulderActive || armActive) && 'z-20'"
        >
          <path
            d="M0.106672 82.5529L0.0266724 70.1929C0.0266724 70.1929 0.0466723 64.7929 0.856672 59.0929C1.66667 53.3929 3.20667 44.4629 3.20667 44.4629C3.20667 44.4629 9.04667 28.8529 15.2467 22.6229C21.4467 16.3929 29.0767 9.04293 41.9067 5.82293C54.7367 2.60293 64.4867 2.02293 64.4867 2.02293C64.4867 2.02293 70.3267 0.90293 72.6467 0.0129297C74.9667 -0.87707 108.787 82.5529 0.106672 82.5529Z"
            :fill="shoulderColor"
            @mouseover="changeShoulderToGreen"
            @mouseleave="changeShoulderToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right forearm -->
    <div
      class="absolute top-[235px] right-[450px] z-20 flex items-center"
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
          class="w-[145.3px] absolute top-[225px] right-[324px] pointer-events-none z-10"
          :class="(forearmActive || armActive) && 'z-20'"
        >
          <path
            d="M0.0266724 108.973C1.19667 108.803 2.47667 107.773 3.56667 106.633C3.44667 106.523 3.34667 106.453 3.34667 106.453C8.78667 99.0129 19.8067 83.0629 25.1867 76.1329L33.0867 66.4829C35.8967 60.9529 39.3367 54.4929 42.4767 48.6829C45.6967 42.7629 48.9367 36.8529 52.4367 31.0729C54.2067 28.2129 55.9667 25.1629 58.3367 22.7629C65.0867 15.6029 72.0567 7.07293 78.1067 0.00292969L113.437 30.9629C113.437 30.9629 83.7167 72.9629 69.3667 81.1629C58.6567 87.2729 39.3967 109.923 30.3067 121.033L30.4267 121.113C30.4267 121.113 29.2867 122.373 28.0967 123.753C26.9767 125.143 26.1567 126.163 25.7067 126.743C25.6567 126.823 25.6067 126.903 25.5767 126.963C24.9467 128.133 20.8967 132.693 20.7567 136.753L0.0266724 108.973Z"
            :fill="forearmColor"
            @mouseover="changeForearmToGreen"
            @mouseleave="changeForearmToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right hand -->
    <div
      class="absolute top-[350px] right-[560px] z-20 flex items-center"
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
          class="w-[105.4px] absolute top-[364px] right-[439px] pointer-events-none z-10"
          :class="(handActive || armActive) && 'z-20'"
        >
          <path
            d="M80.9966 18.369C81.8268 19.0762 81.9908 20.2958 81.3861 21.208C80.0947 23.1554 78.6598 25.7177 78.5778 28.1057C78.4343 32.1747 73.8426 42.3112 71.7415 46.6876C69.6404 51.064 67.3241 54.723 66.6887 56.8138C66.0532 58.9046 64.6901 65.1054 64.3723 67.0528C64.0444 69.0001 62.7017 74.2375 62.4967 75.8056C62.2918 77.3737 60.3239 89.3961 55.7323 89.1706C51.1406 88.9349 54.1026 76.6051 54.5946 74.3605C55.0968 72.1159 55.5478 66.3866 55.7118 65.6691C55.8552 65.0132 56.5112 58.9764 56.419 57.7465L56.2447 57.48C55.7733 57.4083 54.3076 57.8387 54.0719 58.1565C53.8054 58.5049 48.5988 69.3999 47.8916 71.0192C47.1844 72.6386 42.3365 80.3973 41.8446 81.3402C41.3526 82.2831 35.6028 94.3362 30.9496 91.5997C26.2862 88.8734 33.5324 79.6593 34.6906 77.6607C35.8488 75.6621 39.7025 67.3705 40.0715 66.4276C40.4404 65.4846 43.4229 58.4947 43.3512 58.054C43.2897 57.603 42.726 57.7055 42.357 57.9822C41.9881 58.2487 35.3875 69.2461 34.6804 70.1993C33.9732 71.1422 28.1721 80.2948 27.7826 80.8072C27.3932 81.3197 22.2788 93.506 17.5437 89.9598C12.8188 86.4136 19.4603 77.9477 20.7004 75.8364C21.9406 73.725 26.2862 66.7453 27.5264 64.757C28.7563 62.7686 34.3216 54.4975 33.8604 53.7698C33.3992 53.0421 32.5383 52.1504 31.9438 51.7097C31.3494 51.269 30.1912 51.2895 29.9145 51.6687C29.6275 52.0479 24.4516 56.1374 22.1661 58.2999C19.8702 60.4625 15.1248 64.5417 14.4176 65.4846C13.7105 66.4276 5.66481 77.2303 1.57538 73.4483C-2.51406 69.6663 7.45843 59.9706 8.38086 58.7304C9.31354 57.4903 13.9974 51.515 15.9038 49.8136C17.8101 48.1225 24.1339 42.3214 25.3433 40.989C26.5527 39.6566 33.2045 30.6066 32.8765 28.2902C32.5485 25.9739 32.4255 24.498 31.9438 23.9651C31.4621 23.4321 29.8017 22.2739 27.8134 22.5609C25.825 22.8479 18.3739 26.3224 17.7179 25.2872C16.5085 26.0661 7.25344 24.0675 2.14933 18.2562C-2.95478 12.4449 2.19032 10.9895 6.62823 12.6704C11.0661 14.3513 15.1863 13.5416 17.1542 13.2546C19.1118 12.9779 23.0065 12.035 25.8558 10.0774C28.7051 8.13001 29.648 6.23391 37.2222 5.14749C43.6177 4.23531 54.4511 1.21179 57.9358 0.104872C58.643 -0.120611 59.422 0.0331272 59.9857 0.514841L80.9658 18.369H80.9966Z"
            :fill="handColor"
            @mouseover="changeHandToGreen"
            @mouseleave="changeHandToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right thumb -->
    <div
      class="absolute top-[320px] right-[560px] z-20 flex items-center"
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
          viewBox="0 0 32 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[41.5px] absolute top-[372.5px] right-[503px] pointer-events-none z-10"
          :class="(thumbActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M31.9642 17.0266C31.4825 16.4936 29.8221 15.3355 27.8337 15.6225C25.8454 15.9094 18.3942 19.3839 17.7382 18.3488C16.5288 19.1277 7.27379 17.1291 2.16968 11.3178C-2.93443 5.50648 2.21069 4.05109 6.6486 5.73197C11.0865 7.41284 15.2067 6.60315 17.1745 6.31617C19.1321 6.03944 23.0268 5.09651 25.8761 3.13891C27.0958 2.30873 27.9567 1.48879 29.1456 0.730347L31.9642 17.0164V17.0266Z"
            :fill="thumbColor"
            @mouseover="changeThumbToGreen"
            @mouseleave="changeThumbToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right index finger -->
    <div
      class="absolute top-[400px] right-[554px] z-20 flex items-center"
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
          class="w-[38.7px] absolute top-[417px] right-[505px] pointer-events-none z-10"
          :class="(indexFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M29.3712 10.0582C29.0842 10.4374 23.9084 14.5268 21.6228 16.6894C19.327 18.852 14.5816 22.9312 13.8744 23.8741C13.1672 24.817 5.12155 35.6197 1.03211 31.8378C-3.05733 28.0558 6.91516 18.36 7.83759 17.1199C8.77027 15.8797 13.4542 9.90443 15.3605 8.20306C16.9799 6.75792 21.8278 2.32001 23.9699 0.229169C24.3798 -0.17055 25.0563 -0.027063 25.2818 0.495647L29.3712 10.0582Z"
            :fill="indexFingerColor"
            @mouseover="changeIndexFingerToGreen"
            @mouseleave="changeIndexFingerToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right middle finger -->
    <div
      class="absolute top-[425px] right-[530px] z-20 flex items-center"
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
          viewBox="0 0 28 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[36px] absolute top-[432px] right-[489px] pointer-events-none z-10"
          :class="(middleFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M27.3571 4.95144C26.9881 5.21792 20.3876 16.2153 19.6804 17.1685C18.9732 18.1114 13.1722 27.264 12.7827 27.7765C12.3932 28.2889 7.27886 40.4752 2.54372 36.929C-2.18117 33.3828 4.46032 24.9169 5.70048 22.8056C6.94063 20.6942 11.2863 13.7145 12.5265 11.7262C13.7564 9.73783 19.3217 1.46671 18.8605 0.739014L27.3468 4.95144H27.3571Z"
            :fill="middleFingerColor"
            @mouseover="changeMiddleFingerToGreen"
            @mouseleave="changeMiddleFingerToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right ring finger -->
    <div
      class="absolute top-[435px] right-[505px] z-20 flex items-center"
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
          viewBox="0 0 26 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[33.3px] absolute top-[439px] right-[474px] pointer-events-none z-10"
          :class="(ringFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M25.041 0.15645C24.7746 0.504923 19.568 11.3998 18.8608 13.0192C18.1536 14.6386 13.3057 22.3973 12.8137 23.3402C12.3218 24.2831 6.57195 36.3362 1.9188 33.5997C-2.7446 30.8734 4.50161 21.6593 5.65977 19.6607C6.81794 17.6621 10.6716 9.37049 11.0406 8.42757C11.4096 7.48464 14.3921 0.494672 14.3204 0.0539551L25.041 0.15645Z"
            :fill="ringFingerColor"
            @mouseover="changeRingFingerToGreen"
            @mouseleave="changeRingFingerToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right little finger -->
    <div
      class="absolute top-[432px] right-[472px] z-20 flex items-center"
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
          viewBox="0 0 14 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[18.6px] absolute top-[435px] right-[458px] pointer-events-none z-10"
          :class="(littleFingerActive || handActive || armActive) && 'z-20'"
        >
          <path
            d="M13.6991 0.660034C13.0636 2.75088 11.7005 8.95165 11.3827 10.899C11.0548 12.8464 9.71212 18.0837 9.50713 19.6518C9.30215 21.22 7.3343 33.2423 2.74265 33.0168C-1.84901 32.7811 1.11302 20.4513 1.60498 18.2067C2.10719 15.9621 2.55816 10.2328 2.72215 9.51536C2.86564 8.85941 3.52159 2.82262 3.42934 1.59271L13.6991 0.660034Z"
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
