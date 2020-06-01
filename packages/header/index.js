import MsHeader from './src/index';

/* istanbul ignore next */
MsHeader.install = function(Vue) {
  Vue.component(MsHeader.name, MsHeader);
};

export default MsHeader;
