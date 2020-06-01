import MsSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
MsSubmenu.install = function(Vue) {
  Vue.component(MsSubmenu.name, MsSubmenu);
};

export default MsSubmenu;
