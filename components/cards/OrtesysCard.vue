<template>
  <div class="bg-white shadow-sm rounded-2xl w-[100%] py-[38px]">
    <div class="flex items-center justify-center gap-8 h-full px-6 2xl:gap-14">
      <img
        class="h-56"
        src="../../assets/imgs/ortesys-arm.png"
        alt="Ortesys Arm"
      />

      <div
        class="flex flex-col justify-between h-[85%] max-w-[175px] 2xl:max-w-[240px]"
      >
        <div>
          <h2 class="text-3xl font-bold text-[#131E41]">{{ title }}</h2>
          <p class="text-[#131E41] font-medium mt-2 leading-5">
            {{ description }}
          </p>
        </div>

        <div class="w-40 h-10 mt-4">
          <NuxtLink to="/newOrtesys/1">
            <Button
              text="Personalizar"
              color="purple"
              class="w-[170px] h-[40px]"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { title, description } = defineProps(["title", "description"]);
</script>
