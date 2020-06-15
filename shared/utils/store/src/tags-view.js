const TagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW(state, { view } = option) {
      if (state.visitedViews.some(v => v.path === view.path)) return;
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      );
    },
    ADD_CACHED_VIEW(state, { view } = option) {
      if (state.cachedViews.includes(view.name)) return;
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name);
      }
    },
    DEL_VISITED_VIEW(state, { view } = option) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
    },
    DEL_CACHED_VIEW(state, { view } = option) {
      const index = state.cachedViews.indexOf(view.name);
      index > -1 && state.cachedViews.splice(index, 1);
    },
    DEL_OTHERS_VISITED_VIEWS(state, { view } = option) {
      state.visitedViews = state.visitedViews.filter(v => v.meta.affix || v.path === view.path);
    },
    DEL_OTHERS_CACHED_VIEWS(state, { view } = option) {
      const index = state.cachedViews.indexOf(view.name);
      if (index > -1) {
        state.cachedViews = state.cachedViews.slice(index, index + 1);
      } else {
        state.cachedViews = [];
      }
    },
    DEL_ALL_VISITED_VIEWS(state) {
      state.visitedViews = state.visitedViews.filter(tag => tag.meta.affix);
    },
    DEL_ALL_CACHED_VIEWS(state) {
      state.cachedViews = [];
    },
    UPDATE_VISITED_VIEW(state, { view } = option) {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    }
  },
  actions: {
    AddView(content, { view } = option) {
      content.commit('ADD_VISITED_VIEW', { view: view });
      content.commit('ADD_CACHED_VIEW', { view: view });
    },
    AddVisitedView(content, { view } = option) {
      content.commit('ADD_VISITED_VIEW', { view: view });
    },
    DelView(content, { view } = option) {
      content.commit('DEL_VISITED_VIEW', { view: view });
      content.commit('DEL_CACHED_VIEW', { view: view });
    },
    DelCachedView(content, { view } = option) {
      content.commit('DEL_CACHED_VIEW', { view: view });
    },
    DelOthersViews(content, { view } = option) {
      content.commit('DEL_OTHERS_VISITED_VIEWS', { view: view });
      content.commit('DEL_OTHERS_CACHED_VIEWS', { view: view });
    },
    DelAllViews(content) {
      content.commit('DEL_ALL_VISITED_VIEWS');
      content.commit('DEL_ALL_CACHED_VIEWS');
    },
    DelAllCachedViews(content, { view } = option) {
      content.commit('DEL_ALL_CACHED_VIEWS', { view: view });
    },
    UpdateVisitedView(content, { view } = option) {
      content.commit('UPDATE_VISITED_VIEW', { view: view });
    }
  }
};

export default TagsView;
