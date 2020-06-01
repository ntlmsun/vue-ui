<script>
export default {
  name: 'MsTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator(val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    handleClose(event) {
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$MSUN || {}).size;
    }
  },
  render(h) {
    const { type, tagSize, hit, effect } = this;
    const classes = ['ms-tag', type ? `ms-tag--${type}` : '', tagSize ? `ms-tag--${tagSize}` : '', effect ? `ms-tag--${effect}` : '', hit && 'is-hit'];
    const tagEl = (
      <span class={classes} style={{ backgroundColor: this.color }} on-click={this.handleClick}>
        {this.$slots.default}
        {this.closable && <i class="ms-tag__close ms-icon-close" on-click={this.handleClose}></i>}
      </span>
    );

    return this.disableTransitions ? tagEl : <transition name="ms-zoom-in-center">{tagEl}</transition>;
  }
};
</script>
