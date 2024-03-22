<template>
  <div
    class="flex flex-col justify-evenly items-center rounded-2xl bg-white p-6 gap-5"
  >
    <!-- Form header -->
    <div
      class="flex flex-col justify-center items-center rounded-2xl w-full border-[1px] border-[#D9D9D9] gap-2 p-5"
    >
      <input
        type="text"
        value="Nome da impressora"
        class="font-bold text-[27px] xl text-[#2D5893] text-center"
      />
      <div class="flex justify-center gap-2.5">
        <Button text="Importar" color="purple w-[165px] h-[40px]" />
        <select name="ab" id="ab" class="border-2 rounded-lg px-3">
          <option value="default" disabled selected hidden>Selecionar</option>
          <option value="printer1">Impressora 1</option>
          <option value="printer2">Impressora 2</option>
          <option value="printer3">Impressora 3</option>
        </select>
      </div>
    </div>

    <!-- Form body -->
    <div
      class="flex justify-center items-center border-[1px] border-[#D9D9D9] rounded-2xl w-full"
    >
      <div
        class="flex flex-col items-center justify-between w-full max-w-[830px] px-20 py-8 gap-8"
      >
        <h3 class="text-2xl font-bold text-[#2D5893]">
          Configuração de impressão
        </h3>

        <div class="flex gap-4 flex-col w-full">
          <div class="flex gap-16 2xl:gap-20 w-full">
            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="xWidth"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >X (width)</label
              >
              <input
                id="xWidth"
                type="text"
                placeholder="Largura em mm"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>

            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="xWidthMin"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >X (min)</label
              >
              <input
                id="xWidthMin"
                type="text"
                placeholder="Em mm"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>
          </div>

          <div class="flex gap-16 2xl:gap-20 w-full">
            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="yDepth"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >Y (depth)</label
              >
              <input
                id="yDepth"
                type="text"
                placeholder="Profundidade em mm"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>

            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="yDepthMin"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >Y (min)</label
              >
              <input
                id="yDepthMin"
                type="text"
                placeholder="Em mm"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>
          </div>
          <div class="flex gap-16 2xl:gap-20 w-full">
            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="zHeight"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >Z (height)</label
              >
              <input
                id="zHeight"
                type="text"
                placeholder="Altura em mm"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>

            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="zHeightMax"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >Z (max)</label
              >
              <input
                id="zHeightMax"
                type="text"
                placeholder="Em mm"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>
          </div>

          <div class="flex gap-16 2xl:gap-20 w-full">
            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="buildPlateType"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >Build Plate Type</label
              >
              <select
                id="buildPlateType"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none px-3.5 py-1.5 2xl:py-2"
              >
                <option selected value="skirt">Skirt</option>
              </select>
            </div>

            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="gantryHeight"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >Gantry Height</label
              >
              <input
                id="gantryHeight"
                type="text"
                placeholder="Em mm"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>
          </div>

          <div class="flex gap-16 2xl:gap-20 w-full">
            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="gcodeFlavor"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >G-CODE Flavor</label
              >
              <select
                id="gcodeFlavor"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] appearance-none px-3.5 py-1.5 2xl:py-2"
              >
                <option selected value="marlin">Marlin</option>
              </select>
            </div>

            <div class="flex flex-col gap-2 2xl:gap-2.5 w-1/2">
              <label
                for="numExtruders"
                class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                >N° of Extruders</label
              >
              <input
                id="numExtruders"
                type="text"
                placeholder="1"
                class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
              />
            </div>
          </div>

          <div class="flex gap-16 2xl:gap-20 w-full mt-2">
            <div class="flex flex-col gap-2 w-1/2">
              <p class="font-bold">Build plate shape:</p>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="originCenter"
                  name="buildPlateShape"
                  value="originCenter"
                />
                <label for="originCenter" class="font-semibold"
                  >Origin at center</label
                >
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="heatedBed"
                  name="buildPlateShape"
                  value="heatedBed"
                />
                <label for="heatedBed" class="font-semibold">Heated bed</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="heatedBuildVolume"
                  name="buildPlateShape"
                  value="heatedBuildVolume"
                />
                <label for="heatedBuildVolume" class="font-semibold"
                  >Heated build volume</label
                >
              </div>
            </div>

            <div class="flex flex-col gap-5 w-1/2">
              <div class="flex gap-2">
                <input
                  type="radio"
                  id="extruderOffsetGcode"
                  name="extruderOffsetGcode"
                  value="extruderOffsetGcode"
                />
                <label for="extruderOffsetGcode" class="font-semibold"
                  >Apply extruder offset Gcode</label
                >
              </div>

              <div class="flex flex-col gap-2 2xl:gap-2.5">
                <label
                  for="materialDiameter"
                  class="font-bold text-[#2D5893] text-center text-lg 2xl:text-xl"
                  >Material Diameter</label
                >
                <input
                  id="materialDiameter"
                  type="text"
                  class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-3 w-full">
          <h3 class="text-xl font-bold text-[#2D5893]">Start Gcode</h3>
          <textarea
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] w-full h-[120px] px-5 py-2"
          >
