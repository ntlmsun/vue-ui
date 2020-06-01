import MsTransfer from './src/transfer';

/* istanbul ignore next */
MsTransfer.install = function(Vue) {
  Vue.component(MsTransfer.name, MsTransfer);
};

export default MsTransfer;
