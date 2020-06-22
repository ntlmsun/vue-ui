import SelectTableDrag from './src/index.js';

SelectTableDrag.install = function(Vue) {
    Vue.directive(SelectTableDrag.name, SelectTableDrag);
}

export default SelectTableDrag;
