import Settings from './src/index';

/* istanbul ignore next */
Settings.install = function(Vue) {
  Vue.component(Settings.name, Settings);
};

export default Settings;
