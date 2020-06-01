<template>

</template>
<script>
export default {
  name: 'Layout',
  computed: {
    getLayout() {
      return this.$mStore.state.App.layout;
    },
    getTitle() {
      return this.$mStore.state.App.title;
    }
  }
};
</script>
