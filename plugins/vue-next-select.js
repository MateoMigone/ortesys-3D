import VueNextSelect from "vue-next-select";
import "vue-next-select/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VueNextSelect", VueNextSelect);
});
