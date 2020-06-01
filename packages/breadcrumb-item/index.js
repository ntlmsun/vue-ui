import MsBreadcrumbItem from '../breadcrumb/src/breadcrumb-item';

/* istanbul ignore next */
MsBreadcrumbItem.install = function(Vue) {
  Vue.component(MsBreadcrumbItem.name, MsBreadcrumbItem);
};

export default MsBreadcrumbItem;
