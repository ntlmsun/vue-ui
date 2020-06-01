import MsUpload from './src';

/* istanbul ignore next */
MsUpload.install = function(Vue) {
  Vue.component(MsUpload.name, MsUpload);
};

export default MsUpload;
