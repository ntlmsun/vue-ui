import { t } from 'msun-lib-ui/shared/locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
