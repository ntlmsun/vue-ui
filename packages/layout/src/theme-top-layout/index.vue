<template>
  <div>
    <div class="ms-layout-left">
      <div class="ms-layout-left__top__header">
        <img src="msun-lib-ui/public/assets/favicon.png" />
        <span>{{ title }}</span>
      </div>
      <div class="ms-layout-left__top__content">
        <ul class="ms-layout-left__nav">
          <li :class="{'ms-layout-left__active': isCollapse}" @click="setSettings">
            <svg-icon class="ms-layout-left__svg-icon" name="hamburger" width="62" height="30"></svg-icon>
          </li>
        </ul>
        <ms-layout-search></ms-layout-search>
        <ul class="ms-layout-left__nav">
          <ms-layout-desktop></ms-layout-desktop>
          <ms-layout-workbench></ms-layout-workbench>
          <ms-layout-remind></ms-layout-remind>
          <ms-layout-avatar></ms-layout-avatar>
        </ul>
      </div>
    </div>
    <section class="ms-layout-left__content" :style="{fontSize: customFontSize + 'px'}">
      <transition name="msun-fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>
<script>
import mStore from 'msun-lib-ui/shared/utils/store';
import MsLayoutWorkbench from './ms-layout-workbench.vue';
import MsLayoutDesktop from './ms-layout-desktop.vue';
import MsLayoutSearch from './ms-layout-search.vue';
import MsLayoutRemind from './ms-layout-remind.vue';
import MsLayoutAvatar from './ms-layout-avatar.vue';

export default {
  name: 'ThemeTopLayout',
  components: {
    MsLayoutDesktop,
    MsLayoutWorkbench,
    MsLayoutSearch,
    MsLayoutRemind,
    MsLayoutAvatar
  },
  computed: {
    title() {
      return mStore.state.App.title;
    },
    isCollapse() {
      return mStore.state.App.sidebar.opened;
    },
    customFontSize() {
      return mStore.state.App.customFontSize;
    },
    cachedViews() {
      return mStore.state.TagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    }
  },
  methods: {
    setSettings() {
      mStore.dispatch('ToggleSideBar', { withoutAnimation: false });
    }
  }
};
</script>
