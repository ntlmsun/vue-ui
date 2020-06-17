import settings from 'msun-lib-ui/shared/utils/settings/settings';
import mStore from 'msun-lib-ui/shared/utils/store';

const Permission = () => {};
Permission.init = (NProgress, i18n, router, asyncRoutes, constantRoutes) => {
  const getPageTitle = key => {
    const hasKey = i18n.te(`route.${key}`);
    if (hasKey) {
      const pageName = i18n.t(`route.${key}`);
      return `${pageName} - ${settings.title}`;
    }
    return `${settings.title}`;
  };

  router.beforeEach((to, form, next) => {
    NProgress.start();
    mStore.dispatch('GenerateRoutes', { roles: [], asyncRoutes: asyncRoutes, constantRoutes: constantRoutes });
    next();
  });

  router.afterEach(to => {
    NProgress.done();
    document.title = getPageTitle(to.meta.title);
  });
};

export default Permission;
