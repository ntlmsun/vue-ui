import MsMenu from './src/menu';

/* istanbul ignore next */
MsMenu.install = function(Vue) {
  Vue.component(MsMenu.name, MsMenu);
};

export default MsMenu;
