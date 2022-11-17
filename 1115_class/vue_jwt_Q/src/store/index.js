import Vue from "vue";
import Vuex from "vuex";

import bookStore from "@/store/modules/bookStore.js";
import userStore from "@/store/modules/userStore.js";

import { createVuexPersistedState } from "vue-persistedstate"; // vuex정보들이 localstorage에 저장

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createVuexPersistedState({
      Storage: window.localStorage,
    }),
  ],
  modules: { bookStore, userStore },
});
