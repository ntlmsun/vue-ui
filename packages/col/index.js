import MsCol from './src/index';

/* istanbul ignore next */
MsCol.install = function(Vue) {
  Vue.component(MsCol.name, MsCol);
};

export default MsCol;

