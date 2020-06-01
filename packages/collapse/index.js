import MsCollapse from './src/collapse';

/* istanbul ignore next */
MsCollapse.install = function(Vue) {
  Vue.component(MsCollapse.name, MsCollapse);
};

export default MsCollapse;
