import MsStep from '../steps/src/step';

/* istanbul ignore next */
MsStep.install = function(Vue) {
  Vue.component(MsStep.name, MsStep);
};

export default MsStep;
