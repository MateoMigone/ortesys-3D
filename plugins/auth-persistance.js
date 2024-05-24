import piniaPersistedState from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(piniaPersistedState);
});
