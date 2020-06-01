import MsTree from './src/tree';

/* istanbul ignore next */
MsTree.install = function(Vue) {
  Vue.component(MsTree.name, MsTree);
};

export default MsTree;
