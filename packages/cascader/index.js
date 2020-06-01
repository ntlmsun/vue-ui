import MsCascader from './src/index';

/* istanbul ignore next */
MsCascader.install = function(Vue) {
  Vue.component(MsCascader.name, MsCascader);
};

export default MsCascader;
