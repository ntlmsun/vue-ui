import MsPageHeader from './src/index';

/* istanbul ignore next */
MsPageHeader.install = function(Vue) {
  Vue.component(MsPageHeader.name, MsPageHeader);
};

export default MsPageHeader;
