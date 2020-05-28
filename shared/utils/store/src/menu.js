const Menu = {
  state: {
    variables: {
      menuBackground: '#304156',
      menuText: '#BFCDB9',
      menuActiveText: '#409EFF'
    }
  },
  mutations: {
    CHANGE_MENU_STYLES(state, { ntStyle } = option) {
      const { key, value } = ntStyle;
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = value;
      }
    }
  },
  actions: {
    ChangeMenuStyles(content, { ntStyle } = option) {
      content.commit('CHANGE_MENU_STYLES', { ntStyle: ntStyle });
    }
  }
};

export default Menu;
