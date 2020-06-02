<template>
  <div v-if="!item.meta || !item.meta.hidden" :class="[isCollapse ? 'msun-default-layout-simple-mode' : 'msun-default-layout-full-mode', {'first-level': isFirstLevel}]">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <msun-sidebar-item-link v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
        <ms-menu-item :index="resolvePath(theOnlyOneChild.path)" :class="{'submenu-title-noDropdown': isFirstLevel}" :style="{fontSize: customFontSize + 'px'}">
          <svg-icon v-if="theOnlyOneChild.meta.icon" :name="theOnlyOneChild.meta.icon"></svg-icon>
          <span v-if="theOnlyOneChild.meta.title" slot="title">
            {{ $t('route.' + theOnlyOneChild.meta.title) }}
          </span>
        </ms-menu-item>
      </msun-sidebar-item-link>
    </template>
    <ms-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <svg-icon v-if="item.meta && item.meta.icon" :name="item.meta.icon"></svg-icon>
        <span v-if="item.meta && item.meta.title" slot="title" :style="{fontSize: customFontSize + 'px'}">
          {{ t('route.' + item.meta.title) }}
        </span>
      </template>
      <template v-if="item.children">
        <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :is-collapse="isCollapse" :is-first-level="false" :base-path="resolvePath(child.path)" :style="{fontSize: customFontSize + 'px'}" class="nest-menu">
        </sidebar-item>
      </template>
    </ms-submenu>
  </div>
</template>
<script>
import path from 'path';
import MsunSidebarItemLink from './msun-sidebar-item-link.vue';
import isExternal from 'msun-lib-ui/shared/utils/validate.js';
import MsMenuItem from 'msun-lib-ui/packages/menu-item';
import MsSubmenu from 'msun-lib-ui/packages/submenu';
import { t } from 'msun-lib-ui/shared/locale';
import Locale from 'msun-lib-ui/shared/mixins/locale';

export default {
  components: {
    MsunSidebarItemLink,
    MsMenuItem,
    MsSubmenu
  },
  mixins: [Locale],
  props: {
    item: {
      type: Object,
      required: true
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    isFirstLevel: {
      type: Boolean,
      default: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    customFontSize() {
      return this.$mStore.state.App.customFontSize;
    },
    alwaysShowRootMenu() {
      if (this.item.meta && this.item.meta.alwaysShow) {
        return true;
      } else {
        return false;
      }
    },
    showingChildNumber() {
      if (this.item.children) {
        const showingChildren = this.item.children.filter(item => {
          if (item.meta && item.meta.hidden) {
            return false;
          } else {
            return true;
          }
        });
        return showingChildren.length;
      }
      return 0;
    },
    theOnlyOneChild() {
      if (this.showingChildNumber > 1) {
        return null;
      }
      if (this.item.children) {
        for (const child of this.item.children) {
          if (!child.meta || !child.meta.hidden) {
            return child;
          }
        }
      }
      return { ...this.item, path: '' };
    }
  },
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>