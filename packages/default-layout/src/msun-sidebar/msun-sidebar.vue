<template>
  <div :class="{'has-logo': showLogo}">
    <msun-sidebar-logo v-if="showLogo" :collapse="isCollapse"></msun-sidebar-logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBackground" :text-color="variables.menuText" :active-text-color="menuActiveTextColor" :unique-opened="false" :collapse-transition="false" mode="vertical">
        <msun-sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" :is-collapse="isCollapse"></msun-sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import variables from 'css-loader!msun-lib-ui/shared/styles/msun-variables.scss';
import MsunSidebarItem from './msun-sidebar-item.vue';
import MsunSidebarLogo from './msun-sidebar-logo.vue';

export default {
  name: 'MsunSidebar',
  components: {
    MsunSidebarItem,
    MsunSidebarLogo
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
        variables.menuActiveText;
      }
    },
    variables() {
      return variables;
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