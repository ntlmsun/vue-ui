import MsOption from '../select/src/option';

/* istanbul ignore next */
MsOption.install = function(Vue) {
  Vue.component(MsOption.name, MsOption);
};

export default MsOption;
