import MsOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
MsOptionGroup.install = function(Vue) {
  Vue.component(MsOptionGroup.name, MsOptionGroup);
};

export default MsOptionGroup;
