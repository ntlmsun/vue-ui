import MsSwitch from './src/index';

/* istanbul ignore next */
MsSwitch.install = function(Vue) {
  Vue.component(MsSwitch.name, MsSwitch);
};

export default MsSwitch;

