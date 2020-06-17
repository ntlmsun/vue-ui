<template>
  <div class="msun-default-layout-sidebar-logo-container" :class="{collapse: collapse}">
    <transition name="msun-sidaber-logo-fade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img src="favicon.ico" class="sidebar-logo">
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img src="favicon.ico" class="sidebar-logo">
        <h1 class="sidebar-title">
          {{ title }}
        </h1>
      </router-link>
    </transition>
  </div>
</template>
<script>
import settings from 'msun-lib-ui/shared/utils/settings/settings';

export default {
  name: 'MsunSidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: settings.title
    };
  }
};
</script>