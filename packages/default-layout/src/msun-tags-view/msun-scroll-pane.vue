<template>
  <ms-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="ntScroll">
    <slot></slot>
  </ms-scrollbar>
</template>
<script>
import MsScrollbar from 'msun-lib-ui/packages/scrollbar';
const tagSpacing = 4;

export default {
  name: 'MsunScrollPane',
  components: {
    MsScrollbar
  },
  methods: {
    ntScroll(e) {
      const eventDelta = e.wheelDelta || -e.delta.Y * 40;
      const scrollContainer = this.$refs.scrollContainer;
      const scrollWrapper = scrollContainer.$refs.wrap;
      scrollWrapper.scrollLeft = scrollWrapper.scrollLeft + eventDelta / 4;
    },
    ntMoveToTarget(currentTag) {
      const scrollContainer = this.$refs.scrollContainer;
      const container = scrollContainer.$el;
      const containerWidth = container.offsetWidth;
      const scrollWrapper = scrollContainer.$refs.wrap;
      const tagList = this.$parent.$refs.tag;

      let firstTag = null;
      let lastTag = null;

      // find first tag and last tag
      if (tagList.length > 0) {
        firstTag = tagList[0];
        lastTag = tagList[tagList.length - 1];
      }

      if (firstTag === currentTag) {
        scrollWrapper.scrollLeft = 0;
      } else if (lastTag === currentTag) {
        scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - containerWidth;
      } else {
        // find preTag and nextTag
        const currentIndex = tagList.findIndex(item => item === currentTag);
        const prevTag = tagList[currentIndex - 1];
        const nextTag = tagList[currentIndex + 1];
        // the tag's offsetLeft after of nextTag
        const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagSpacing;
        // the tag's offsetLeft before of prevTag
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