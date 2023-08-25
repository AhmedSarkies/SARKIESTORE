import Vue from "vue";
import Vuex from "vuex";

import admin from "./Admin";
import client from "./Client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    admin,
    client,
  },
});
