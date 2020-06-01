import MsContainer from './src/index';

/* istanbul ignore next */
MsContainer.install = function(Vue) {
  Vue.component(MsContainer.name, MsContainer);
};

export default MsContainer;
