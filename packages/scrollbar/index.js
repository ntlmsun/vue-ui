import MsScrollbar from './src/main';

/* istanbul ignore next */
MsScrollbar.install = function(Vue) {
  Vue.component(MsScrollbar.name, MsScrollbar);
};

export default MsScrollbar;
