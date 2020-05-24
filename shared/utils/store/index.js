import Vue from 'vue';
import Vuex from 'vuex';
import route from './src/route';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    route: route
  }
});
