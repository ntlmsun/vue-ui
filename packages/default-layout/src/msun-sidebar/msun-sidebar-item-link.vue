<template>
  <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot></slot>
  </a>
  <router-link v-else :to="to">
    <slot></slot>
  </router-link>
</template>
<script>
import isExternal from 'msun-lib-ui/shared/utils/validate.js';
export default {
  name: 'MsunSidebarItemLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isExternal: isExternal
    };
  }
};
</script>