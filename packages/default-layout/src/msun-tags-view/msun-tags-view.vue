<template>
  <div id="tags-view-container" class="tags-view-container">
    <msun-scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link v-for="tag in visitedViews" ref="tag" :key="tag.path" :class="isActive(tag) ? 'active' : ''" :style="{fontSize: customFontSize + 'px'}" :to="{path: tag.path, query: tag.query, fullPath: tag.fullPath}" tag="span" class="tags-view-item" @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''" @contextmenu.prevent.native="openMenu(tag, $event)">
        {{ t('route.' + tag.meta.title) }}
        <span v-if="!isAffix(tag)" class="ms-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </msun-scroll-pane>
    <ul v-show="visible" :style="{left: left + 'px', top: top + 'px'}" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">
        {{ t('tagsView.refresh') }}
      </li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        {{ t('tagsView.close') }}
      </li>
      <li @click="closeOthersTags">
        {{ t('tagsView.closeOthers') }}
      </li>
      <li @click="closeAllTags(selectedTag)">
        {{ t('tagsView.closeAll') }}
      </li>
    </ul>
  </div>
</template>
<script>
import MsunScrollPane from './msun-scroll-pane.vue';
import { t } from 'msun-lib-ui/shared/locale';
import Locale from 'msun-lib-ui/shared/mixins/locale';
import path from 'path';

export default {
  name: 'MsunTagsView',
  components: {
    MsunScrollPane
  },
  mixins: [Locale],
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
      return this.$mStore.state.TagsView.visitedViews;
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
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
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
        if (tag.name) {
          TagsViewModule.addVisitedView(tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        TagsViewModule.addView(this.$route);
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag);
            if (tag.to.fullPath !== this.$route.fullPath) {
              TagsViewModule.updateVisitedView(this.$route);
            }
            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      TagsViewModule.delCachedView(view);
      const { fullPath } = view;
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        });
      });
    },
    closeSelectedTag(view) {
      TagsViewModule.delView(view);
      if (this.isActive(view)) {
        this.toLastView(TagsViewModule.visitedViews, view);
      }
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag);
      TagsViewModule.delOthersViews(this.selectedTag);
      this.moveToCurrentTag();
    },
    closeAllTags(view) {
      TagsViewModule.delAllViews();
      if (this.affixTags.some(tag => tag.path === this.$route.path)) {
        return;
      }
      this.toLastView(TagsViewModule.visitedViews, view);
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        if (view.name === 'Dashboard') {
          this.$router.replace({ path: '/redirect' + view.fullPath });
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
      this.top = e.clientY;
      this.visible = true;
      this.selectedTag = tag;
    },
    closeMenu() {
      this.visible = false;
    }
  }
};
</script>