import MsLink from './src/index';

/* istanbul ignore next */
MsLink.install = function(Vue) {
  Vue.component(MsLink.name, MsLink);
};

export default MsLink;
