import MsDialog from './src/index';

/* istanbul ignore next */
MsDialog.install = function(Vue) {
  Vue.component(MsDialog.name, MsDialog);
};

export default MsDialog;
