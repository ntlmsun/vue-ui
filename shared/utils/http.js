import axios from 'axios';

/**
 * POST 请求
 * @param url 请求地址
 * @param params 请求参数
 * @param success 成功回调
 * @param error 失败回调
 */
function $post(url, params, success = () => {}, error = (response) => alert(response.message)) {
  return axios.post(url, params).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

/**
 * GET 请求方式
 * @param url 请求地址
 * @param success 成功回调
 * @param error 错误回调
 */
function $get(url, success = () => {}, error = (response) => alert(response.message)) {
  return axios.get(url).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

/**
 * PUT 请求方式
 * @param url 请求地址
 * @param params 请求参数
 * @param success 成功回调
 * @param error 错误回调
 */
function $put(url, params, success = () => {}, error = (response) => alert(response.message)) {
  axios.put(url, params).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

/**
 * DELETE 请求方式
 * @param url 请求地址
 * @param params 请求参数
 * @param success 成功回调
 * @param error 失败回调
 */
function $delete(url, success = () => {}, error = (response) => alert(response.message)) {
  axios.delete(url).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

/**
 * REQUEST 请求方式
 * @param config
 * @param success
 * @param error
 */
function $request(config, success = () => {}, error = (response) => alert(response.message)) {
  axios.request(config).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

/**
 * HEAD 请求方式
 * @param url
 * @param success
 * @param error
 * @param config
 */
function $head(url, success = () => {}, error = (response) => alert(response.message), config) {
  axios.head(url, config).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

/**
 * OPTIONS 请求方式
 * @param url
 * @param success
 * @param error
 * @param config
 */
function $options(url, success = () => {}, error = (response) => alert(response.message), config) {
  axios.options(url, config).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

/**
 * PATCH 请求方式
 * @param url
 * @param param
 * @param success
 * @param error
 * @param config
 */
function $patch(url, param, success = () => {}, error = (response) => alert(response.message), config) {
  axios.patch(url, param, config).then((response) => {
    if (response.code === process.env.VUE_APP_MAGIC_VAL) {
      success(response.data);
    } else {
      error(response);
    }
  });
}

export default {
  $get,
  $post,
  $delete,
  $put,
  $head,
  $options,
  $patch,
  $request
}
