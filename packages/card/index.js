import MsCard from './src/index';

/* istanbul ignore next */
MsCard.install = function(Vue) {
  Vue.component(MsCard.name, MsCard);
};

export default MsCard;
