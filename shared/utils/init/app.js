import mStore from 'msun-lib-ui/shared/utils/store';

const App = () => {};
App.init = (image, title) => {
  mStore.dispatch('SetImage', { image });
  mStore.dispatch('SetTitle', { title });
};

export default App;
