import Cookie from 'msun-lib-ui/shared/utils/cookie/index';

const App = {
  state: {
    sidebar: {
      opened: Cookie.getSidebarStatus() !== 'closed',
      withoutAnimation: false
    },
    device: 'Desktop',
    language: 'zn-CN',
    size: Cookie.getSize() || 'medium',
    customFontSize: Number(Cookie.getFontSize()) || 16
  },
  mutations: {
    TOGGLE_SIDEBAR(state, { withoutAnimation } = option) {
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = withoutAnimation;
      if (state.sidebar.opened) {
        Cookie.setSidebarStatus('opened');
      } else {
        Cookie.setSidebarStatus('closed');
      }
    },
    CLOSE_SIDEBAR(state, { withoutAnimation } = option) {
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
      Cookie.setSidebarStatus('closed');
    },
    TOGGLE_DEVICE(state, { device } = option) {
      state.device = device;
    },
    SET_LANGUAGE(state, { language } = option) {
      state.language = language;
      Cookie.setLanguage(language);
    },
    SET_SIZE(state, { size } = option) {
      state.size = size;
      Cookie.setSize(size);
    },
    SET_FONTSIZE(state, { fontSize } = option) {
      state.customFontSize = fontSize;
      Cookie.setFontSize(fontSize);
    }
  },
  actions: {
    ToggleSideBar(content, { withoutAnimation } = option) {
      content.commit('TOGGLE_SIDEBAR', { withoutAnimation: withoutAnimation });
    },
    CloseSideBar(content, { withoutAnimation } = option) {
      content.commit('CLOSE_SIDEBAR', { withoutAnimation: withoutAnimation });
    },
    ToggleDevice(content, { device } = option) {
      content.commit('TOGGLE_DEVICE', { device: device });
    },
    SetLanguage(content, { language } = option) {
      content.commit('SET_LANGUAGE', { language: language });
    },
    SetSize(content, { size } = option) {
      content.commit('SET_SIZE', { size: size });
    },
    SetFontSize(content, { fontSize } = option) {
      content.commit('SET_FONTSIZE', { fontSize: fontSize });
    }
  }
};

export default App;
