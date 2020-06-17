<template>
  <theme-top-layout></theme-top-layout>
</template>

<script>
import ThemeTopLayout from './theme-top-layout/index.vue';

export default {
  name: 'Layout',
  components: {
    ThemeTopLayout
  },
  computed: {
    getLayout() {
      return this.$mStore.state.App.layout;
    }
  }
};
</script>
