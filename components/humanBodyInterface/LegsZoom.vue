<template>
  <!-- Background opacity (hover) -->
  <div class="fixed inset-0 bg-black bg-opacity-40 z-10"></div>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 z-20"
    v-show="
      rightLegActive ||
      rightQuadricepsActive ||
      rightAnkleActive ||
      rightFootActive ||
      leftLegActive ||
      leftQuadricepsActive ||
      leftAnkleActive ||
      leftFootActive
    "
  ></div>

  <div class="relative flex justify-center overflow-hidden w-full h-[540px]">
    <!-- Complete body zoomed -->
    <img
      src="../../assets/imgs/humanBody/blue/completeBody.svg"
      alt=""
      class="h-[1200px] absolute bottom-0 z-10"
    />
  </div>

  <!-- Right leg -->
  <div>
    <div
      class="absolute top-[180px] left-[245px] z-20 flex items-center"
      v-show="rightLegActive"
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
            class="w-[117.3px] absolute bottom-0 left-[500px] pointer-events-none z-10"
            :class="rightLegActive && 'z-20'"
          >
            <path
              d="M92.0266 0.00292969H3.37489C0.607116 21.1434 -0.491703 42.1406 0.254663 52.071C0.721142 58.152 1.22909 64.4174 2.00655 70.6009C2.00655 70.6009 6.1012 117.888 10.3617 135.026C14.6326 152.163 20.8523 162.401 20.8523 162.401L27.072 197.208L28.0568 217.632C28.0879 218.349 28.0879 219.065 28.0568 219.792L27.072 239.192L24.9988 272.976L37.4382 333.378L43.6579 366.138L44.5702 375.843L45.1921 390.615L46.7678 409.135L42.6213 420.396C29.1453 449.062 12.5593 451.109 7.52137 462.606C7.52137 462.606 4.41151 467.724 7.52137 470.796C7.52137 470.796 8.55799 472.843 10.6312 472.843C10.6312 472.843 12.7045 475.915 14.7777 474.891C14.7777 474.891 18.9242 478.986 22.034 475.915L22.0133 475.136C22.6664 476.232 23.3713 476.877 23.3713 476.877C36.1113 480.91 42.7664 472.843 42.7664 472.843C47.9495 471.819 52.096 467.724 55.2059 466.701C58.3157 465.677 62.4622 449.297 62.4622 449.297C79.0481 449.297 81.1214 444.178 86.3045 440.083C91.4876 435.988 88.3777 421.656 87.3411 419.608C86.3045 417.561 81.1214 408.347 81.1214 408.347V401.181C81.1214 399.133 76.9749 385.824 75.9383 378.658C74.9017 371.492 82.158 306.995 82.158 306.995C82.158 306.995 87.3411 281.402 86.3045 271.164C85.2679 260.927 76.9749 216.905 76.9749 216.905C83.1946 203.596 82.158 180.05 82.158 180.05C85.2678 165.718 83.1946 145.243 83.1946 145.243L86.3045 102.245C91.4357 73.191 89.8082 44.6692 88.4295 30.5312L87.9527 29.9784L87.3826 21.6758L89.6528 18.7581L90.4406 17.6524L91.1973 17.7138L92.0266 18.7274V0.00292969Z"
              :fill="rightLegColor"
              @mouseover="changeRightLegToGreen"
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
      class="absolute top-[50px] left-[235px] z-20 flex items-center"
      v-show="rightQuadricepsActive"
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
            class="w-[113.8px] absolute top-[-95px] left-[500px] pointer-events-none z-10"
            :class="(rightQuadricepsActive || rightLegActive) && 'z-20'"
          >
            <path
              d="M87.3305 47.2676L86.6405 48.6376L87.6305 56.2376C89.0005 70.3876 90.6005 98.9276 85.5105 127.988L82.4405 171.008C82.4405 171.008 84.4905 191.498 81.4105 205.838C81.4105 205.838 82.1305 222.298 78.7805 235.468C77.7105 239.668 73.7805 242.488 69.4605 242.108L35.1805 239.038C30.9905 238.658 27.6505 235.368 27.2205 231.188L24.8905 208.678L20.7905 189.218L13.6105 172.828C7.2705 148.248 2.6305 107.178 0.430496 77.7876C-1.5995 50.6776 3.9905 20.8876 8.0005 2.04757C8.3605 0.337575 10.2805 -0.522425 11.8005 0.337575L86.4505 42.6276C88.1105 43.5676 88.5305 45.7776 87.3305 47.2676Z"
              :fill="rightQuadricepsColor"
              @mouseover="changeRightQuadricepsToGreen"
              @mouseleave="changeRightQuadricepsToBlue"
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
      class="absolute top-[365px] left-[275px] z-20 flex items-center"
      v-show="rightAnkleActive"
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
          class="w-[55.2px] absolute top-[388px] left-[554px] pointer-events-none z-10"
          :class="(rightAnkleActive || rightLegActive) && 'z-20'"
        >
          <path
            d="M32.7167 19.3929C33.7467 26.5629 37.8467 39.8829 37.8467 41.9329V49.1029C37.8467 49.1029 39.9567 52.9029 41.7367 56.1629C42.7867 58.0729 41.4267 60.4129 39.2467 60.4529L3.99674 61.0829C1.96674 61.1229 0.526741 59.1029 1.21674 57.1929L3.87674 49.8929L1.91674 25.3129L0.0367405 3.82293C-0.10326 2.18293 1.16674 0.76293 2.80674 0.72293L30.5867 0.00292948C32.2467 -0.0370705 33.5867 1.33293 33.5067 2.99293L32.7067 19.3929H32.7167Z"
            :fill="rightAnkleColor"
            @mouseover="changeRightAnkleToGreen"
            @mouseleave="changeRightAnkleToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>

  <!-- Right foot -->
  <div>
    <div
      class="absolute bottom-[-15px] left-[240px] z-20 flex items-center"
      v-show="rightFootActive"
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
          class="w-[107.6px] absolute bottom-[0px] left-[507px] pointer-events-none z-10"
          :class="(rightFootActive || rightLegActive) && 'z-20'"
        >
          <path
            d="M74.9473 4.73969C74.9473 5.54328 75.1493 6.32678 75.5434 7.02993C76.9378 9.52106 80.3428 15.6585 81.1613 17.2858C82.1919 19.345 85.2938 33.7493 80.1205 37.8678C75.3312 41.6848 73.1992 46.3758 59.7608 47.0488C57.7198 47.1492 55.9617 48.5153 55.3959 50.4741C54.0015 55.3459 51.2633 63.8941 49.0505 64.6374C46.1607 65.5917 42.3616 69.238 37.6632 70.5538C36.9761 70.7447 36.3598 71.1264 35.8344 71.6086C33.8439 73.4468 28.1047 77.6355 18.8595 75.3252C17.6571 75.0238 16.6063 74.2805 15.9596 73.2358C15.9394 73.1956 15.9091 73.1555 15.8889 73.1153L15.9091 73.8988C13.7771 76.0183 11.1501 74.7325 9.71531 73.728C9.11917 73.3061 8.41188 73.1153 7.67428 73.0751C6.76491 73.0249 5.91617 72.382 5.33013 71.7894C4.83503 71.2972 4.2591 70.8853 3.59223 70.6643C2.13724 70.2023 1.40975 68.7458 1.40975 68.7458C-1.70231 65.662 1.40975 60.519 1.40975 60.519C3.2588 55.597 10.7863 49.7207 16.6164 44.9996C16.7477 44.8992 16.8589 44.7887 16.9801 44.6782L27.6905 34.0306C28.0239 33.6991 28.3068 33.3275 28.5291 32.9056L36.3194 18.3807C36.4204 18.1798 36.5214 17.9789 36.5922 17.7679L39.7345 9.16949C40.2802 7.66275 41.5634 6.53773 43.1295 6.17611L69.097 0.129084C72.0878 -0.564014 74.9473 1.68604 74.9473 4.73969Z"
            :fill="rightFootColor"
            @mouseover="changeRightFootToGreen"
            @mouseleave="changeRightFootToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>

  <!-- Left leg -->
  <div>
    <div
      class="absolute top-[180px] right-[245px] z-20 flex flex-row-reverse items-center"
      v-show="leftLegActive"
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
            viewBox="0 0 92 477"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[117.3px] absolute bottom-0 right-[500px] pointer-events-none z-10"
            :class="leftLegActive && 'z-20'"
          >
            <path
              d="M0 0H88.6517C91.4195 21.0962 92.5183 42.0495 91.7719 51.9591C91.3055 58.0275 90.7975 64.2797 90.0201 70.4502C90.0201 70.4502 85.9254 117.638 81.6649 134.74C77.394 151.842 71.1743 162.058 71.1743 162.058L64.9546 196.793L63.9698 217.174C63.9387 217.889 63.9387 218.604 63.9698 219.329L64.9546 238.689L67.0278 272.402L54.5884 332.677L48.3687 365.369L47.4565 375.054L46.8345 389.795L45.2588 408.276L49.4053 419.514C62.8814 448.119 79.4673 450.162 84.5052 461.635C84.5052 461.635 87.6151 466.743 84.5052 469.808C84.5052 469.808 83.4686 471.851 81.3954 471.851C81.3954 471.851 79.3221 474.916 77.2489 473.894C77.2489 473.894 73.1024 477.981 69.9926 474.916L70.0133 474.139C69.3602 475.233 68.6553 475.876 68.6553 475.876C55.9153 479.901 49.2602 471.851 49.2602 471.851C44.0771 470.829 39.9306 466.743 36.8207 465.721C33.7109 464.7 29.5644 448.354 29.5644 448.354C12.9785 448.354 10.9052 443.246 5.72214 439.16C0.539042 435.073 3.6489 420.771 4.68552 418.727C5.72214 416.684 10.9052 407.49 10.9052 407.49V400.338C10.9052 398.295 15.0517 385.014 16.0883 377.863C17.125 370.712 9.86862 306.35 9.86862 306.35C9.86862 306.35 4.68552 280.81 5.72214 270.594C6.75876 260.378 15.0517 216.449 15.0517 216.449C8.832 203.168 9.86862 179.671 9.86862 179.671C6.75876 165.368 8.832 144.936 8.832 144.936L5.72214 102.028C0.590873 73.0349 2.21837 44.5729 3.59707 30.4644L4.07392 29.9127L4.64406 21.6275L2.37386 18.7159L1.58603 17.6126L0.829296 17.6739L0 18.6853L0 0Z"
              :fill="leftLegColor"
              @mouseover="changeLeftLegToGreen"
              @mouseleave="changeLeftLegToBlue"
              class="cursor-pointer pointer-events-auto"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>

  <!-- Left quadriceps -->
  <div>
    <div
      class="absolute top-[50px] right-[235px] z-20 flex flex-row-reverse items-center"
      v-show="leftQuadricepsActive"
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
            class="w-[113.8px] absolute top-[-95px] right-[500px] pointer-events-none z-10"
            :class="(leftQuadricepsActive || leftLegActive) && 'z-20'"
          >
            <path
              d="M1.66648 47.2676L2.35648 48.6376L1.36648 56.2376C-0.00351751 70.3876 -1.60352 98.9276 3.48648 127.988L6.55648 171.008C6.55648 171.008 4.50648 191.498 7.58648 205.838C7.58648 205.838 6.86648 222.298 10.2165 235.468C11.2865 239.668 15.2165 242.488 19.5365 242.108L53.8165 239.038C58.0065 238.658 61.3465 235.368 61.7765 231.188L64.1065 208.678L68.2065 189.218L75.3865 172.828C81.7265 148.248 86.3665 107.178 88.5665 77.7876C90.5965 50.6776 85.0065 20.8876 80.9965 2.04757C80.6365 0.337575 78.7165 -0.522425 77.1965 0.337575L2.54648 42.6276C0.886483 43.5676 0.466482 45.7776 1.66648 47.2676Z"
              :fill="leftQuadricepsColor"
              @mouseover="changeLeftQuadricepsToGreen"
              @mouseleave="changeLeftQuadricepsToBlue"
              class="cursor-pointer pointer-events-auto"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>

  <!-- Left ankle -->
  <div>
    <div
      class="absolute top-[365px] right-[275px] z-20 flex flex-row-reverse items-center"
      v-show="leftAnkleActive"
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
          class="w-[56px] absolute top-[386px] right-[552px] pointer-events-none z-10"
          :class="(leftAnkleActive || leftLegActive) && 'z-20'"
        >
          <path
            d="M9.38159 19.3909C8.35159 26.5609 4.25159 39.8809 4.25159 41.9309V49.1009C4.25159 49.1009 2.14159 52.9009 0.361588 56.1609C-0.688412 58.0709 0.671585 60.4109 2.85159 60.4509L38.1016 61.0809C40.1316 61.1209 41.5716 59.1009 40.8816 57.1909L38.2216 49.8909L40.1816 25.3109L42.0616 3.82085C42.2016 2.18085 40.9316 0.760854 39.2916 0.720854L11.5116 0.000854287C9.85159 -0.0391457 8.51159 1.33085 8.59159 2.99085L9.39159 19.3909H9.38159Z"
            :fill="leftAnkleColor"
            @mouseover="changeLeftAnkleToGreen"
            @mouseleave="changeLeftAnkleToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>

  <!-- Left foot -->
  <div>
    <div
      class="absolute bottom-[-15px] right-[240px] z-20 flex flex-row-reverse items-center"
      v-show="leftFootActive"
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
          viewBox="0 0 83 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[106.5px] absolute bottom-[0px] right-[506px] pointer-events-none z-10"
          :class="(leftFootActive || leftLegActive) && 'z-20'"
        >
          <path
            d="M8.07936 4.73676C8.07936 5.54035 7.87728 6.32385 7.48322 7.027C6.08886 9.51813 2.68378 15.6556 1.86535 17.2828C0.834735 19.342 -2.26722 33.7464 2.90607 37.8648C7.69541 41.6819 9.82737 46.3728 23.2658 47.0459C25.3068 47.1463 27.0649 48.5124 27.6308 50.4712C29.0251 55.3429 31.7633 63.8911 33.9761 64.6345C36.8659 65.5887 40.665 69.235 45.3634 70.5509C46.0505 70.7418 46.6668 71.1235 47.1923 71.6056C49.1828 73.4438 54.9219 77.6326 64.1671 75.3222C65.3695 75.0209 66.4203 74.2776 67.067 73.2329C67.0872 73.1927 67.1175 73.1525 67.1377 73.1124L67.1175 73.8959C69.2495 76.0153 71.8765 74.7296 73.3113 73.7251C73.9074 73.3032 74.6147 73.1124 75.3523 73.0722C76.2617 73.022 77.1104 72.3791 77.6965 71.7864C78.1916 71.2942 78.7675 70.8824 79.4344 70.6614C80.8894 70.1993 81.6169 68.7428 81.6169 68.7428C84.7289 65.659 81.6169 60.5161 81.6169 60.5161C79.7678 55.5941 72.2403 49.7178 66.4102 44.9967C66.2789 44.8962 66.1677 44.7858 66.0465 44.6753L55.3361 34.0277C55.0027 33.6962 54.7198 33.3245 54.4975 32.9026L46.7073 18.3777C46.6062 18.1768 46.5052 17.9759 46.4344 17.765L43.2921 9.16656C42.7465 7.65982 41.4632 6.5348 39.8971 6.17318L13.9296 0.126154C10.9388 -0.566944 8.07936 1.68311 8.07936 4.73676Z"
            :fill="leftFootColor"
            @mouseover="changeLeftFootToGreen"
            @mouseleave="changeLeftFootToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const rightQuadricepsColor = ref("#2D5893");
