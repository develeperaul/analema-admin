import { defineStore } from "pinia";
import { auth, restore } from "src/api/auth";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    register: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },

    login: {
      email: "",
      password: "",
      emailValid: false,
      passwordValid: false,
    },
    restore: {
      email: "",

      emailValid: false,
    },
  }),
  getters: {},
  actions: {
    async authUser(email: string, pass: string) {
      return await auth(email, pass);
    },
    async restoreUser(email: string) {
      return await restore(email);
    },
  },
});
