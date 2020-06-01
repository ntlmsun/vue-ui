import MsTable from './src/table';

/* istanbul ignore next */
MsTable.install = function(Vue) {
  Vue.component(MsTable.name, MsTable);
};

export default MsTable;
