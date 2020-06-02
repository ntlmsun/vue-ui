<template>
  <ms-breadcrumb class="msun-bread-crumb" separator="/">
    <transition-group name="msun-breadCrumb">
      <ms-breadcrumb-item v-for="(item, index) in breadCrumbs" :key="item.path" :style="{fontSize: customFontSize + 'px'}">
        <span v-if="item.redirect === 'noredirect' || index === breadCrumbs.length - 1" class="msun-no-redirect">
          {{ t("route." + item.meta.title) }}
        </span>
        <a v-else @click.prevent="ntLink(item)">
          {{ t("route." + item.meta.title) }}
        </a>
      </ms-breadcrumb-item>
    </transition-group>
  </ms-breadcrumb>
</template>
<script>
import MsBreadcrumb from 'msun-lib-ui/packages/breadcrumb';
import MsBreadcrumbItem from 'msun-lib-ui/packages/breadcrumb-item';
import { t } from 'msun-lib-ui/shared/locale';
import Locale from 'msun-lib-ui/shared/mixins/locale';
const pathToRegexp = require('path-to-regexp');

export default {
  name: 'MsunBreadCrumb',
  components: {
    MsBreadcrumb,
    MsBreadcrumbItem
  },
  mixins: [Locale],
  data() {
    return {
      breadCrumbs: []
    };
  },
  computed: {
    customFontSize() {
      return this.$mStore.state.App.customFontSize;
    }
  },
  created() {
    this.getBreadCrumb();
  },
  watch: {
    $route(route) {
      if (route.path.startsWith('/redirect/')) {
        return;
      }
      this.getBreadCrumb();
    }
  },
  methods: {
    getBreadCrumb() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
      const first = matched[0];
      if (!this.isDashboard(first)) {
        matched = [
          {
            path: '/dashboard',
            meta: {
              title: 'dashboard'
            }
          }
        ].concat(matched);
      }
      this.breadCrumbs = matched.filter(item => {
        return item.meta && item.meta.title && item.meta.breadcrumb !== false;
      });
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
    },
    pathCompile(path) {
      const { params } = this.$route;
      const toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    ntLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    }
  }
};
</script>
