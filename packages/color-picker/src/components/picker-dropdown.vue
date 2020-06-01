<template>
  <transition name="ms-zoom-in-top" @after-leave="doDestroy">
    <div class="ms-color-dropdown" v-show="showPopper">
      <div class="ms-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="ms-color-dropdown__btns">
        <span class="ms-color-dropdown__value">
          <ms-input v-model="customInput" @keyup.native.enter="handleConfirm" @blur="handleConfirm" :validate-event="false" size="mini">
          </ms-input>
        </span>
        <ms-button size="mini" type="text" class="ms-color-dropdown__link-btn" @click="$emit('clear')">
          {{ t('msun.colorpicker.clear') }}
        </ms-button>
        <ms-button plain size="mini" class="ms-color-dropdown__btn" @click="confirmValue">
          {{ t('msun.colorpicker.confirm') }}
        </ms-button>
      </div>
    </div>
  </transition>
</template>

<script>
import SvPanel from './sv-panel';
import HueSlider from './hue-slider';
import AlphaSlider from './alpha-slider';
import Predefine from './predefine';
import Popper from 'msun-lib-ui/shared/utils/vue-popper';
import Locale from 'msun-lib-ui/shared/mixins/locale';
import MsInput from 'msun-lib-ui/packages/input';
import MsButton from 'msun-lib-ui/packages/button';

export default {
  name: 'PickerDropdown',

  mixins: [Popper, Locale],

  components: {
    SvPanel,
    HueSlider,
    AlphaSlider,
    MsInput,
    MsButton,
    Predefine
  },

  props: {
    color: {
      required: true
    },
    showAlpha: Boolean,
    predefine: Array
  },

  data() {
    return {
      customInput: ''
    };
  },

  computed: {
    currentColor() {
      const parent = this.$parent;
      return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
    }
  },

  methods: {
    confirmValue() {
      this.$emit('pick');
    },

    handleConfirm() {
      this.color.fromString(this.customInput);
    }
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$el;
  },

  watch: {
    showPopper(val) {
      if (val === true) {
        this.$nextTick(() => {
          const { sl, hue, alpha } = this.$refs;
          sl && sl.update();
          hue && hue.update();
          alpha && alpha.update();
        });
      }
    },

    currentColor: {
      immediate: true,
      handler(val) {
        this.customInput = val;
      }
    }
  }
};
</script>
