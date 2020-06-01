import MsMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
MsMenuItem.install = function(Vue) {
  Vue.component(MsMenuItem.name, MsMenuItem);
};

export default MsMenuItem;
