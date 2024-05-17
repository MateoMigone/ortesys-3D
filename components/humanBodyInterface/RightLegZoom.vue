<template>
  <!-- Background opacity (hover) -->
  <div class="fixed inset-0 bg-black bg-opacity-40 z-10"></div>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 z-20"
    v-show="legActive || quadricepsActive || ankleActive || footActive"
  ></div>

  <div class="relative overflow-hidden w-full h-[540px]">
    <!-- Complete body zoomed -->
    <img
      src="../../assets/imgs/humanBody/blue/completeBody.svg"
      alt=""
      class="h-[1200px] absolute bottom-0 right-[-180px] z-10"
    />
  </div>

  <!-- Right leg -->
  <div>
    <div
      class="absolute top-[180px] right-[300px] z-20 flex items-center"
      v-show="legActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Perna</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <div class="absolute top-0 left-0 w-full h-[540px] overflow-hidden">
          <svg
            viewBox="0 0 93 478"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[117.3px] absolute bottom-0 right-[189px] pointer-events-none z-10"
            :class="legActive && 'z-20'"
          >
            <path
              d="M92.0266 0.00292969H3.37489C0.607116 21.1434 -0.491703 42.1406 0.254663 52.071C0.721142 58.152 1.22909 64.4174 2.00655 70.6009C2.00655 70.6009 6.1012 117.888 10.3617 135.026C14.6326 152.163 20.8523 162.401 20.8523 162.401L27.072 197.208L28.0568 217.632C28.0879 218.349 28.0879 219.065 28.0568 219.792L27.072 239.192L24.9988 272.976L37.4382 333.378L43.6579 366.138L44.5702 375.843L45.1921 390.615L46.7678 409.135L42.6213 420.396C29.1453 449.062 12.5593 451.109 7.52137 462.606C7.52137 462.606 4.41151 467.724 7.52137 470.796C7.52137 470.796 8.55799 472.843 10.6312 472.843C10.6312 472.843 12.7045 475.915 14.7777 474.891C14.7777 474.891 18.9242 478.986 22.034 475.915L22.0133 475.136C22.6664 476.232 23.3713 476.877 23.3713 476.877C36.1113 480.91 42.7664 472.843 42.7664 472.843C47.9495 471.819 52.096 467.724 55.2059 466.701C58.3157 465.677 62.4622 449.297 62.4622 449.297C79.0481 449.297 81.1214 444.178 86.3045 440.083C91.4876 435.988 88.3777 421.656 87.3411 419.608C86.3045 417.561 81.1214 408.347 81.1214 408.347V401.181C81.1214 399.133 76.9749 385.824 75.9383 378.658C74.9017 371.492 82.158 306.995 82.158 306.995C82.158 306.995 87.3411 281.402 86.3045 271.164C85.2679 260.927 76.9749 216.905 76.9749 216.905C83.1946 203.596 82.158 180.05 82.158 180.05C85.2678 165.718 83.1946 145.243 83.1946 145.243L86.3045 102.245C91.4357 73.191 89.8082 44.6692 88.4295 30.5312L87.9527 29.9784L87.3826 21.6758L89.6528 18.7581L90.4406 17.6524L91.1973 17.7138L92.0266 18.7274V0.00292969Z"
              :fill="legColor"
              @mouseover="changeLegToGreen"
              @mouseleave="changeRightLegToBlue"
              class="cursor-pointer pointer-events-auto"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>

  <!-- Right quadriceps -->
  <div>
    <div
      class="absolute top-[50px] right-[320px] z-20 flex items-center"
      v-show="quadricepsActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Quadríceps</p>
        <p class="leading-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <hr class="border-[1.5px] border-white w-[60px]" />
      <div class="w-[13px] h-[13px] rounded-full bg-white"></div>
    </div>
    <div>
      <NuxtLink to="/newOrtesys">
        <div class="absolute top-0 left-0 w-full h-[540px] overflow-hidden">
          <svg
            viewBox="0 0 89 243"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[113.8px] absolute top-[-95px] right-[192px] pointer-events-none z-10"
            :class="(quadricepsActive || legActive) && 'z-20'"
          >
            <path
              d="M87.3305 47.2676L86.6405 48.6376L87.6305 56.2376C89.0005 70.3876 90.6005 98.9276 85.5105 127.988L82.4405 171.008C82.4405 171.008 84.4905 191.498 81.4105 205.838C81.4105 205.838 82.1305 222.298 78.7805 235.468C77.7105 239.668 73.7805 242.488 69.4605 242.108L35.1805 239.038C30.9905 238.658 27.6505 235.368 27.2205 231.188L24.8905 208.678L20.7905 189.218L13.6105 172.828C7.2705 148.248 2.6305 107.178 0.430496 77.7876C-1.5995 50.6776 3.9905 20.8876 8.0005 2.04757C8.3605 0.337575 10.2805 -0.522425 11.8005 0.337575L86.4505 42.6276C88.1105 43.5676 88.5305 45.7776 87.3305 47.2676Z"
              :fill="quadricepsColor"
              @mouseover="changeQuadricepsToGreen"
              @mouseleave="changeQuadricepsToBlue"
              class="cursor-pointer pointer-events-auto"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>

  <!-- Right ankle -->
  <div>
    <div
      class="absolute top-[365px] right-[270px] z-20 flex items-center"
      v-show="ankleActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Tornozelo</p>
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
          viewBox="0 0 43 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[55.8px] absolute top-[387px] right-[196px] pointer-events-none z-10"
          :class="(ankleActive || legActive) && 'z-20'"
        >
          <path
            d="M32.7167 19.3929C33.7467 26.5629 37.8467 39.8829 37.8467 41.9329V49.1029C37.8467 49.1029 39.9567 52.9029 41.7367 56.1629C42.7867 58.0729 41.4267 60.4129 39.2467 60.4529L3.99674 61.0829C1.96674 61.1229 0.526741 59.1029 1.21674 57.1929L3.87674 49.8929L1.91674 25.3129L0.0367405 3.82293C-0.10326 2.18293 1.16674 0.76293 2.80674 0.72293L30.5867 0.00292948C32.2467 -0.0370705 33.5867 1.33293 33.5067 2.99293L32.7067 19.3929H32.7167Z"
            :fill="ankleColor"
            @mouseover="changeAnkleToGreen"
            @mouseleave="changeAnkleToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>

  <!-- Right foot -->
  <div>
    <div
      class="absolute bottom-[-15px] right-[300px] z-20 flex items-center"
      v-show="footActive"
    >
      <div class="bg-white p-5 rounded-lg w-[180px] flex flex-col gap-2">
        <p class="font-extrabold text-2xl">Pé</p>
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
          viewBox="0 0 84 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[107.7px] absolute bottom-[-1px] right-[191px] pointer-events-none z-10"
          :class="(footActive || legActive) && 'z-20'"
        >
          <path
            d="M74.9473 4.73969C74.9473 5.54328 75.1493 6.32678 75.5434 7.02993C76.9378 9.52106 80.3428 15.6585 81.1613 17.2858C82.1919 19.345 85.2938 33.7493 80.1205 37.8678C75.3312 41.6848 73.1992 46.3758 59.7608 47.0488C57.7198 47.1492 55.9617 48.5153 55.3959 50.4741C54.0015 55.3459 51.2633 63.8941 49.0505 64.6374C46.1607 65.5917 42.3616 69.238 37.6632 70.5538C36.9761 70.7447 36.3598 71.1264 35.8344 71.6086C33.8439 73.4468 28.1047 77.6355 18.8595 75.3252C17.6571 75.0238 16.6063 74.2805 15.9596 73.2358C15.9394 73.1956 15.9091 73.1555 15.8889 73.1153L15.9091 73.8988C13.7771 76.0183 11.1501 74.7325 9.71531 73.728C9.11917 73.3061 8.41188 73.1153 7.67428 73.0751C6.76491 73.0249 5.91617 72.382 5.33013 71.7894C4.83503 71.2972 4.2591 70.8853 3.59223 70.6643C2.13724 70.2023 1.40975 68.7458 1.40975 68.7458C-1.70231 65.662 1.40975 60.519 1.40975 60.519C3.2588 55.597 10.7863 49.7207 16.6164 44.9996C16.7477 44.8992 16.8589 44.7887 16.9801 44.6782L27.6905 34.0306C28.0239 33.6991 28.3068 33.3275 28.5291 32.9056L36.3194 18.3807C36.4204 18.1798 36.5214 17.9789 36.5922 17.7679L39.7345 9.16949C40.2802 7.66275 41.5634 6.53773 43.1295 6.17611L69.097 0.129084C72.0878 -0.564014 74.9473 1.68604 74.9473 4.73969Z"
            :fill="footColor"
            @mouseover="changeFootToGreen"
            @mouseleave="changeFootToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const quadricepsColor = ref("#2D5893");
