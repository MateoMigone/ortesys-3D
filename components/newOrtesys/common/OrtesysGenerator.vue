<template>
  <form class="flex gap-6 max-h-[80vh]">
    <div class="w-[50%] bg-white p-11 rounded-xl overflow-auto">
      <div class="flex flex-col gap-3">
        <!-- Show the input for the ortesys variables of the selected ortesys -->
        <FieldVariable
          :variable="{
            title: 'Palma',
            subtitle: 'Deve estar entre 250 e 300 cm',
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <FieldVariable
          :variable="{
            title: 'Punho',
            subtitle: 'Entre 65 e 80 cm (menor que largura)',
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <FieldVariable
          :variable="{
            title: 'Antebraço',
            subtitle: 'Deve estar entre 2 e 5',
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <FieldVariable
          :variable="{
            title: 'Prega palmar',
            subtitle: 'Deve estar entre 80 e 110 cm',
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <FieldVariable
          :variable="{
            title: 'Bordas',
            subtitle: 'Deve estar entre 1 e 5',
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <ComputedVariable
          :variable="{
            title: 'Comprimento',
            subtitle: 'Distancia para tirar as medidas',
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <ButtonVariable
          :variable="{
            title: 'Palma',
            subtitle: 'Deve estar entre 250 e 300 cm',
            enabledText: 'ON',
            disabledText: 'OFF',
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <BarVariable
          :variable="{
            title: 'Nível de rigidez',
            subtitle: 'Deve estar entre 01 e 04',
            qty: 4,
          }"
          :toggleShowRefImg="toggleShowRefImg"
        />

        <div>
          <label for="printer" class="text-[#2d5893] font-bold text-xl"
            >Configuração:</label
          ><br />
          <!-- Select printer -->
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

          <!-- Select material -->
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

        <!-- Generate ortesys button -->
        <Button
          text="Gerar órteses"
          color="green"
          @click.prevent="generateOrtesys"
        />

        <!-- Cancel button -->
        <Button
          text="Cancelar"
          color="red"
          @click.prevent="cancelOrtesysGeneration"
        />

        <!-- Error messages if input is incorrect -->
        <div
          v-if="error"
          class="flex flex-col gap-2.5 bg-[#DE3618] bg-opacity-80 text-white w-full p-3.5 px-5 italic rounded-xl shadow-2xl"
        >
          <h6 class="font-bold text-lg">Atenção:</h6>
          <ul class="list-disc list-inside">
            <li>
              Medida fora do intervalo na variável da palma, verifique a medida
            </li>
            <li>
              Medida fora do intervalo na variável da punho, verifique a medida
            </li>
            <li>
              Medida fora do intervalo na variável da bordas, verifique a medida
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[50%] flex flex-col items-center gap-5">
      <!-- Show main bar variable  -->
      <BarVariable
        :variable="{
          title: 'Nível de rigidez',
          subtitle: 'Deve estar entre 01 e 03',
          qty: 3,
        }"
        :toggleShowRefImg="toggleShowRefImg"
        size="lg"
      />

      <!-- Selected ortesys image -->
      <img
        class="h-[70%] mt-10"
        src="~/assets/imgs/ortesys-arm-shadow.png"
        alt="Ortesys Arm"
      />

      <!-- Hovered variable image -->
      <img
        v-show="showRefImg"
        src="~/assets/imgs/handRefImg.png"
        class="fixed top-[110px] h-[80vh]"
      />
    </div>
  </form>
</template>

<script setup>
// SHOULD RECEIVE THE SELECTED ORTESYS (AT LEAST VARIABLES AN IMAGE)

const router = useRouter();
const showRefImg = ref(false);

const error = ref(true);
/* const palmaRange = [250, 300];
const punhoRange = [65, 80];
const antebracoRange = [2, 5];
const pregaPalmarRange = [80, 110];
const bordasRange = [1, 5];

const palmaValue = ref("");
const punhoValue = ref("");
const antebracoValue = ref("");
const pregaPalmarValue = ref("");
const bordasValue = ref("");

const palma = ref(false);
const punho = ref(false);
const antebraco = ref(false);
const pregaPalmar = ref(false);
const bordas = ref(false);

const regex = /^\d+$/;

const checkPalma = () => {
  if (!regex.test(palmaValue.value)) {
    return false;
  }
  const number = parseInt(palmaValue.value, 10);
  return number >= palmaRange.value[0] && number <= palmaRange.value[1];
};

const checkPunho = () => {
  if (!regex.test(punhoValue.value)) {
    return false;
  }
  const number = parseInt(punhoValue.value, 10);
  return number >= punhoRange.value[0] && number <= punhoRange.value[1];
};

const checkAntebraco = () => {
  if (!regex.test(antebracoValue.value)) {
    return false;
  }
  const number = parseInt(antebracoValue.value, 10);
  return number >= antebracoRange.value[0] && number <= antebracoRange.value[1];
};

const checkPregaPalmar = () => {
  if (!regex.test(pregaPalmarValue.value)) {
    return false;
  }
  const number = parseInt(pregaPalmarValue.value, 10);
  return (
    number >= pregaPalmarRange.value[0] && number <= pregaPalmarRange.value[1]
  );
};

const checkBordas = () => {
  if (!regex.test(bordasValue.value)) {
    return false;
  }
  const number = parseInt(bordasValue.value, 10);
  return number >= bordasRange.value[0] && number <= bordasRange.value[1];
};

const validateFields = () => {
  return palma && punho && antebraco && pregaPalmar && bordas;
}; */

const cancelOrtesysGeneration = () => {
  // ADD INPUTS RESET

  /* palma.value = checkPalma();
  punho.value = checkPunho();
  antebraco.value = checkAntebraco();
  pregaPalmar.value = checkPregaPalmar();
  bordas.value = checkBordas(); */
  error.value && router.push("/newOrtesys");
};

const generateOrtesys = () => {
  // ADD INPUT POST (GENERATE ORTESYS)
  // ADD INPUTS RESET
  router.push("/manage");
};

const toggleShowRefImg = () => {
  showRefImg.value = !showRefImg.value;
};
</script>
