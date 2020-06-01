<template>
  <div class="ms-page-header">
    <div class="ms-page-header__left" @click="$emit('back')">
      <i class="ms-icon-back"></i>
      <div class="ms-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="ms-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'msun-lib-ui/shared/locale';
export default {
  name: 'MsPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('msun.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
