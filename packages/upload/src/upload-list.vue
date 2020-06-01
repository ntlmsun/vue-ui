<template>
  <transition-group tag="ul" :class="['ms-upload-list', 'ms-upload-list--' + listType, { 'is-disabled': disabled }]" name="ms-list">
    <li v-for="file in files" :class="['ms-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']" :key="file.uid" tabindex="0" @keydown.delete="!disabled && $emit('remove', file)" @focus="focusing = true" @blur="focusing = false" @click="focusing = false">
      <slot :file="file">
        <img class="ms-upload-list__item-thumbnail" v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1" :src="file.url" alt="">
        <a class="ms-upload-list__item-name" @click="handleClick(file)">
          <i class="ms-icon-document"></i>{{file.name}}
        </a>
        <label class="ms-upload-list__item-status-label">
          <i :class="{
            'ms-icon-upload-success': true,
            'ms-icon-circle-check': listType === 'text',
            'ms-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }"></i>
        </label>
        <i class="ms-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
        <i class="ms-icon-close-tip" v-if="!disabled">{{ t('msun.upload.deleteTip') }}</i>
        <ms-progress v-if="file.status === 'uploading'" :type="listType === 'picture-card' ? 'circle' : 'line'" :stroke-width="listType === 'picture-card' ? 6 : 2" :percentage="parsePercentage(file.percentage)">
        </ms-progress>
        <span class="ms-upload-list__item-actions" v-if="listType === 'picture-card'">
          <span class="ms-upload-list__item-preview" v-if="handlePreview && listType === 'picture-card'" @click="handlePreview(file)">
            <i class="ms-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="ms-upload-list__item-delete" @click="$emit('remove', file)">
            <i class="ms-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
import Locale from 'msun-lib-ui/shared/mixins/locale';
import MsProgress from 'msun-lib-ui/packages/progress';

export default {
  name: 'MsUploadList',

  mixins: [Locale],

  data() {
    return {
      focusing: false
    };
  },
  components: { MsProgress },

  props: {
    files: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handlePreview: Function,
    listType: String
  },
  methods: {
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleClick(file) {
      this.handlePreview && this.handlePreview(file);
    }
  }
};
</script>
