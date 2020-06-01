import MsProgress from './src/index';

/* istanbul ignore next */
MsProgress.install = function(Vue) {
  Vue.component(MsProgress.name, MsProgress);
};

export default MsProgress;
