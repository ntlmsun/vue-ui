import MsTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
MsTimelineItem.install = function(Vue) {
  Vue.component(MsTimelineItem.name, MsTimelineItem);
};

export default MsTimelineItem;
