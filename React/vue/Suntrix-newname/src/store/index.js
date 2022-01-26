import Vue from "vue";
import Vuex from "vuex";
import RAF from "./modules/RAF";
import Notify from "@/store/modules/Notify";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //! (RAF) -> (CC)
  },
  mutations: {},
  actions: {
    //! ЗДЕСЬ НАХОДЯТСЯ ТОЛЬКО ВАЖНЫЕ И РАНИМЫЕ ДЕЙСТВИЯ
    buttonMethod(state, method){
        method
    }
  },
  getters: {},
  modules: {
    RAF,
    Notify
  },
});
