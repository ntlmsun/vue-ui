import DefaultLayout from './src/index';

/* istanbul ignore next */
DefaultLayout.install = function(Vue) {
  Vue.component(DefaultLayout.name, DefaultLayout);
};

export default DefaultLayout;
