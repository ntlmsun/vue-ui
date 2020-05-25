/* Automatically generated by './build/bin/build-entry.js' */

import Card from '../packages/card/index.js';
import oAxiosInterceptor from '../shared/utils/axios/axios.js';
import { Startup } from '../shared/utils/axios/startup.js';
import mStore from '../shared/utils/store/index.js';
import Http from '../shared/utils/http/index.js';
import Convert from '../shared/utils/convert/index.js';
import Cookie from '../shared/utils/cookie/index.js';

const components = [
  Card
];

const install = function(Vue) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$convert = Convert;
  Vue.prototype.$http = Http;
  Vue.prototype.$cookie = Cookie;
  Vue.prototype.$mStore = mStore;

  oAxiosInterceptor.init();

  Startup.bootstrap();
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.2',
  install,
  Http,
  Convert,
  Cookie,
  mStore,
  Card
};
