import MsCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
MsCarouselItem.install = function(Vue) {
  Vue.component(MsCarouselItem.name, MsCarouselItem);
};

export default MsCarouselItem;
