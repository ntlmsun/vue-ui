<template>
  <div :class="{'msun-hamburger_active': isActive}" @click="toggleClick">
    <svg-icon class="msun-hamburger_icon" :name="type" :width="width" :height="height"></svg-icon>
  </div>
</template>
<script>
export default {
  name: 'MsunHamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: true
    },
    type: {
      type: String,
      default: 'hamburger',
      required: false
    },
    width: {
      type: String,
      default: '20',
      required: false
    },
    height: {
      type: String,
      default: '20',
      required: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick');
    }
  }
};
</script>