G28 ; Home
G1 Z15.0 F1200 ; Move the platform down 15mm
; Prime the extruder
G92 E0
G1 F200 E3
G92 E0
        </textarea
          >
        </div>
        <div class="flex flex-col justify-center items-center gap-3 w-full">
          <h3 class="text-xl font-bold text-[#2D5893]">End Gcode</h3>
          <textarea
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] w-full h-[120px] px-5 py-2"
          >
G28 ; Home
G1 Z15.0 F1200 ; Move the platform down 15mm
; Prime the extruder
G92 E0
G1 F200 E3
G92 E0
        </textarea
          >
        </div>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex items-center justify-between gap-10 2xl:gap-2.5">
            <label
              for="nozzleSize"
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl w-1/2"
              >Nozzle Size</label
            >
            <input
              id="nozzleSize"
              type="text"
              placeholder="1"
              class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2 w-1/2"
            />
          </div>

          <div class="flex items-center justify-between gap-10 2xl:gap-2.5">
            <label
              for="compatibleMaterialDiameter"
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl w-1/2"
              >Compatible material diameter</label
            >
            <input
              id="compatibleMaterialDiameter"
              type="text"
              placeholder="1.75"
              class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2 w-1/2"
            />
          </div>

          <div class="flex items-center justify-between gap-10 2xl:gap-2.5">
            <label
              for="nozzleOffsetX"
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl w-1/2"
              >Nozzle offset X</label
            >
            <input
              id="nozzleOffsetX"
              type="text"
              placeholder="0"
              class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2 w-1/2"
            />
          </div>

          <div class="flex items-center justify-between gap-10 2xl:gap-2.5">
            <label
              for="nozzleOffsetY"
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl w-1/2"
              >Nozzle offset Y</label
            >
            <input
              id="nozzleOffsetY"
              type="text"
              placeholder="0"
              class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2 w-1/2"
            />
          </div>

          <div class="flex items-center justify-between gap-10 2xl:gap-2.5">
            <label
              for="coolingFanNumber"
              class="font-bold text-[#2D5893] text-lg 2xl:text-xl w-1/2"
              >Cooling Fan Number</label
            >
            <input
              id="coolingFanNumber"
              type="text"
              placeholder="1"
              class="text-center rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] p-2 w-1/2"
            />
          </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-3 w-full">
          <h3 class="text-xl font-bold text-[#2D5893]">
            Extruder Start G-code
          </h3>
          <textarea
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] w-full h-[120px] px-5 py-2"
          >
G28 ; Home
G1 Z15.0 F1200 ; Move the platform down 15mm
; Prime the extruder
G92 E0
G1 F200 E3
G92 E0
        </textarea
          >
        </div>
        <div class="flex flex-col justify-center items-center gap-3 w-full">
          <h3 class="text-xl font-bold text-[#2D5893]">Extruder End G-code</h3>
          <textarea
            class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] w-full h-[120px] px-5 py-2"
          >
G28 ; Home
G1 Z15.0 F1200 ; Move the platform down 15mm
; Prime the extruder
G92 E0
G1 F200 E3
G92 E0
        </textarea
          >
        </div>

        <!-- Form buttons -->
        <div class="flex justify-between h-[40px] gap-2">
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
  </div>
</template>

<script setup></script>

<style scoped></style>
