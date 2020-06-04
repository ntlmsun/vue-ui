import Cookie from 'msun-lib-ui/shared/utils/cookie/index';

/**
 * @description 用户信息管理
 * @param token => Cookie.getToken() || null
 * @param userId => 用户编码
 * @param userName => 用户名称
 * @param deptId => 科室编码
 * @param deptName => 科室名称
 * @param hospitalId => 医院编码
 * @param hospitalName => 医院名称
 * @param deptSysId
 */
const User = {
  state: {
    token: Cookie.getToken() || null,
    userId: null,
    userName: null,
    deptId: null,
    deptName: null,
    hospitalId: null,
    hospitalName: null,
    deptSysId: null,
    deptSysName: null,
    systemId: null,
    systemName: null,
    userSysId: null,
    userSysName: null
  },
  mutations: {
    SET_TOKEN(state, { token } = option) {
      state.token = token;
    },
    SET_NAME(state, { userId, userName } = option) {
      state.userId = userId;
      state.userName = userName;
    },
    SET_DEPT(state, { deptId, deptName } = option) {
      state.deptId = deptId;
      state.deptName = deptName;
    },
    SET_HOSPITAL(state, { hospitalId, hospitalName } = option) {
      state.hospitalId = hospitalId;
      state.hospitalName = hospitalName;
    },
    SET_DEPT_SYS(state, { deptSysId, deptSysName } = option) {
      state.deptSysId = deptSysId;
      state.deptSysName = deptSysName;
    },
    SET_SYSTEM(state, { systemId, systemName } = option) {
      state.systemId = systemId;
      state.systemName = systemName;
    },
    SET_USER_SYS(state, { userSysId, userSysName } = option) {
      state.userSysId = userSysId;
      state.userSysName = userSysName;
    }
  },
  actions: {
    init(content, { currentUser, selectedSystem, token } = option) {
      content.commit('SET_TOKEN', { token: token });
      content.commit('SET_NAME', { userId: currentUser.userId, userName: currentUser.userName });
      content.commit('SET_DEPT', { deptId: currentUser.deptId, deptName: currentUser.deptName });
      content.commit('SET_HOSPITAL', { hospitalId: currentUser.hospitalId, hospitalName: currentUser.hospitalName });
      content.commit('SET_DEPT_SYS', { deptSysId: selectedSystem.deptId, deptSysName: selectedSystem.deptName });
      content.commit('SET_SYSTEM', { systemId: selectedSystem.systemId, systemName: selectedSystem.systemName });
      content.commit('SET_USER_SYS', { userSysId: selectedSystem.userSysId, userSysName: selectedSystem.userSysName });
      Cookie.setToken(token);
    },
    logOut(content) {
      content.commit('SET_TOKEN', { token: null });
      content.commit('SET_NAME', { userId: null, userName: null });
      content.commit('SET_DEPT', { deptId: null, deptName: null });
      content.commit('SET_HOSPITAL', { hospitalId: null, hospitalName: null });
      content.commit('SET_DEPT_SYS', { deptSysId: null, deptSysName: null });
      content.commit('SET_SYSTEM', { systemId: null, systemName: null });
      content.commit('SET_USER_SYS', { userSysId: null, userSysName: null });
      Cookie.removeToken();
    }
  }
};

export default User;
