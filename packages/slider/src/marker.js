export default {
  name: 'MsMarker',

  props: {
    mark: {
      type: [String, Object]
    }
  },
  render() {
    let label = typeof this.mark === 'string' ? this.mark : this.mark.label;

    return (
      <div class="ms-slider__marks-text" style={this.mark.style || {}}>
        {label}
      </div>
    );
  }
};
