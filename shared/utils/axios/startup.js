import Vue from 'vue';
import mStore from './../store/index.js';
import { currentUser, selectedSystem, token } from './cache';
const Base64 = require('js-base64').Base64;

export class Startup {
  static bootstrap() {
    let USER_CACHE;
    let SYSTEM_CACHE;
    let TOKEN_CACHE;
    if (Vue.prototype.$NODE_ENV === 'development') {
      USER_CACHE = currentUser;
      SYSTEM_CACHE = selectedSystem;
      TOKEN_CACHE = token;
      if (!window.localStorage.getItem('selectedSystem')) {
        window.localStorage.setItem('selectedSystem', JSON.stringify(selectedSystem));
      }

      if (!window.localStorage.getItem('currentUser')) {
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }

      if (!window.localStorage.getItem('token')) {
        window.localStorage.setItem('token', token);
      }
    } else {
      USER_CACHE = JSON.parse(window.localStorage.getItem('currentUser'));
      SYSTEM_CACHE = JSON.parse(window.localStorage.getItem('selectedSystem'));
      TOKEN_CACHE = window.localStorage.getItem('token');
    }
    mStore.dispatch('init', { currentUser: currentUser, selectedSystem: selectedSystem, token: token });
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
