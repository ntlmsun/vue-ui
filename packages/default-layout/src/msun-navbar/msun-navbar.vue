<template>
  <div class="msun-default-layout_navbar">
    <msun-hamburger :is-active="sidebar.opened" class="msun-hamburger_container" @toggleClick="toggleSideBar"></msun-hamburger>
    <msun-bread-crumb class="msun-breadCrumb-container"></msun-bread-crumb>
    <div class="msun-right-menu">
      <template v-if="device !== 'Mobile'">
        <msun-error-log class="msun-error-container right-menu-item msun-hover-effect"></msun-error-log>
      </template>
      <ms-dropdown class="msun-avatar-container right-menu-item msun-hover-effect" trigger="click">
        <div class="msun-avatar-wrapper">
          <img :src="avator" class="msun-user-avatar">
          <i class="ms-icon-caret-bottom" />
        </div>
        <ms-dropdown-menu slot="dropdown">
          <router-link to="/">
            <ms-dropdown-item>{{ $t("navbar.dashboard") }}</ms-dropdown-item>
          </router-link>
          <ms-dropdown-item divided @click.native="logout">
            <span class="msun-dropdown-status">{{ t("navbar.logOut") }}</span>
          </ms-dropdown-item>
        </ms-dropdown-menu>
      </ms-dropdown>
    </div>
  </div>
</template>
<script>
import MsunHamburger from './msun-hamburger.vue';
import MsunBreadCrumb from './msun-bread-crumb.vue';
import MsunErrorLog from './msun-error-log.vue';
import MsDropdown from 'msun-lib-ui/packages/dropdown';
import MsDropdownMenu from 'msun-lib-ui/packages/dropdown-menu';
import MsDropdownItem from 'msun-lib-ui/packages/dropdown-item';
import { t } from 'msun-lib-ui/shared/locale';
import Locale from 'msun-lib-ui/shared/mixins/locale';

export default {
  name: 'MsunNavbar',
  mixins: [Locale],
  data() {
    return {
      avator: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    };
  },
  components: {
    MsunHamburger,
    MsunBreadCrumb,
    MsunErrorLog,
    MsDropdown,
    MsDropdownMenu,
    MsDropdownItem
  },
  computed: {
    sidebar() {
      return this.$mStore.state.App.sidebar;
    },
    device() {
      return this.$mStore.state.App.device.toString();
    }
  },
  methods: {
    toggleSideBar() {
      this.$mStore.dispatch('ToggleSideBar', { withoutAnimation: false });
    },
    logOut() {
      this.$mStore.dispatch('LogOut');
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>