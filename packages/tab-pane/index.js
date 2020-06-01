import MsTabPane from '../tabs/src/tab-pane.vue';

/* istanbul ignore next */
MsTabPane.install = function(Vue) {
  Vue.component(MsTabPane.name, MsTabPane);
};

export default MsTabPane;
