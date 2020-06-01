import MsDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
MsDropdownMenu.install = function(Vue) {
  Vue.component(MsDropdownMenu.name, MsDropdownMenu);
};

export default MsDropdownMenu;
