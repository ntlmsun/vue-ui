import MsBacktop from './src/index';

/* istanbul ignore next */
MsBacktop.install = function(Vue) {
  Vue.component(MsBacktop.name, MsBacktop);
};

export default MsBacktop;
