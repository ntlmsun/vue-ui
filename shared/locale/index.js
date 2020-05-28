import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookie from './../utils/cookie/index';
import msunZN from './lang/zn-CN';
import msunEN from './lang/en';
import elementZN from 'element-ui/lib/locale/lang/zh-CN';
import elementEN from 'element-ui/lib/locale/lang/en';

Vue.use(VueI18n);

const message = {
  zn: {
    ...msunZN,
    ...elementZN
  },
  en: {
    ...msunEN,
    ...elementEN
  }
};

export const getLocale = () => {
  const cache = Cookie.getLanguage();
  if (cache) {
    return cache;
  }
  const language = navigator.language.toLowerCase();
  const locales = Object.keys(message);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return 'en';
};

const i18n = new VueI18n({
  locale: getLocale(),
  message
});

export default i18n;
