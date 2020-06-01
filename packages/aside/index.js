import MsAside from './src/index';

/* istanbul ignore next */
MsAside.install = function(Vue) {
  Vue.component(MsAside.name, MsAside);
};

export default MsAside;
