const WIDTH = 992;

const ResizeMixin = {
  computed: {
    device() {
      return this.$mStore.state.App.device;
    },
    sidebar() {
      return this.$mStore.state.App.sidebar;
    }
  },
  watch: {
    $route() {
      if (this.device === 'Mobile' && this.sidebar.opened) {
        this.$mStore.dispatch('CloseSideBar', { withoutAnimation: false });
      }
    }
  },
  mounted() {
    const isMobile = this.isMobile();
    if (isMobile) {
      this.$mStore.dispatch('ToggleDevice', { device: 'Mobile' });
      this.$mStore.dispatch('CloseSideBar', { withoutAnimation: true });
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler());
  },
  beforeDestory() {
    window.removeEventListener('resize', this.resizeHandler());
  },
  methods: {
    isMobile() {
      const rect = document.body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile();
        this.$mStore.dispatch('ToggleDevice', { device: isMobile ? 'Mobile' : 'Desktop' });
        if (isMobile) {
          this.$mStore.dispatch('CloseSideBar', { withoutAnimation: true });
        }
      }
    }
  }
};

export default ResizeMixin;
