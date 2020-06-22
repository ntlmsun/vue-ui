import ReuseTab from './src/reuse-tab';

/* istanbul ignore next */
ReuseTab.install = function(Vue) {
  Vue.component(ReuseTab.name, ReuseTab);
};

export default ReuseTab;
