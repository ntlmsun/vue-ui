const ErrorLog = {
  state: {
    logs: []
  },
  mutations: {
    ADD_ERROR_LOG(state, { log } = option) {
      state.logs.push(log);
    },
    CLEAR_ERROR_LOG(state) {
      state.logs.splice(0);
    }
  },
  actions: {
    AddErrorLog(content, { log } = option) {
      content.commit('ADD_ERROR_LOG', { log: log });
    },
    ClearErrorLog(content) {
      content.commit('CLEAR_ERROR_LOG');
    }
  }
};

export default ErrorLog;