const rightQuadricepsActive = ref(false);

const rightAnkleColor = ref("#2D5893");
const rightAnkleActive = ref(false);

const rightFootColor = ref("#2D5893");
const rightFootActive = ref(false);

const rightLegColor = ref("#2D5893");
const rightLegActive = ref(false);

const leftQuadricepsColor = ref("#2D5893");
const leftQuadricepsActive = ref(false);

const leftAnkleColor = ref("#2D5893");
const leftAnkleActive = ref(false);

const leftFootColor = ref("#2D5893");
const leftFootActive = ref(false);

const leftLegColor = ref("#2D5893");
const leftLegActive = ref(false);

const changeRightQuadricepsToBlue = () => {
  rightQuadricepsColor.value = "#2D5893";
  rightQuadricepsActive.value = false;
};

const changeRightQuadricepsToGreen = () => {
  rightQuadricepsColor.value = "#2FB7A0";
  rightQuadricepsActive.value = true;
};

const changeRightAnkleToBlue = () => {
  rightAnkleColor.value = "#2D5893";
  rightAnkleActive.value = false;
};

const changeRightAnkleToGreen = () => {
  rightAnkleColor.value = "#2FB7A0";
  rightAnkleActive.value = true;
};

const changeRightFootToBlue = () => {
  rightFootColor.value = "#2D5893";
  rightFootActive.value = false;
};

