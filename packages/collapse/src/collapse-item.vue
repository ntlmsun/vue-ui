<template>
  <div class="ms-collapse-item" :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div role="tab" :aria-expanded="isActive" :aria-controls="`ms-collapse-content-${id}`" :aria-describedby="`ms-collapse-content-${id}`">
      <div class="ms-collapse-item__header" @click="handleHeaderClick" role="button" :id="`ms-collapse-head-${id}`" :tabindex="disabled ? undefined : 0" @keyup.space.enter.stop="handleEnterClick" :class="{
          'focusing': focusing,
          'is-active': isActive
        }" @focus="handleFocus" @blur="focusing = false">
        <slot name="title">{{title}}</slot>
        <i class="ms-collapse-item__arrow ms-icon-arrow-right" :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <ms-collapse-transition>
      <div class="ms-collapse-item__wrap" v-show="isActive" role="tabpanel" :aria-hidden="!isActive" :aria-labelledby="`ms-collapse-head-${id}`" :id="`ms-collapse-content-${id}`">
        <div class="ms-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </ms-collapse-transition>
  </div>
</template>
<script>
import MsCollapseTransition from 'msun-lib-ui/shared/transitions/collapse-transition';
import Emitter from 'msun-lib-ui/shared/mixins/emitter';
import { generateId } from 'msun-lib-ui/shared/utils/util';

export default {
  name: 'MsCollapseItem',

  componentName: 'MsCollapseItem',

  mixins: [Emitter],

  components: { MsCollapseTransition },

  data() {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block'
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId()
    };
  },

  inject: ['collapse'],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      }
    },
    disabled: Boolean
  },

  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    }
  },

  methods: {
    handleFocus() {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true;
        } else {
          this.isClick = false;
        }
      }, 50);
    },
    handleHeaderClick() {
      if (this.disabled) return;
      this.dispatch('MsCollapse', 'item-click', this);
      this.focusing = false;
      this.isClick = true;
    },
    handleEnterClick() {
      this.dispatch('MsCollapse', 'item-click', this);
    }
  }
};
</script>
