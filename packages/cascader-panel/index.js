import MsCascaderPanel from './src/cascader-panel';

/* istanbul ignore next */
MsCascaderPanel.install = function(Vue) {
  Vue.component(MsCascaderPanel.name, MsCascaderPanel);
};

export default MsCascaderPanel;
