<template>
  <footer class="ms-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'MsFooter',

    componentName: 'MsFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
