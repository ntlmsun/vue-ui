const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
};

export const filterAsyncRoutes = (routes, roles) => {
  const res = [];
  routes.forEach(route => {
    const r = { ...route };
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles);
      }
      res.push(r);
    }
  });
  return res;
};

const route = {
  state: {
    routes: [],
    dynamicRoutes: []
  },
  getters: {
    getRoutes(state) {
      return state.routes;
    },
    getDynamicRoutes(state) {
      return state.dynamicRoutes;
    }
  },
  mutations: {
    SET_ROUTES(state, { constantRoutes, routes } = option) {
      state.routes = constantRoutes.concat(routes);
      state.dynamicRoutes = routes;
    }
  },
  actions: {
    GenerateRoutes(content, { roles, asyncRoutes, constantRoutes } = option) {
      content.commit('SET_ROUTES', { constantRoutes, asyncRoutes });
    }
  }
};

export default route;
