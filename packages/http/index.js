import axios from 'axios';
import Vue from 'vue';

const HttpClient = function() {};

HttpClient.$get = (url, success = () => {}, error = response => console.log(response.message)) => {
  return axios.get(url).then(response => {
    if (response.code === Vue.prototype.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

HttpClient.$post = (url, params, success = () => {}, error = response => console.log(response.message)) => {
  return axios.post(url, params).then(response => {
    if (response.code === Vue.prototype.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

HttpClient.$put = (url, params, success = () => {}, error = response => console.log(response.message)) => {
  return axios.put(url, params).then(response => {
    if (response.code === Vue.prototype.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

HttpClient.$delete = (url, success = () => {}, error = response => console.log(response.message)) => {
  return axios.delete(url).then(response => {
    if (response.code === Vue.prototype.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

HttpClient.$request = (config, success = () => {}, error = response => console.log(response.message)) => {
  return axios.request(config).then(response => {
    if (response.code === Vue.prototype.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

HttpClient.$head = (url, success = () => {}, error = response => console.log(response.message), config) => {
  return axios.head(url, config).then(response => {
    if (response.code === MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

HttpClient.$options = (url, success = () => {}, error = response => console.log(response.message), config) => {
  return axios.options(url, config).then(response => {
    if (response.code === Vue.prototype.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

HttpClient.$patch = (url, param, success = () => {}, error = response => console.log(response.message), config) => {
  return axios.patch(url, param, config).then(response => {
    if (response.code === Vue.prototype.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
};

export default HttpClient;
