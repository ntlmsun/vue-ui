import Vue from 'vue';
import Vuex from 'vuex';
import App from './src/app';
import ErrorLog from './src/error-log';
import Route from './src/route';
import Settings from './src/settings';
import TagsView from './src/tags-view';
import User from './src/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    App: App,
    ErrorLog: ErrorLog,
    Route: Route,
    Settings: Settings,
    TagsView: TagsView,
    User: User
  }
});
