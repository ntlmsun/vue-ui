import mStore from './../store/index';

const Permission = () => {};
Permission.init = (NProgress, i18n, router, asyncRoutes, constantRoutes) => {
  const getPageTitle = () => {
    return mStore.state.App.page.title;
  };

  router.beforeEach((to, form, next) => {
    NProgress.start();
    mStore.dispatch('GenerateRoutes', { roles: [], asyncRoutes: asyncRoutes, constantRoutes: constantRoutes });
    next();
  });

  router.afterEach(to => {
    NProgress.done();
    document.title = getPageTitle();
  });
};

export default Permission;
