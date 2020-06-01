import MsDropdown from './src/dropdown';

/* istanbul ignore next */
MsDropdown.install = function(Vue) {
  Vue.component(MsDropdown.name, MsDropdown);
};

export default MsDropdown;