const changeRightFootToGreen = () => {
  rightFootColor.value = "#2FB7A0";
  rightFootActive.value = true;
};

const changeRightLegToBlue = () => {
  rightQuadricepsColor.value = "#2D5893";
  rightAnkleColor.value = "#2D5893";
  rightFootColor.value = "#2D5893";
  rightLegColor.value = "#2D5893";
  rightLegActive.value = false;
};

const changeRightLegToGreen = () => {
  rightQuadricepsColor.value = "#2FB7A0";
  rightAnkleColor.value = "#2FB7A0";
  rightFootColor.value = "#2FB7A0";
  rightLegColor.value = "#2FB7A0";
  rightLegActive.value = true;
};

const changeLeftQuadricepsToBlue = () => {
  leftQuadricepsColor.value = "#2D5893";
  leftQuadricepsActive.value = false;
};

const changeLeftQuadricepsToGreen = () => {
  leftQuadricepsColor.value = "#2FB7A0";
  leftQuadricepsActive.value = true;
};

const changeLeftAnkleToBlue = () => {
  leftAnkleColor.value = "#2D5893";
  leftAnkleActive.value = false;
};

const changeLeftAnkleToGreen = () => {
  leftAnkleColor.value = "#2FB7A0";
  leftAnkleActive.value = true;
};

const changeLeftFootToBlue = () => {
  leftFootColor.value = "#2D5893";
  leftFootActive.value = false;
};

const changeLeftFootToGreen = () => {
  leftFootColor.value = "#2FB7A0";
  leftFootActive.value = true;
};

const changeLeftLegToBlue = () => {
  leftQuadricepsColor.value = "#2D5893";
  leftAnkleColor.value = "#2D5893";
  leftFootColor.value = "#2D5893";
  leftLegColor.value = "#2D5893";
  leftLegActive.value = false;
};

const changeLeftLegToGreen = () => {
  leftQuadricepsColor.value = "#2FB7A0";
  leftAnkleColor.value = "#2FB7A0";
  leftFootColor.value = "#2FB7A0";
  leftLegColor.value = "#2FB7A0";
  leftLegActive.value = true;
};
</script>

<style scoped></style>
