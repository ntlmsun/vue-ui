import { addResizeListener, removeResizeListener } from 'msun-lib-ui/shared/utils/resize-event';
import scrollbarWidth from 'msun-lib-ui/shared/utils/scrollbar-width';
import { toObject } from 'msun-lib-ui/shared/utils/util';
import Bar from './bar';

/* istanbul ignore next */
export default {
  name: 'MsScrollbar',

  components: { Bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },

  computed: {
    wrap() {
      return this.$refs.wrap;
    }
  },

  render(h) {
    let gutter = scrollbarWidth();
    let style = this.wrapStyle;

    if (gutter) {
      const gutterWith = `-${gutter}px`;

      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      }
    }
    const view = h(
      this.tag,
      {
        class: ['ms-scrollbar__view', this.viewClass],
        style: this.viewStyle,
        ref: 'resize'
      },
      this.$slots.default
    );
    const wrap = (
      <div ref="wrap" style={style} onScroll={this.handleScroll} class={[this.wrapClass, 'ms-scrollbar__wrap', gutter ? '' : 'ms-scrollbar__wrap--hidden-default']}>
        {[view]}
      </div>
    );
    let nodes;

    if (!this.native) {
      nodes = [wrap, <Bar move={this.moveX} size={this.sizeWidth} />, <Bar vertical move={this.moveY} size={this.sizeHeight} />];
    } else {
      nodes = [
        <div ref="wrap" class={[this.wrapClass, 'ms-scrollbar__wrap']} style={style}>
          {[view]}
        </div>
      ];
    }
    return h('div', { class: 'ms-scrollbar' }, nodes);
  },

  methods: {
    handleScroll() {
      const wrap = this.wrap;

      this.moveY = (wrap.scrollTop * 100) / wrap.clientHeight;
      this.moveX = (wrap.scrollLeft * 100) / wrap.clientWidth;
    },

    update() {
      let heightPercentage, widthPercentage;
      const wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight;
      widthPercentage = (wrap.clientWidth * 100) / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && addResizeListener(this.$refs.resize, this.update);
  },

  beforeDestroy() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  }
};
