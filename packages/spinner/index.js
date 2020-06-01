import MsSpinner from './src/index';

/* istanbul ignore next */
MsSpinner.install = function(Vue) {
  Vue.component(MsSpinner.name, MsSpinner);
};

export default MsSpinner;
