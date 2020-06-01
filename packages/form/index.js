import MsForm from './src/form';

/* istanbul ignore next */
MsForm.install = function(Vue) {
  Vue.component(MsForm.name, MsForm);
};

export default MsForm;
