const Permission = {
  state: {
    routes: []
  },
  getters: {
    getRoutes(state) {
      return state.routes;
    }
  },
  mutations: {
    SET_PERMISSION_ROUTES(state, { routes } = option) {
      state.routes = routes;
    }
  },
  actions: {
    SetPermissionRoutes(content, { routes } = option) {
      content.commit('SET_PERMISSION_ROUTES', { routes });
    }
  }
};

export default Permission;
