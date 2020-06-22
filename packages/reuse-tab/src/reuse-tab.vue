<template>
  <div class="ms-reuse-tab">
    <scroll-pane ref="scrollPane" class="ms-reuse-tab__wrapper">
      <router-link v-for="tag in visitedViews" ref="tag" :key="tag.path" :class="[isActive(tag) ? 'active' : '', isAffix(tag) ? '' : 'close']" :style="{fontSize: customFontSize + 'px'}" :to="{path: tag.path}" tag="span" class="ms-reuse-tab__item" @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''" @contextmenu.prevent.native="openMenu(tag, $event)">
        {{ tag.title }}
        <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{left: left + 'px', top: top + 'px'}" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">
        {{ $t('tagsView.refresh') }}
      </li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        {{
          $t('tagsView.close') }}
      </li>
      <li @click="closeOthersTags">
        {{ $t('tagsView.closeOthers') }}
      </li>
      <li @click="closeAllTags(selectedTag)">
        {{ $t('tagsView.closeAll') }}
      </li>
    </ul>
  </div>
</template>
<script>
import path from 'path';
import ScrollPane from './scroll-pane.vue';

export default {
  name: 'ReuseTab',
  components: {
    ScrollPane
  },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: [],
      affixTags: []
    };
  },
  computed: {
    customFontSize() {
      return (this.$mStore.state.App.customFontSize / 24) * 16;
    },
    visitedViews() {
      return this.$mStore.state.ReuseTab.visitedViews;
    },
    routes() {
      return this.$mStore.state.Route.routes;
    }
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu());
      } else {
        document.body.removeEventListener('click', this.closeMenu());
      }
    }
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(tag) {
      return tag && tag.affix;
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            path: tagPath,
            title: route.name,
            affix: true
          });
        }
        if (route.children) {
          const childTags = this.filterAffixTags(route.children, route.path);
          if (childTags.length >= 1) {
            tags = [...tags, ...childTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      this.affixTags = this.filterAffixTags(this.routes);
      for (const tag of this.affixTags) {
        if (tag.title) {
          this.$mStore.dispatch('AddVisitedView', { view: tag });
        }
      }
    },
    addTags() {
      const { name, fullPath, meta } = this.$route;
      if (name) {
        const view = {
          title: name,
          path: fullPath,
          affix: meta.affix
        };
        this.$mStore.dispatch('AddView', { view: view });
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            if (tag.to.path !== this.$route.fullPath) {
              this.$mStore.dispatch('UpdateVisitedView', { view: this.$route });
            }
            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      this.$mStore.dispatch('DelCachedView', { view: view });
      const { path } = view;
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + path
        });
      });
    },
    closeSelectedTag(view) {
      this.$mStore.dispatch('DelView', { view: view });
      if (this.isActive(view)) {
        this.toLastView(this.$mStore.state.ReuseTab.visitedViews, view);
      }
    },
    closeOthersTags() {
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + this.selectedTag.path
        });
      });
      this.$mStore.dispatch('DelOthersViews', { view: this.selectedTag });
      this.moveToCurrentTag();
    },
    closeAllTags(view) {
      this.$mStore.dispatch('DelAllViews');
      if (this.affixTags.some(tag => tag.path === this.$route.path)) {
        return;
      }
      this.toLastView(this.$mStore.state.ReuseTab.visitedViews, view);
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        if (view.title === 'Dashboard') {
          this.$router.replace({ path: '/redirect' + view.path });
        } else {
          this.$router.push('/');
        }
      }
    },
    openMenu(tag, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left;
      const offsetWidth = this.$el.offsetWidth;
      const maxLeft = offsetWidth - menuMinWidth;
      const left = e.clientX - offsetLeft + 15;
      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }
      this.top = e.clientY - 64;
      this.visible = true;
      this.selectedTag = tag;
    },
    closeMenu() {
      this.visible = false;
    }
  }
};
</script>