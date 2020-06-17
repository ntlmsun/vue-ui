import Vue from 'vue';
import { currentUser, selectedSystem, token } from './cache';
const Base64 = require('js-base64').Base64;

export class Startup {
  static bootstrap() {
    if (Vue.prototype.$NODE_ENV === 'development' || Vue.prototype.$NODE_ENV === 'production') {
      if (!window.localStorage.getItem('selectedSystem')) {
        window.localStorage.setItem('selectedSystem', JSON.stringify(selectedSystem));
      }

      if (!window.localStorage.getItem('currentUser')) {
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }

      if (!window.localStorage.getItem('token')) {
        window.localStorage.setItem('token', token);
      }

      if (!window.localStorage.getItem('authorization')) {
        const object = {
          userId: currentUser.userId,
          userName: currentUser.userName,
          deptId: currentUser.deptId,
          deptName: currentUser.deptName,
          currentDeptId: selectedSystem.deptId,
          currentDeptName: selectedSystem.deptName,
          userSysId: selectedSystem.userSysId,
          systemId: selectedSystem.systemId
        };
        const authorization = token + '@@@' + Base64.encode(JSON.stringify(object));
        window.localStorage.setItem('authorization', authorization);
      }
    }
  }
}
