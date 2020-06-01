<template>
  <aside class="ms-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script>
  export default {
    name: 'MsAside',
    componentName: 'MsAside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
