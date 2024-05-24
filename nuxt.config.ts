export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["@/assets/css/global.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    myProxyUrl: "https://ortesys.pro/api/v1",
  },
  plugins: ["~/plugins/auth-persistance.js"],
});
