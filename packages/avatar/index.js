import MsAvatar from './src/index';

/* istanbul ignore next */
MsAvatar.install = function(Vue) {
  Vue.component(MsAvatar.name, MsAvatar);
};

export default MsAvatar;
