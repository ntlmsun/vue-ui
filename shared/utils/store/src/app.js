import Cookie from 'msun-lib-ui/shared/utils/cookie/index';

/**
 * @description 应用信息, 配置当前应用信息
 * @param sidebar 侧边栏
 * @param layout => theme-top-layout | theme-left-layout 排版设置
 * @param title  => 应用标题
 * @param image  => 页面图片
 * @param device => Desktop | Mobile 显示模式
 * @param language => zh-CN 语言
 * @param size medium | small | mini 大小尺寸
 * @param customFontSize 自定义字体大小
 * @function ToggleSideBar 侧边栏属性
 * @function CloseSideBar 关闭侧边栏
 * @function SetLayout 设置布局
 * @function SetTitle 设置标签
 * @function ToggleDevice 设置显示模式
 * @function SetLanguage 设置语言
 * @function SetSize 设置布局大小
 * @function SetFontSize 设置字体大小
 */
const App = {
  state: {
    sidebar: {
      opened: Cookie.getSidebarStatus() !== 'closed',
      withoutAnimation: false
    },
    header: {
      sidebar: true,
      read: true,
      home: true,
      notice: true
    },
    page: {
      title: null
    },
    layout: 'theme-top-layout',
    title: '标题名称',
    image: null,
    device: 'Desktop',
    language: 'zh-CN',
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
    SET_HEADER(state, { header } = option) {
      const { key, value } = header;
      if (Object.prototype.hasOwnProperty.call(state.header, key)) {
        state.header[key] = value;
      }
    },
    SET_PAGE(state, { page } = option) {
      const { key, value } = page;
      if (Object.prototype.hasOwnProperty.call(state.page, key)) {
        state.page[key] = value;
      }
    },
    SET_LAYOUT(state, { layout } = option) {
      state.layout = layout;
    },
    SET_TITLE(state, { title } = option) {
      state.title = title;
    },
    SET_IMAGE(state, { image } = option) {
      state.image = image;
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
    SetHeader(content, { header } = option) {
      content.commit('SET_HEADER', { header });
    },
    SetPage(content, { page } = option) {
      content.commit('SET_PAGE', { page });
    },
    SetLayout(content, { layout } = option) {
      content.commit('SET_LAYOUT', { layout: layout });
    },
    SetTitle(content, { title } = option) {
      content.commit('SET_TITLE', { title });
    },
    SetImage(content, { image } = option) {
      content.commit('SET_IMAGE', { image: image });
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
