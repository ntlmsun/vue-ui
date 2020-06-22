<template>
  <div class="ms-layout-default">
    <div class="ms-layout-left">
      <div class="ms-layout-left__top__header">
        <svg-icon name="logo" width="48" height="48"></svg-icon>
        <span>{{ title }}</span>
      </div>
      <div class="ms-layout-left__top__content">
        <ul class="ms-layout-left__nav">
          <li v-if="sidebar" :class="{'ms-layout-left__active': isCollapse}" @click="setSettings">
            <svg-icon class="ms-layout-left__svg-icon" name="hamburger" width="62" height="60"></svg-icon>
          </li>
        </ul>
        <ms-layout-search v-if="read"></ms-layout-search>
        <ul class="ms-layout-left__nav">
          <ms-layout-desktop v-if="home"></ms-layout-desktop>
          <ms-layout-workbench></ms-layout-workbench>
          <ms-layout-remind v-if="notice"></ms-layout-remind>
          <ms-layout-avatar></ms-layout-avatar>
        </ul>
      </div>
    </div>
    <reuse-tab v-if="showTagsView"></reuse-tab>
    <section class="ms-layout-left__content" :class="[showTagsView ? 'ms-layout-left__has-reuse' : '']" :style="{fontSize: customFontSize + 'px'}">
      <transition name="msun-fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>
<script>
import MsLayoutWorkbench from './ms-layout-workbench.vue';
import MsLayoutDesktop from './ms-layout-desktop.vue';
import MsLayoutSearch from './ms-layout-search.vue';
import MsLayoutRemind from './ms-layout-remind.vue';
import MsLayoutAvatar from './ms-layout-avatar.vue';
import ReuseTab from 'msun-lib-ui/packages/reuse-tab';

export default {
  name: 'ThemeTopLayout',
  components: {
    MsLayoutDesktop,
    MsLayoutWorkbench,
    MsLayoutSearch,
    MsLayoutRemind,
    MsLayoutAvatar,
    ReuseTab
  },
  computed: {
    topicImage() {
      return this.$mStore.state.App.image;
    },
    title() {
      return this.$mStore.state.App.title;
    },
    isCollapse() {
      return this.$mStore.state.App.sidebar.opened;
    },
    customFontSize() {
      return this.$mStore.state.App.customFontSize;
    },
    showTagsView() {
      return this.$mStore.state.Settings.showTagsView;
    },
    cachedViews() {
      return this.$mStore.state.ReuseTab.cachedViews;
    },
    key() {
      return this.$route.path;
    },
    sidebar() {
      return this.$mStore.state.App.header.sidebar;
    },
    read() {
      return this.$mStore.state.App.header.read;
    },
    home() {
      return this.$mStore.state.App.header.home;
    },
    notice() {
      return this.$mStore.state.App.header.notice;
    }
  },
  methods: {
    setSettings() {
      this.$mStore.dispatch('ToggleSideBar', { withoutAnimation: false });
    }
  }
};
</script>
