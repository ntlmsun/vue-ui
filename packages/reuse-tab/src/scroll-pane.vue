<template>
  <ms-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot></slot>
  </ms-scrollbar>
</template>
<script>
import MsScrollbar from 'msun-lib-ui/packages/scrollbar';
const tagSpacing = 4;
export default {
  name: 'ScrollPane',
  components: {
    MsScrollbar
  },
  methods: {
    msScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40;
      const scrollContainer = this.$refs.scrollContainer;
      const scrollWrapper = scrollContainer.$refs.wrap;
      scrollWrapper.scrollLeft = scrollWrapper.scrollLeft + eventDelta / 4;
    },
    moveToTarget(currentTag) {
      const scrollContainer = this.$refs.scrollContainer;
      const container = scrollContainer.$el;
      const containerWidth = container.offsetWidth;
      const scrollWrapper = scrollContainer.$refs.wrap;
      const tagList = this.$parent.$refs.tag;

      let firstTag = null;
      let lastTag = null;

      if (tagList.length > 0) {
        firstTag = tagList[0];
        lastTag = tagList[tagList.length - 1];
      }

      if (firstTag === currentTag) {
        scrollWrapper.scrollLeft = 0;
      } else if (lastTag === currentTag) {
        scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - containerWidth;
      } else {
        const currentIndex = tagList.findIndex(item => item === currentTag);
        const prevTag = tagList[currentIndex - 1];
        const nextTag = tagList[currentIndex + 1];
        const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagSpacing;
        const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagSpacing;

        if (afterNextTagOffsetLeft > scrollWrapper.scrollLeft + containerWidth) {
          scrollWrapper.scrollLeft = afterNextTagOffsetLeft - containerWidth;
        } else if (beforePrevTagOffsetLeft < scrollWrapper.scrollLeft) {
          scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
        }
      }
    }
  }
};
</script>