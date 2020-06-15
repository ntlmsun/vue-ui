<template>
  <li v-if="!isDesktop" @click="toHomeView">
    <svg-icon class="ms-layout-left__svg-icon" name="desktop" width="62" height="60"></svg-icon>
  </li>
</template>
<script>
export default {
  name: 'MsLayoutDesktop',
  computed: {
    isDesktop() {
      return this.$route.name === 'Dashboard';
    }
  },
  methods: {
    toHomeView() {
      this.$router.push('/dashboard');
    }
  }
};
</script>
