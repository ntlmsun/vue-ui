import Vue from 'vue';
import directive from './src/directive';
import MsPopover from './src/index';

Vue.directive('popover', directive);

/* istanbul ignore next */
MsPopover.install = function(Vue) {
  Vue.directive('popover', directive);
  Vue.component(MsPopover.name, MsPopover);
};
MsPopover.directive = directive;

export default MsPopover;
