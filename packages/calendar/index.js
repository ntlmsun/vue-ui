import MsCalendar from './src/calendar';

/* istanbul ignore next */
MsCalendar.install = function(Vue) {
  Vue.component(MsCalendar.name, MsCalendar);
};

export default MsCalendar;
