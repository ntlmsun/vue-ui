import MsBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
MsBreadcrumb.install = function(Vue) {
  Vue.component(MsBreadcrumb.name, MsBreadcrumb);
};

export default MsBreadcrumb;
