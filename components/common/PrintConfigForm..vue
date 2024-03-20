<template>
  <div
    class="flex flex-col justify-evenly items-center w-[800px] h-[2198px] rounded-2xl border-2 bg-white"
  >
    <div
      class="flex flex-col justify-center items-center w-[747px] h-[157px] rounded-2xl border-[1px] border-[#D9D9D9] gap-[10px]"
    >
      <h2 class="font-bold text-3xl text-[#2D5893]">Nome da Impressora</h2>
      <div class="flex justify-center w-[515px] h-[40px] gap-2.5">
        <Button text="Importar" color="purple w-[165px] h-[40px]" />
        <div class="relative">
          <button
            class="w-[165px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] flex justify-between items-center px-3"
          >
            <span class="text-sm text-gray-700">Selecionar</span>
            <svg
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.76566 5C3.4746 5 3.19799 4.87319 3.00802 4.65267L0.295214 1.50354C-0.212769 0.913848 0.206172 0 0.984489 0C1.25278 0 1.5074 0.118424 1.68026 0.32361L3.41767 2.38593C3.50602 2.5 3.61647 2.64892 3.749 2.8327C3.88153 3.01014 4.01406 3.19392 4.14659 3.38403C4.2664 3.5559 4.37418 3.71224 4.46992 3.85303C4.48876 3.88073 4.52006 3.89734 4.55356 3.89734C4.58887 3.89734 4.62159 3.8789 4.64 3.84876C4.72155 3.71526 4.81478 3.56669 4.91968 3.40304C5.05221 3.21293 5.18474 3.02598 5.31727 2.84221C5.4498 2.65843 5.5676 2.50634 5.67068 2.38593L7.39441 0.317119C7.56183 0.116182 7.80986 0 8.0714 0C8.82632 0 9.23173 0.887286 8.73757 1.458L5.96977 4.65458C5.77982 4.87395 5.50395 5 5.21378 5H3.76566Z"
                fill="#CDCEE4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-between w-[747px] h-[1968px] border-[1px] border-[#D9D9D9] rounded-2xl"
    >
      <h3 class="text-2xl font-bold text-[#2D5893]">
        Configuração de impressão
      </h3>
      <div class="flex justify-evenly w-[747px]">
        <div class="flex flex-col items-center w-[250px] h-[615px] gap-6">
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">X (width)</span>
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]"
                >Largura em mm</span
              >
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">Y (depth)</span>
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]"
                >Profundidade em mm</span
              >
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">Z (height)</span>
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]"
                >Altura em mm</span
              >
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]"
              >Build Plate Type</span
            >
            <button
              class="relative flex justify-between items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3"
            >
              <span class="text-sm font-medium text-[#131E41]">Skirt</span>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute right-3"
              >
                <path
                  d="M1 1.75L4.8636 5.6136C5.21508 5.96508 5.78492 5.96508 6.1364 5.6136L10 1.75"
                  stroke="#2D5893"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">G-CODE Flavor</span>
            <button
              class="relative flex justify-between items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3"
            >
              <span class="text-sm font-medium text-[#131E41]">Marlin</span>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute right-3"
              >
                <path
                  d="M1 1.75L4.8636 5.6136C5.21508 5.96508 5.78492 5.96508 6.1364 5.6136L10 1.75"
                  stroke="#2D5893"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-col w-[173px] h-[116px] rounded-2xl gap-2.5">
            <span class="text-base font-semibold text-[#131E41]"
              >Build plate shape:</span
            >
            <div class="flex flex-col justify-evenly w-[173px] h-[82px]">
              <div class="flex gap-2.5">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.5" cy="8" r="7" stroke="#2D5893" />
                </svg>
                <span class="text-base font-medium text-[ #131E41]"
                  >Origin at center</span
                >
              </div>
              <div class="flex gap-2.5">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.5" cy="8" r="7" stroke="#2D5893" />
                </svg>
                <span class="text-base font-medium text-[ #131E41]"
                  >Heated bed</span
                >
              </div>
              <div class="flex gap-2.5">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.5" cy="8" r="7" stroke="#2D5893" />
                </svg>
                <span class="text-base font-medium text-[ #131E41]"
                  >Heated build volume</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-[250px] h-[615px] gap-6">
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">X (min)</span>
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]">Em mm</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">Y (min)</span>
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]">Em mm</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">x (max)</span>
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]">Em mm</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]">Gantry Height</span>
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]">Em mm</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]"
              >Nº of Extruders</span
            >
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]">1</span>
            </div>
          </div>
          <div class="flex justify-center w-[221px] h-[29px] gap-2.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="7" stroke="#2D5893" />
            </svg>
            <span class="text-base font-medium text-[#131E41]"
              >Aplly extruder offset Gcode
            </span>
          </div>
          <div class="flex flex-col items-center gap-4 w-[250px] h-[76px]">
            <span class="text-xl font-bold text-[#2D5893]"
              >Material Diameter</span
            >
            <div
              class="flex justify-center items-center w-[250px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
            >
              <span class="text-sm font-medium text-[#131E41]"></span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center w-[567px] h-[161px] gap-[18px]"
      >
        <h3 class="text-xl font-bold text-[#2D5893]">Start Gcode</h3>
        <div
          class="w-[567px] h-[123px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        ></div>
      </div>
      <div
        class="flex flex-col justify-center items-center w-[567px] h-[161px] gap-[18px]"
      >
        <h3 class="text-xl font-bold text-[#2D5893]">End Gcode</h3>
        <div
          class="w-[567px] h-[123px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        ></div>
      </div>
      <div class="flex justify-between w-[569px] h-[40px] text-justify">
        <span class="text-xl font-bold text-[#2D5893]">Nozzle size</span>
        <div
          class="flex items-center justify-center w-[273px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        >
          1
        </div>
      </div>
      <div class="flex justify-between w-[569px] h-[40px] text-justify">
        <span class="text-xl font-bold text-[#2D5893]"
          >Compatible material diameter</span
        >
        <div
          class="flex items-center justify-center w-[273px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        >
          1.75
        </div>
      </div>
      <div class="flex justify-between w-[569px] h-[40px] text-justify">
        <span class="text-xl font-bold text-[#2D5893]">Nozzle offset X </span>
        <div
          class="flex items-center justify-center w-[273px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        >
          0
        </div>
      </div>
      <div class="flex justify-between w-[569px] h-[40px] text-justify">
        <span class="text-xl font-bold text-[#2D5893]">Nozzle offset Y</span>
        <div
          class="flex items-center justify-center w-[273px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        >
          0
        </div>
      </div>
      <div class="flex justify-between w-[569px] h-[40px] text-justify">
        <span class="text-xl font-bold text-[#2D5893]">Cooling Fan Number</span>
        <div
          class="flex items-center justify-center w-[273px] h-[40px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        >
          0
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center w-[567px] h-[161px] gap-[18px]"
      >
        <h3 class="text-xl font-bold text-[#2D5893]">Extruder Start G-code</h3>
        <div
          class="w-[567px] h-[123px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        ></div>
      </div>
      <div
        class="flex flex-col justify-center items-center w-[567px] h-[161px] gap-[18px]"
      >
        <h3 class="text-xl font-bold text-[#2D5893]">Extruder End G-code</h3>
        <div
          class="w-[567px] h-[123px] rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF]"
        ></div>
      </div>
      <div class="flex justify-between w-[511px] h-[40px] gap-2">
        <Button text="Salvar" color="secondary" class="w-[165px] h-[40px]" />
        <Button
          text="Restaurar padrão"
          color="red"
          class="w-[165px] h-[40px]"
        />
        <Button
          text="Tornar padrão"
          color="yellow"
          class="w-[165px] h-[40px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
