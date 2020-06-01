<template>
  <header class="ms-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'MsHeader',

    componentName: 'MsHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
