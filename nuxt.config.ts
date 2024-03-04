export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/global.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
