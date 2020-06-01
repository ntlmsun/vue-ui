import MsTimeSelect from '../date-picker/src/picker/time-select';

/* istanbul ignore next */
MsTimeSelect.install = function(Vue) {
  Vue.component(MsTimeSelect.name, MsTimeSelect);
};

export default MsTimeSelect;
