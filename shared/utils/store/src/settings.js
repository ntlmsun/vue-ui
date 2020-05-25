import defaultSettings from './../../settings/settings';

const Settings = {
  state: {
    theme: '',
    fixedHeader: defaultSettings.fixedHeader,
    showSettings: defaultSettings.showSettings,
    showTagsView: defaultSettings.showTagsView,
    showSidebarLogo: defaultSettings.showSidebarLogo,
    sidebarTextTheme: defaultSettings.sidebarTextTheme
  },
  mutations: {
    CHANGE_SETTING(state, { payload } = option) {
      const { key, value } = payload;
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = value;
      }
    }
  },
  actions: {
    ChangeSetting(content, { payload } = option) {
      content.commit('CHANGE_SETTING', { payload: payload });
    }
  }
};

export default Settings;
