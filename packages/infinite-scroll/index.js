import InfiniteScroll from './src/index.js';

/* istanbul ignore next */
InfiniteScroll.install = function(Vue) {
  Vue.directive(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
