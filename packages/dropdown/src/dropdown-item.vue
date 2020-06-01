<template>
  <li
    class="ms-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'ms-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'msun-lib-ui/shared/mixins/emitter';

  export default {
    name: 'MsDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('MsDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
