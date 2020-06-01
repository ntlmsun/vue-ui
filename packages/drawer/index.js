import MsDrawer from './src/index';

/* istanbul ignore next */
MsDrawer.install = function(Vue) {
  Vue.component(MsDrawer.name, MsDrawer);
};

export default MsDrawer;
