import MsTag from './src/index';

/* istanbul ignore next */
MsTag.install = function(Vue) {
  Vue.component(MsTag.name, MsTag);
};

export default MsTag;
