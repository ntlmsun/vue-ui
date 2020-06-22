import Vue from 'vue';
import Vuex from 'vuex';
import App from './src/app';
import ErrorLog from './src/error-log';
import Menu from './src/menu';
import Permission from './src/permission';
import ReuseTab from './src/reuse-tab';
import Route from './src/route';
import Settings from './src/settings';
import User from './src/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    App: App,
    ErrorLog: ErrorLog,
    Menu: Menu,
    Permission: Permission,
    ReuseTab: ReuseTab,
    Route: Route,
    Settings: Settings,
    User: User
  }
});