const quadricepsActive = ref(false);

const ankleColor = ref("#2D5893");
const ankleActive = ref(false);

const footColor = ref("#2D5893");
const footActive = ref(false);

const legColor = ref("#2D5893");
const legActive = ref(false);

const changeQuadricepsToBlue = () => {
  quadricepsColor.value = "#2D5893";
  quadricepsActive.value = false;
};

const changeQuadricepsToGreen = () => {
  quadricepsColor.value = "#2FB7A0";
  quadricepsActive.value = true;
};

const changeAnkleToBlue = () => {
  ankleColor.value = "#2D5893";
  ankleActive.value = false;
};

const changeAnkleToGreen = () => {
  ankleColor.value = "#2FB7A0";
  ankleActive.value = true;
};

const changeFootToBlue = () => {
  footColor.value = "#2D5893";
  footActive.value = false;
};

const changeFootToGreen = () => {
  footColor.value = "#2FB7A0";
  footActive.value = true;
};

const changeRightLegToBlue = () => {
  quadricepsColor.value = "#2D5893";
  ankleColor.value = "#2D5893";
  footColor.value = "#2D5893";
  legColor.value = "#2D5893";
  legActive.value = false;
};

const changeLegToGreen = () => {
  quadricepsColor.value = "#2FB7A0";
  ankleColor.value = "#2FB7A0";
  footColor.value = "#2FB7A0";
  legColor.value = "#2FB7A0";
  legActive.value = true;
};
</script>

<style scoped></style>
