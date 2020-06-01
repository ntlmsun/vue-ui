import MsTableColumn from '../table/src/table-column';

/* istanbul ignore next */
MsTableColumn.install = function(Vue) {
  Vue.component(MsTableColumn.name, MsTableColumn);
};

export default MsTableColumn;
