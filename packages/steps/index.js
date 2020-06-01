import MsSteps from './src/steps';

/* istanbul ignore next */
MsSteps.install = function(Vue) {
  Vue.component(MsSteps.name, MsSteps);
};

export default MsSteps;
