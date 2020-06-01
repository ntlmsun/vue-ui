<template>
  <button class="ms-button" @click="msClick" :disabled="buttonDisabled || loading" :autofocus="autofocus" :type="nativeType" 
    :class="[ type ? 'ms-button--' + type : '', buttonSize ? 'ms-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
    <i class="ms-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'MsButton',

  inject: {
    msForm: {
      default: ''
    },
    msFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _msFormItemSize() {
      return (this.msFormItem || {}).msFormItemSize;
    },
    buttonSize() {
      return this.size || this._msFormItemSize || (this.$MSUN || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.msForm || {}).disabled;
    }
  },

  methods: {
    msClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
