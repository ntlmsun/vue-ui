<template>
  <div :class="{'has-logo': showLogo}">
    <msun-sidebar-logo v-if="showLogo" :collapse="isCollapse"></msun-sidebar-logo>
    <ms-scrollbar wrap-class="scrollbar-wrapper">
      <ms-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBackground" :text-color="variables.menuText" :active-text-color="menuActiveTextColor" :unique-opened="false" :collapse-transition="false" mode="vertical">
        <msun-sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" :is-collapse="isCollapse"></msun-sidebar-item>
      </ms-menu>
    </ms-scrollbar>
  </div>
</template>
<script>
import MsunSidebarItem from './msun-sidebar-item.vue';
import MsunSidebarLogo from './msun-sidebar-logo.vue';
import MsScrollbar from 'msun-lib-ui/packages/scrollbar';
import MsMenu from 'msun-lib-ui/packages/menu';

export default {
  name: 'MsunSidebar',
  components: {
    MsunSidebarItem,
    MsunSidebarLogo,
    MsScrollbar,
    MsMenu
  },
  computed: {
    sidebar() {
      return this.$mStore.state.App.sidebar;
    },
    routes() {
      return this.$mStore.state.Route.routes;
    },
    showLogo() {
      return this.$mStore.state.Settings.showSidebarLogo;
    },
    menuActiveTextColor() {
      if (this.$mStore.state.Settings.sidebarTextTheme) {
        return this.$mStore.state.Settings.theme;
      } else {
        return this.$mStore.state.Menu.variables.menuActiveText;
      }
    },
    variables() {
      return this.$mStore.state.Menu.variables;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>