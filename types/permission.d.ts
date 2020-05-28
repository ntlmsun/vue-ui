import VueI18n from 'vue-i18n';
import Router, { RouteConfig } from 'vue-router';

export interface MsunPermission {
  /** init */
  init(NProgress: any, i18n: VueI18n, router: Router, asyncRoutes: RouteConfig[], constantRoutes: RouteConfig[]): void;
}
