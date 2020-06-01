import MsAlert from './src/index';

/* istanbul ignore next */
MsAlert.install = function(Vue) {
  Vue.component(MsAlert.name, MsAlert);
};

export default MsAlert;
