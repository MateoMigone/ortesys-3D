<template>
  <div class="flex flex-col gap-6">
    <Button
      text="Voltar"
      color="red"
      class="w-[230px] text-[15px]"
      @click="setFileSelected(false)"
    />
    <div class="flex gap-[7%] overflow-x-auto">
      <form class="min-w-[46.5%]">
        <div
          class="flex flex-col gap-5 bg-white px-12 py-10 rounded-xl mb-[20px]"
        >
          <Button
            text="Arquivo A"
            color="primary"
            class="w-full text-[15px]"
            @click.prevent="handleUpdateFileInput"
          />
          <input type="file" ref="updateFileInput" class="hidden" />

          <Button
            text="Remover arquivo"
            color="red"
            class="w-full text-[15px]"
          />

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Custo</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite um número"
            />
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Preço</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite um número"
            />
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Material</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite o material"
            />
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Tempo</label
            >
            <input
              type="text"
              class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5"
              placeholder="Digite o tempo"
            />
          </div>
        </div>

        <div
          class="flex flex-col gap-5 min-w-[46.5%] bg-white px-12 py-10 rounded-xl mb-[20px]"
        >
          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Palma</label
            >
            <div class="flex gap-3">
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Min:"
              />
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Max:"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Punho</label
            >
            <div class="flex gap-3">
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Min:"
              />
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Max:"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Linhas</label
            >
            <div class="flex gap-3">
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Min:"
              />
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Max:"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1.5 2xl:gap-2 w-full">
            <label class="font-bold text-[#2D5893] text-lg 2xl:text-xl"
              >Antebraços
            </label>
            <div class="flex gap-3">
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Min:"
              />
              <input
                type="text"
                class="rounded-md border-[1px] border-[#CDCEE4] bg-[#FCFCFF] px-3.5 py-1 2xl:py-1.5 w-1/2"
                placeholder="Max:"
              />
            </div>
          </div>

          <Button
            text="Salvar"
            color="secondary"
            class="w-full text-[15px]"
            @click.prevent=""
          />
        </div>
      </form>

      <div
        class="min-w-[46.5%] h-full bg-white px-12 py-10 rounded-xl mb-[20px]"
      >
        <Button
          text="Adicionar arquivo"
          color="green"
          class="w-full text-[15px]"
          @click="handleNewFileInput"
        />
        <input type="file" ref="newFileInput" class="hidden" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { setFileSelected } = defineProps(["setFileSelected"]);

const updateFileInput = ref(null);
const newFileInput = ref(null);

const handleUpdateFileInput = () => {
  updateFileInput.value.click();
};

const handleNewFileInput = () => {
  newFileInput.value.click();
};
</script>

<style scoped></style>
