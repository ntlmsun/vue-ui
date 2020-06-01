import MsAutocomplete from './src/autocomplete';

/* istanbul ignore next */
MsAutocomplete.install = function(Vue) {
  Vue.component(MsAutocomplete.name, MsAutocomplete);
};

export default MsAutocomplete;
