import MsPopconfirm from './src/index';

/* istanbul ignore next */
MsPopconfirm.install = function(Vue) {
  Vue.component(MsPopconfirm.name, MsPopconfirm);
};

export default MsPopconfirm;
