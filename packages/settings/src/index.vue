<template>

</template>
<script>
export default {
  name: 'Settings',
  methods: {
    setLayout(value) {
      this.$mStore.dispatch('SetLayout', { layout: value });
    },
    setFontSize(value) {
      this.$mStore.dispatch('SetFontSize', { fontSize: value });
    }
  }
};
</script>