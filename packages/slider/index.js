import MsSlider from './src/slider';

/* istanbul ignore next */
MsSlider.install = function(Vue) {
  Vue.component(MsSlider.name, MsSlider);
};

export default MsSlider;
