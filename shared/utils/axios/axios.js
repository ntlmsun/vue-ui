import axios from 'axios';

class oAxiosInterceptor {
  static init() {
    /**
     * @todo 接收请求, 统一处理返回结果, 返回请求数据
     */
    axios.interceptors.response.use(
      response => {
        switch (response.status) {
          case 200:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
          case 404:
          case 500:
            break;
          case 9992:
          case 9993:
          case 9994:
          case 9995:
          case 9996:
          case 9997:
          case 9998:
          case 9999:
          default:
            alert('用户信息缺失');
            location.href = '';
        }
        return response.data;
      },
      error => {
        return Promise.reject(error);
      }
    );

    /**
     * @todo 发送请求
     * 判断缓存是否存在token
     * 存在则携带 token
     * 否则重定向到 /login
     * ### 无感刷新
     */
    axios.interceptors.request.use(
      request => {
        if (window.localStorage.getItem('authorization')) {
          request.headers = {
            ...request.headers,
            Authorization: window.localStorage.getItem('authorization')
          };
        }
        return request;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
}

export default oAxiosInterceptor;
