import MsDatePicker from './src/picker/date-picker';

/* istanbul ignore next */
MsDatePicker.install = function install(Vue) {
  Vue.component(MsDatePicker.name, MsDatePicker);
};

export default MsDatePicker;
