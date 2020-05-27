import Cookies from 'js-cookie';

const Cookie = function() {};

const oAuth = 'VUE_ACCESS_TOKEN_OAUTH';

const language = 'VUE_LANGUAGE';

const size = 'VUE_SIZE';

const fontSize = 'VUE_FONT_SIZE';

const sidebarStatus = 'VUE_SIDEBAR_STATUS';

/** TOKEN */
Cookie.getToken = () => {
  return Cookies.get(oAuth);
};

Cookie.setToken = value => {
  Cookies.set(oAuth, value);
};

Cookie.removeToken = () => {
  Cookies.remove(oAuth);
};

/** LANGUAGE */
Cookie.getLanguage = () => {
  return Cookies.get(language);
};

Cookie.setLanguage = value => {
  Cookies.set(language, value);
};

/** SIZE */
Cookie.getSize = () => {
  return Cookies.get(size);
};

Cookie.setSize = value => {
  Cookies.set(size, value);
};

/** FONT SIZE */
Cookie.getFontSize = () => {
  return Cookies.get(fontSize);
};

Cookie.setFontSize = value => {
  Cookies.set(fontSize, value);
};

/** SIDEBAR STATUS */
Cookie.getSidebarStatus = () => {
  return Cookies.get(sidebarStatus);
};

Cookie.setSidebarStatus = value => {
  Cookies.set(sidebarStatus, value);
};

export default Cookie;
