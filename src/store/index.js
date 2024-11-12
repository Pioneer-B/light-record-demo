import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  // state是一个函数，返回一个对象
  state: () => {
    return {
      token: "",
    };
  },
  getters: {},
  actions: {},
});
