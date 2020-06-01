import MsImage from './src/image';

/* istanbul ignore next */
MsImage.install = function(Vue) {
  Vue.component(MsImage.name, MsImage);
};

export default MsImage;
