import MsTimePicker from '../date-picker/src/picker/time-picker';

/* istanbul ignore next */
MsTimePicker.install = function(Vue) {
  Vue.component(MsTimePicker.name, MsTimePicker);
};

export default MsTimePicker;
