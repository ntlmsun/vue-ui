import MsMain from './src/index';

/* istanbul ignore next */
MsMain.install = function(Vue) {
  Vue.component(MsMain.name, MsMain);
};

export default MsMain;
