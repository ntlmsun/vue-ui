<template>
  <theme-top-layout></theme-top-layout>
</template>

<script>
import mStore from 'msun-lib-ui/shared/utils/store';
import ThemeTopLayout from './theme-top-layout/index.vue';

export default {
  name: 'Layout',
  components: {
    ThemeTopLayout
  },
  computed: {
    getLayout() {
      return mStore.state.App.layout;
    }
  }
};
</script>
