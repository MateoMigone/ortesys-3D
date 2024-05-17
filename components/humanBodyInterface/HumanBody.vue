<template>
  <!-- Main body -->
  <div class="relative" v-show="defaultView">
    <img
      src="../../assets/imgs/humanBody/blue/completeBody.svg"
      alt=""
      class="h-[552px]"
    />
    <HumanHead />
    <HumanAbs />
    <RightArm :zoomIn="zoomInRightArm" />
    <LeftArm :zoomIn="zoomInLeftArm" />
    <RightLeg :zoomIn="zoomInRightLeg" />
    <LeftLeg :zoomIn="zoomInLeftLeg" />
  </div>

  <!-- Zoomed right arm -->
  <div class="relative w-full" v-show="rightArmZoom">
    <div
      class="absolute top-[85px] left-[-20px] bg-[#112621] z-20 p-6 pl-[90px] rounded-r-xl"
    >
      <Button
        text="Voltar"
        color="secondary-dark"
        class="w-[100px]"
        @click="zoomOutRightArm"
      />
    </div>
    <RightArmZoom />
  </div>

  <!-- Zoomed left arm -->
  <div class="relative w-full" v-show="leftArmZoom">
    <div
      class="absolute top-[85px] right-[-20px] bg-[#112621] z-20 p-6 pr-[90px] rounded-l-xl"
    >
      <Button
        text="Voltar"
        color="secondary-dark"
        class="w-[100px]"
        @click="zoomOutLeftArm"
      />
    </div>
    <LeftArmZoom />
  </div>

  <!-- Zoomed right leg -->
  <div class="relative w-full" v-show="rightLegZoom">
    <div
      class="absolute top-[85px] left-[-20px] bg-[#112621] z-20 p-6 pl-[90px] rounded-r-xl"
    >
      <Button
        text="Voltar"
        color="secondary-dark"
        class="w-[100px]"
        @click="zoomOutRightLeg"
      />
    </div>
    <RightLegZoom />
  </div>

  <!-- Zoomed left leg -->
  <div class="relative w-full" v-show="leftLegZoom">
    <div
      class="absolute top-[85px] right-[-20px] bg-[#112621] z-20 p-6 pr-[90px] rounded-l-xl"
    >
      <Button
        text="Voltar"
        color="secondary-dark"
        class="w-[100px]"
        @click="zoomOutLeftLeg"
      />
    </div>
    <LeftLegZoom />
  </div>
</template>

<script setup>
const defaultView = ref(true);
const rightArmZoom = ref(false);
const leftArmZoom = ref(false);
const rightLegZoom = ref(false);
const leftLegZoom = ref(false);

const zoomOutRightArm = () => {
  rightArmZoom.value = false;
  defaultView.value = true;
};

const zoomInRightArm = () => {
  rightArmZoom.value = true;
  defaultView.value = false;
};

const zoomOutLeftArm = () => {
  leftArmZoom.value = false;
  defaultView.value = true;
};

const zoomInLeftArm = () => {
  leftArmZoom.value = true;
  defaultView.value = false;
};

const zoomOutRightLeg = () => {
  rightLegZoom.value = false;
  defaultView.value = true;
};

const zoomInRightLeg = () => {
  rightLegZoom.value = true;
  defaultView.value = false;
};

const zoomOutLeftLeg = () => {
  leftLegZoom.value = false;
  defaultView.value = true;
};

const zoomInLeftLeg = () => {
  leftLegZoom.value = true;
  defaultView.value = false;
};
</script>

<style scoped></style>
