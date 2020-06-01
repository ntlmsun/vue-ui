import MsPagination from './src/pagination';

/* istanbul ignore next */
MsPagination.install = function(Vue) {
  Vue.component(MsPagination.name, MsPagination);
};

export default MsPagination;
