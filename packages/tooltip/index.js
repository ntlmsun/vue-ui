import MsTooltip from './src/index';

/* istanbul ignore next */
MsTooltip.install = function(Vue) {
  Vue.component(MsTooltip.name, MsTooltip);
};

export default MsTooltip;
