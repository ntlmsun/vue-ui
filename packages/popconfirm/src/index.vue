<template>
  <ms-popover v-bind="$attrs" v-model="visible" trigger="click">
    <div class="ms-popconfirm">
      <p class="ms-popconfirm__main">
        <i v-if="!hideIcon" :class="icon" class="ms-popconfirm__icon" :style="{color: iconColor}"></i>
        {{ title }}
      </p>
      <div class="ms-popconfirm__action">
        <ms-button size="mini" :type="cancelButtonType" @click="cancel">
          {{ cancelButtonText }}
        </ms-button>
        <ms-button size="mini" :type="confirmButtonType" @click="confirm">
          {{ confirmButtonText }}
        </ms-button>
      </div>
    </div>
    <slot name="reference" slot="reference"></slot>
  </ms-popover>
</template>

<script>
import MsPopover from 'msun-lib-ui/packages/popover';
import MsButton from 'msun-lib-ui/packages/button';
import { t } from 'msun-lib-ui/shared/locale';

export default {
  name: 'MsPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t('msun.popconfirm.confirmButtonText')
    },
    cancelButtonText: {
      type: String,
      default: t('msun.popconfirm.cancelButtonText')
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'ms-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MsPopover,
    MsButton
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
};
</script>
