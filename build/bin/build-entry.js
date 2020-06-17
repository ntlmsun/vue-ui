var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

var OUTPUT_PATH = path.join(__dirname, '../../shared/index.js');
var IMPORT_TEMPLATE = "import {{name}} from '../packages/{{package}}/index.js';";
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}
import oAxiosInterceptor from '../shared/utils/axios/axios.js';
import { Startup } from '../shared/utils/axios/startup.js';
import mStore from '../shared/utils/store/index.js';
import Http from '../shared/utils/http/index.js';
import Convert from '../shared/utils/convert/index.js';
import Cookie from '../shared/utils/cookie/index.js';
import Permission from '../shared/utils/permission/permission.js';
import ElementUI from 'element-ui';
import '../packages/icons/components';
import SvgIcon from 'vue-svgicon';
import Router from 'vue-router';
import * as directives from '../shared/directives';

const components = [
{{install}}
];

const install = function(Vue) {
  
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })
  
  Vue.use(ElementUI, {
    size: mStore.state.App.size
  })

  Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em'
  });  

  Vue.use(Router);

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
  version: '{{version}}',
  install,
  Http,
  Convert,
  Cookie,
  mStore,
  Permission,
{{list}}
};
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );

  if (['Message'].indexOf(componentName) === -1) {
    installTemplate.push(
      render(INSTALL_COMPONENT_TEMPLATE, {
        name: componentName,
        component: name
      })
    );
  }

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);
