import MsInput from './src/index';

/* istanbul ignore next */
MsInput.install = function(Vue) {
  Vue.component(MsInput.name, MsInput);
};

export default MsInput;
