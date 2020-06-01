import MsRate from './src/index';

/* istanbul ignore next */
MsRate.install = function(Vue) {
  Vue.component(MsRate.name, MsRate);
};

export default MsRate;
