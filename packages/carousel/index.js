import MsCarousel from './src/carousel';

/* istanbul ignore next */
MsCarousel.install = function(Vue) {
  Vue.component(MsCarousel.name, MsCarousel);
};

export default MsCarousel;
