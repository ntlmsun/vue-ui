<script>
import Emitter from 'msun-lib-ui/shared/mixins/emitter';

export default {
  name: 'MsCheckboxGroup',

  componentName: 'MsCheckboxGroup',

  mixins: [Emitter],

  inject: {
    msFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _msFormItemSize() {
      return (this.msFormItem || {}).msFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._msFormItemSize || (this.$MSUN || {}).size;
    }
  },

  watch: {
    value(value) {
      this.dispatch('MsFormItem', 'el.form.change', [value]);
    }
  }
};
</script>

<template>
  <div class="ms-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
