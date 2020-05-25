import Cookies from 'js-cookie';

const Cookie = function() {};

const oAuth = 'VUE_ACCESS_TOKEN_OAUTH';

const language = 'VUE_LANGUAGE';

Cookie.getToken = () => {
  return Cookies.get(oAuth);
};

Cookie.setToken = value => {
  Cookies.set(oAuth, value);
};

Cookie.removeToken = () => {
  Cookies.remove(oAuth);
};

Cookie.getLanguage = () => {
  return Cookies.get(language);
};

Cookie.setLanguage = value => {
  Cookies.set(language, value);
};

export default Cookie;
