<template>
  <form class="flex gap-6">
    <div class="w-[45%] bg-white p-11 rounded-xl">
      <div class="flex flex-col gap-3">
        <div>
          <label
            class="text-[#2d5893] font-bold text-xl"
            @mouseenter="toggleShowRefImg"
            @mouseleave="toggleShowRefImg"
            >Palma</label
          ><br />
          <input
            type="text"
            class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            placeholder="Preencha com as medidas"
          />
          <p class="text-sm font-medium">Deve estar entre 250 e 300 cm</p>
        </div>
        <div>
          <label
            class="text-[#2d5893] font-bold text-xl"
            @mouseenter="toggleShowRefImg"
            @mouseleave="toggleShowRefImg"
            >Punho</label
          ><br />
          <input
            type="text"
            class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            placeholder="Preencha com as medidas"
          />
          <p class="text-sm font-medium">
            Entre 65 e 80 cm (menor que largura)
          </p>
        </div>
        <div>
          <label
            class="text-[#2d5893] font-bold text-xl"
            @mouseenter="toggleShowRefImg"
            @mouseleave="toggleShowRefImg"
            >Antebraço</label
          ><br />
          <input
            type="text"
            class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            placeholder="Preencha com as medidas"
          />
          <p class="text-sm font-medium">Deve estar entre 2 e 5</p>
        </div>
        <div>
          <label
            class="text-[#2d5893] font-bold text-xl"
            @mouseenter="toggleShowRefImg"
            @mouseleave="toggleShowRefImg"
            >Prega palmar</label
          ><br />
          <input
            type="text"
            class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            placeholder="Preencha com as medidas"
          />
          <p class="text-sm font-medium">Deve estar entre 80 e 110 cm</p>
        </div>
        <div>
          <label
            class="text-[#2d5893] font-bold text-xl"
            @mouseenter="toggleShowRefImg"
            @mouseleave="toggleShowRefImg"
            >Bordas</label
          ><br />
          <input
            type="text"
            class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm"
            placeholder="Preencha com as medidas"
          />
          <p class="text-sm font-medium">Deve estar entre 1 e 5</p>
        </div>
        <div>
          <label for="printer" class="text-[#2d5893] font-bold text-xl"
            >Configuração:</label
          ><br />
          <div class="relative flex justify-center items-center">
            <select
              name="printer"
              id="printer"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm appearance-none cursor-pointer"
              placeholder="Preencha com as medidas"
            >
              <option value="" disabled selected hidden>
                Selecione uma impressora:
              </option>
              <option value="printer1">Impressora 1</option>
              <option value="printer2">Impressora 2</option>
              <option value="printer3">Impressora 3</option>
            </select>
            <div
              class="absolute right-0 p-2.5 flex justify-center items-center pointer-events-none"
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.76566 5.5C3.4746 5.5 3.19799 5.37319 3.00802 5.15267L0.295214 2.00354C-0.212769 1.41385 0.206172 0.5 0.984489 0.5C1.25278 0.5 1.5074 0.618424 1.68026 0.82361L3.41767 2.88593C3.50602 3 3.61647 3.14892 3.749 3.3327C3.88153 3.51014 4.01406 3.69392 4.14659 3.88403C4.2664 4.0559 4.37418 4.21224 4.46992 4.35303C4.48876 4.38073 4.52006 4.39734 4.55356 4.39734C4.58887 4.39734 4.62159 4.3789 4.64 4.34876C4.72155 4.21526 4.81478 4.06669 4.91968 3.90304C5.05221 3.71293 5.18474 3.52598 5.31727 3.34221C5.4498 3.15843 5.5676 3.00634 5.67068 2.88593L7.39441 0.817119C7.56183 0.616182 7.80986 0.5 8.0714 0.5C8.82632 0.5 9.23173 1.38729 8.73757 1.958L5.96977 5.15458C5.77982 5.37395 5.50395 5.5 5.21378 5.5H3.76566Z"
                  fill="#CDCEE4"
                />
              </svg>
            </div>
          </div>

          <div class="relative flex justify-center items-center">
            <select
              name="material"
              id="material"
              class="bg-[#FCFCFF] border-[#CDCEE4] border-[1px] rounded-lg my-1.5 w-full py-3 px-4 placeholder:text-[#131E41] font-medium text-xs 2xl:text-sm appearance-none cursor-pointer"
              placeholder="Preencha com as medidas"
            >
              <option value="" disabled selected hidden>
                Selecione um material:
              </option>
              <option value="material1">Material 1</option>
              <option value="material2">Material 2</option>
              <option value="material3">Material 3</option>
            </select>
            <div
              class="absolute right-0 p-2.5 flex justify-center items-center pointer-events-none"
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.76566 5.5C3.4746 5.5 3.19799 5.37319 3.00802 5.15267L0.295214 2.00354C-0.212769 1.41385 0.206172 0.5 0.984489 0.5C1.25278 0.5 1.5074 0.618424 1.68026 0.82361L3.41767 2.88593C3.50602 3 3.61647 3.14892 3.749 3.3327C3.88153 3.51014 4.01406 3.69392 4.14659 3.88403C4.2664 4.0559 4.37418 4.21224 4.46992 4.35303C4.48876 4.38073 4.52006 4.39734 4.55356 4.39734C4.58887 4.39734 4.62159 4.3789 4.64 4.34876C4.72155 4.21526 4.81478 4.06669 4.91968 3.90304C5.05221 3.71293 5.18474 3.52598 5.31727 3.34221C5.4498 3.15843 5.5676 3.00634 5.67068 2.88593L7.39441 0.817119C7.56183 0.616182 7.80986 0.5 8.0714 0.5C8.82632 0.5 9.23173 1.38729 8.73757 1.958L5.96977 5.15458C5.77982 5.37395 5.50395 5.5 5.21378 5.5H3.76566Z"
                  fill="#CDCEE4"
                />
              </svg>
            </div>
          </div>
        </div>
        <Button
          text="Gerar órteses"
          color="green"
          @click.prevent="generateOrtesys"
        />
        <Button
          text="Cancelar"
          color="red"
          @click.prevent="cancelOrtesysGeneration"
        />
      </div>
    </div>
    <div class="w-[55%] flex flex-col items-center gap-5">
      <div class="bg-white p-6 rounded-2xl relative w-full text-center">
        <h1 class="text-[#2d5893] font-bold text-2xl mb-1">Nível de regidez</h1>
        <p class="text-sm text-[#131E41]">Deve estar entre 01 e 03</p>
        <input
          type="range"
          min="1"
          max="3"
          class="my-4 rounded-full overflow-hidden appearance-none w-full"
        />
        <div class="flex justify-between w-full">
          <span class="text-blue-600">01</span>
          <span class="text-blue-600">02</span>
          <span class="text-blue-600">03</span>
        </div>
      </div>
      <img
        class="h-[70%] mt-10"
        src="../../assets/imgs/ortesys-arm-shadow.png"
        alt="Ortesys Arm"
      />

      <img
        v-show="showRefImg"
        src="../../assets/imgs/handRefImg.png"
        class="fixed top-[110px] h-[80vh]"
      />
    </div>
  </form>
</template>

<script setup>
import SelectOrtesysVersion from "./SelectOrtesysVersion.vue";

const { setSelectedVersion } = defineProps(["setSelectedVersion"]);

const router = useRouter();
const showRefImg = ref(false);

const cancelOrtesysGeneration = () => {
  // reset all inputs
  SelectOrtesysVersion.value = "";
  router.push("/newOrtesys");
};

const generateOrtesys = () => {
  // post all inputs
  // reset all inputs
  SelectOrtesysVersion.value = "";
  router.push("/manage");
};

const toggleShowRefImg = () => {
  showRefImg.value = !showRefImg.value;
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  width: 15px;
  appearance: none;
  height: 15px;
  cursor: pointer;
  background: #2fb7a0;
  box-shadow: -405px 0 0 400px #2d5893;
  border-radius: 100%;
}
</style>
