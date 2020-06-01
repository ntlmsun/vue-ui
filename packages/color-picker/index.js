import MsColorPicker from './src/index';

/* istanbul ignore next */
MsColorPicker.install = function(Vue) {
  Vue.component(MsColorPicker.name, MsColorPicker);
};

export default MsColorPicker;
