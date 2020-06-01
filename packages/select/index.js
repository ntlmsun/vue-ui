import MsSelect from './src/select';

/* istanbul ignore next */
MsSelect.install = function(Vue) {
  Vue.component(MsSelect.name, MsSelect);
};

export default MsSelect;
