import MsTimeline from './src/main';

/* istanbul ignore next */
MsTimeline.install = function(Vue) {
  Vue.component(MsTimeline.name, MsTimeline);
};

export default MsTimeline;
