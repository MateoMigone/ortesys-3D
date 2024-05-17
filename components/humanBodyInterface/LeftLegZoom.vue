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
      class="h-[1200px] absolute bottom-0 left-[-180px] z-10"
    />
  </div>

  <!-- Left leg -->
  <div>
    <div
      class="absolute top-[180px] left-[300px] z-20 flex flex-row-reverse items-center"
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
            viewBox="0 0 92 477"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[117.3px] absolute bottom-0 left-[190px] pointer-events-none z-10"
            :class="legActive && 'z-20'"
          >
            <path
              d="M0 0H88.6517C91.4195 21.0962 92.5183 42.0495 91.7719 51.9591C91.3055 58.0275 90.7975 64.2797 90.0201 70.4502C90.0201 70.4502 85.9254 117.638 81.6649 134.74C77.394 151.842 71.1743 162.058 71.1743 162.058L64.9546 196.793L63.9698 217.174C63.9387 217.889 63.9387 218.604 63.9698 219.329L64.9546 238.689L67.0278 272.402L54.5884 332.677L48.3687 365.369L47.4565 375.054L46.8345 389.795L45.2588 408.276L49.4053 419.514C62.8814 448.119 79.4673 450.162 84.5052 461.635C84.5052 461.635 87.6151 466.743 84.5052 469.808C84.5052 469.808 83.4686 471.851 81.3954 471.851C81.3954 471.851 79.3221 474.916 77.2489 473.894C77.2489 473.894 73.1024 477.981 69.9926 474.916L70.0133 474.139C69.3602 475.233 68.6553 475.876 68.6553 475.876C55.9153 479.901 49.2602 471.851 49.2602 471.851C44.0771 470.829 39.9306 466.743 36.8207 465.721C33.7109 464.7 29.5644 448.354 29.5644 448.354C12.9785 448.354 10.9052 443.246 5.72214 439.16C0.539042 435.073 3.6489 420.771 4.68552 418.727C5.72214 416.684 10.9052 407.49 10.9052 407.49V400.338C10.9052 398.295 15.0517 385.014 16.0883 377.863C17.125 370.712 9.86862 306.35 9.86862 306.35C9.86862 306.35 4.68552 280.81 5.72214 270.594C6.75876 260.378 15.0517 216.449 15.0517 216.449C8.832 203.168 9.86862 179.671 9.86862 179.671C6.75876 165.368 8.832 144.936 8.832 144.936L5.72214 102.028C0.590873 73.0349 2.21837 44.5729 3.59707 30.4644L4.07392 29.9127L4.64406 21.6275L2.37386 18.7159L1.58603 17.6126L0.829296 17.6739L0 18.6853L0 0Z"
              :fill="legColor"
              @mouseover="changeLegToGreen"
              @mouseleave="changeLegToBlue"
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
      class="absolute top-[50px] left-[320px] z-20 flex flex-row-reverse items-center"
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
            class="w-[113.8px] absolute top-[-95px] left-[193px] pointer-events-none z-10"
            :class="(quadricepsActive || legActive) && 'z-20'"
          >
            <path
              d="M1.66648 47.2676L2.35648 48.6376L1.36648 56.2376C-0.00351751 70.3876 -1.60352 98.9276 3.48648 127.988L6.55648 171.008C6.55648 171.008 4.50648 191.498 7.58648 205.838C7.58648 205.838 6.86648 222.298 10.2165 235.468C11.2865 239.668 15.2165 242.488 19.5365 242.108L53.8165 239.038C58.0065 238.658 61.3465 235.368 61.7765 231.188L64.1065 208.678L68.2065 189.218L75.3865 172.828C81.7265 148.248 86.3665 107.178 88.5665 77.7876C90.5965 50.6776 85.0065 20.8876 80.9965 2.04757C80.6365 0.337575 78.7165 -0.522425 77.1965 0.337575L2.54648 42.6276C0.886483 43.5676 0.466482 45.7776 1.66648 47.2676Z"
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

  <!-- Left ankle -->
  <div>
    <div
      class="absolute top-[365px] left-[270px] z-20 flex flex-row-reverse items-center"
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
          class="w-[56px] absolute top-[386px] left-[198px] pointer-events-none z-10"
          :class="(ankleActive || legActive) && 'z-20'"
        >
          <path
            d="M9.38159 19.3909C8.35159 26.5609 4.25159 39.8809 4.25159 41.9309V49.1009C4.25159 49.1009 2.14159 52.9009 0.361588 56.1609C-0.688412 58.0709 0.671585 60.4109 2.85159 60.4509L38.1016 61.0809C40.1316 61.1209 41.5716 59.1009 40.8816 57.1909L38.2216 49.8909L40.1816 25.3109L42.0616 3.82085C42.2016 2.18085 40.9316 0.760854 39.2916 0.720854L11.5116 0.000854287C9.85159 -0.0391457 8.51159 1.33085 8.59159 2.99085L9.39159 19.3909H9.38159Z"
            :fill="ankleColor"
            @mouseover="changeAnkleToGreen"
            @mouseleave="changeAnkleToBlue"
            class="cursor-pointer pointer-events-auto"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>

  <!-- Left foot -->
  <div>
    <div
      class="absolute bottom-[-15px] left-[300px] z-20 flex flex-row-reverse items-center"
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
          viewBox="0 0 83 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[107px] absolute bottom-[-0.5px] left-[193px] pointer-events-none z-10"
          :class="(footActive || legActive) && 'z-20'"
        >
          <path
            d="M8.07936 4.73676C8.07936 5.54035 7.87728 6.32385 7.48322 7.027C6.08886 9.51813 2.68378 15.6556 1.86535 17.2828C0.834735 19.342 -2.26722 33.7464 2.90607 37.8648C7.69541 41.6819 9.82737 46.3728 23.2658 47.0459C25.3068 47.1463 27.0649 48.5124 27.6308 50.4712C29.0251 55.3429 31.7633 63.8911 33.9761 64.6345C36.8659 65.5887 40.665 69.235 45.3634 70.5509C46.0505 70.7418 46.6668 71.1235 47.1923 71.6056C49.1828 73.4438 54.9219 77.6326 64.1671 75.3222C65.3695 75.0209 66.4203 74.2776 67.067 73.2329C67.0872 73.1927 67.1175 73.1525 67.1377 73.1124L67.1175 73.8959C69.2495 76.0153 71.8765 74.7296 73.3113 73.7251C73.9074 73.3032 74.6147 73.1124 75.3523 73.0722C76.2617 73.022 77.1104 72.3791 77.6965 71.7864C78.1916 71.2942 78.7675 70.8824 79.4344 70.6614C80.8894 70.1993 81.6169 68.7428 81.6169 68.7428C84.7289 65.659 81.6169 60.5161 81.6169 60.5161C79.7678 55.5941 72.2403 49.7178 66.4102 44.9967C66.2789 44.8962 66.1677 44.7858 66.0465 44.6753L55.3361 34.0277C55.0027 33.6962 54.7198 33.3245 54.4975 32.9026L46.7073 18.3777C46.6062 18.1768 46.5052 17.9759 46.4344 17.765L43.2921 9.16656C42.7465 7.65982 41.4632 6.5348 39.8971 6.17318L13.9296 0.126154C10.9388 -0.566944 8.07936 1.68311 8.07936 4.73676Z"
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

const changeLegToBlue = () => {
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
