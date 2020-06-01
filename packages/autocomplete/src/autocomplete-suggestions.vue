<template>
  <transition name="ms-zoom-in-top" @after-leave="doDestroy">
    <div v-show="showPopper" class="ms-autocomplete-suggestion ms-popper" :class="{ 'is-loading': !parent.hideLoading && parent.loading }" :style="{ width: dropdownWidth }" role="region">
      <ms-scrollbar tag="ul" wrap-class="ms-autocomplete-suggestion__wrap" view-class="ms-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="ms-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </ms-scrollbar>
    </div>
  </transition>
</template>
<script>
import Popper from 'msun-lib-ui/shared/utils/vue-popper';
import Emitter from 'msun-lib-ui/shared/mixins/emitter';
import MsScrollbar from 'msun-lib-ui/packages/scrollbar';

export default {
  name: 'MsAutocompleteSuggestions',

  components: { MsScrollbar },

  mixins: [Popper, Emitter],

  componentName: 'MsAutocompleteSuggestions',

  data() {
    return {
      parent: this.$parent,
      dropdownWidth: ''
    };
  },

  props: {
    options: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    id: String
  },

  methods: {
    select(item) {
      this.dispatch('MsAutocomplete', 'item-click', item);
    }
  },

  updated() {
    this.$nextTick(_ => {
      this.popperJS && this.updatePopper();
    });
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
    this.referenceList = this.$el.querySelector('.ms-autocomplete-suggestion__list');
    this.referenceList.setAttribute('role', 'listbox');
    this.referenceList.setAttribute('id', this.id);
  },

  created() {
    this.$on('visible', (val, inputWidth) => {
      this.dropdownWidth = inputWidth + 'px';
      this.showPopper = val;
    });
  }
};
</script>
