<template>
  <i :class="'ms-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'MsIcon',

    props: {
      name: String
    }
  };
</script>
