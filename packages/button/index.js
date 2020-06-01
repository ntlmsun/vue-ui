import MsuButton from './src/button';

/* istanbul ignore next */
MsuButton.install = function(Vue) {
  Vue.component(MsuButton.name, MsuButton);
};

export default MsuButton;
