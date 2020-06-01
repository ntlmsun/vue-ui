import MsTabs from './src/tabs';

/* istanbul ignore next */
MsTabs.install = function(Vue) {
  Vue.component(MsTabs.name, MsTabs);
};

export default MsTabs;
