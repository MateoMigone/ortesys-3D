<template>
  <div class="bg-white rounded-lg">
    <div
      class="flex justify-center items-center border-b-[4px] border-[#f4f4f4] p-5 cursor-pointer"
      :class="type === 'user' && 'p-6'"
      @click="toggle"
    >
      <div class="flex justify-center items-center gap-12">
        <div class="flex items-center">
          <!-- Card title -->
          <h2 class="text-2xl font-extrabold">{{ text }}</h2>
          <!-- Arrow icon -->
          <svg
            :class="{ rotate: isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2 transition-transform duration-500 mr-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </div>

        <!-- Show this buttons if the card is type "user" -->
        <div
          v-if="type === 'user'"
          class="grid grid-cols-4 gap-2.5 place-items-center"
        >
          <!-- Open update user info form button -->
          <NuxtLink to="/infoPanel/updateUser/id" class="w-full h-full">
            <Button text="Cadastro" color="purple" class="w-full h-full" />
          </NuxtLink>

          <!-- Open material modal button -->
          <Button
            text="Material"
            color="secondary"
            class="w-full h-full"
            @click.stop="openMaterialModal"
          />

          <!-- Open discount modal button -->
          <Button
            text="Desconto"
            color="secondary"
            class="w-full h-full"
            @click.stop="openDiscountModal"
          />

          <!-- Activate/deactivate user button -->
          <div class="w-[100px]">
            <Button
              text="Habilitar / Desabilitar"
              :color="userState ? 'secondary' : 'red'"
              class="leading-4"
              @click.stop="toggleUserState"
            />
          </div>

          <!-- Show clinic user and sub-users button if no clinic user is selected -->
          <Button
            v-if="clinicUser === ''"
            text="Funções"
            color="secondary"
            class="w-full h-full"
            @click.stop="setClinicUser(text)"
          />

          <!-- Open user role select button -->
          <Button
            text="Clinica"
            color="secondary"
            class="w-full h-full"
            @click.stop=""
          />

          <!-- Toggle PDO button -->
          <Button
            text="PDO"
            :color="userPDO ? 'secondary' : 'red'"
            class="w-full h-full"
            @click.stop="toggleUserPDO"
          />

          <!-- Remove user button -->
          <Button
            text="Remove"
            color="red"
            class="w-full h-full"
            @click.stop="openConfirmRemoveModal"
          />
        </div>
      </div>
    </div>

    <!-- Transition for user stats -->
    <transition
      name="expand"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="isOpen" class="content" key="content">
        <!-- User info card -->
        <InfoCard :type="type" />
      </div>
    </transition>

    <!-- Material modal shown if opened -->
    <MaterialModal
      :openRequest="showMaterialModal"
      :toggleModal="openMaterialModal"
    />

    <!-- Discount modal shown if opened -->
    <DiscountModal
      :openRequest="showDiscountModal"
      :toggleModal="openDiscountModal"
    />

    <!-- Confirm remove modal shown if opened -->
    <ConfirmRemoveModal
      :openRequest="showConfirmRemoveModal"
      :toggleModal="openConfirmRemoveModal"
    />
  </div>
</template>

<script setup>
const { text, type, clinicUser, setClinicUser } = defineProps([
  "text",
  "type",
  "clinicUser",
  "setClinicUser",
]);

// SHOULD RECEIVE THE STATS FOR THE SELECTED USER AND ORTESYS

const isOpen = ref(false);

const showMaterialModal = ref(false);
const showDiscountModal = ref(false);
const showConfirmRemoveModal = ref(false);

const userState = ref(true);
const userPDO = ref(false);

const openMaterialModal = () => {
  showMaterialModal.value = !showMaterialModal.value;
};

const openDiscountModal = () => {
  showDiscountModal.value = !showDiscountModal.value;
};

const openConfirmRemoveModal = () => {
  showConfirmRemoveModal.value = !showConfirmRemoveModal.value;
};

const toggleUserState = () => {
  userState.value = !userState.value;
};

const toggleUserPDO = () => {
  userPDO.value = !userPDO.value;
};

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
};

const enter = (el, done) => {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
  el.addEventListener("transitionend", done);
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
};

const leave = (el, done) => {
  el.style.height = "0";
  el.style.opacity = "0";
  el.addEventListener("transitionend", done);
};
</script>

<style scoped>
.rotate {
  transform: rotate(180deg);
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease, padding 0.5s ease, opacity 0.5s ease;
}
.expand-enter,
.expand-leave-to {
  height: 0;
  padding: 0;
  opacity: 0;
}
.content {
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease, opacity 0.5s ease;
}
</style>
