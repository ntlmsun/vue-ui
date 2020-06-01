import MsRadio from './src/radio';

/* istanbul ignore next */
MsRadio.install = function(Vue) {
  Vue.component(MsRadio.name, MsRadio);
};

export default MsRadio;
