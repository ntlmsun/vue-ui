<template>
  <div :class="ntClass" class="msun-default-layout-wrapper">
    <div v-if="ntClass['msun-default-layout-mobile'] && sidebar.opened" class="msun-default-layout-drawer" @click="ntClickOutSide"></div>
    <msun-sidebar class="msun-default-layout-sidebar-container"></msun-sidebar>
    <div :class="{'msun-default-layout-has-tags-view': showTagsView}" class="msun-default-layout-main-container">
      <div :class="{'msun-default-layout-fixed-header': fixedHeader}">
        <msun-navbar></msun-navbar>
        <msun-tags-view v-if="showTagsView"></msun-tags-view>
      </div>
      <msun-content></msun-content>
    </div>
  </div>
</template>
<script>
import MsunContent from './msun-content/msun-content.vue';
import MsunNavbar from './msun-navbar/msun-navbar.vue';
import MsunSidebar from './msun-sidebar/msun-sidebar.vue';
import MsunTagsView from './msun-tags-view/msun-tags-view.vue';
import ResizeMixin from './mixin/resize.js';
import mStore from 'msun-lib-ui/shared/utils/store';

export default {
  name: 'MsunDefaultLayout',
  components: {
    MsunContent,
    MsunNavbar,
    MsunSidebar,
    MsunTagsView
  },
  mixins: [ResizeMixin],
  computed: {
    ntClass() {
      return {
        'msun-default-layout-hide-sidebar': !this.sidebar.opened,
        'msun-default-layout-open-sidebar': this.sidebar.opened,
        'msun-default-layout-without-animation': this.sidebar.withoutAnimation,
        'msun-default-layout-mobile': this.device === 'Mobile'
      };
    },
    showTagsView() {
      return mStore.state.Settings.showTagsView;
    },
    fixedHeader() {
      return mStore.state.Settings.fixedHeader;
    }
  },
  methods: {
    ntClickOutSide() {
      mStore.dispatch('CloseSideBar', { withoutAnimation: false });
    }
  }
};
</script>