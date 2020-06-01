import MsBadge from './src/index';

/* istanbul ignore next */
MsBadge.install = function(Vue) {
  Vue.component(MsBadge.name, MsBadge);
};

export default MsBadge;
