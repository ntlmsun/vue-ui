<template>
  <section class="msun-default-layout_content" :style="{fontSize: customFontSize + 'px'}">
    <transition name="msun-fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'MsunContent',
  computed: {
    customFontSize() {
      return this.$mStore.state.App.customFontSize;
    },
    cachedViews() {
      return this.$mStore.state.TagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    }
  }
};
</script> 