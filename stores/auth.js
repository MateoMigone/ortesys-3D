import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login(error) {
      if (!error) {
        this.isAuthenticated = true;
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
  persist: true,
});
