import { AxiosRequestConfig } from 'axios';

export interface MsunHttpClient {
  
  /** GET */
  $get(url: string, success?: Function, error?: Function): Promise<any>;

  /** POST */
  $post(
    url: string,
    params: any,
    success?: Function,
    error?: Function
  ): Promise<any>;

  /** PUT */
  $put(
    url: string,
    params: any,
    success: Function,
    error: Function
  ): Promise<any>;

  /** DELETE */
  $delete(url: string, success?: Function, error?: Function): Promise<any>;

  /** REQUEST */
  $request(
    config?: AxiosRequestConfig,
    success?: Function,
    error?: Function
  ): Promise<any>;

  /** HEAD */
  $head(
    url: string,
    success?: Function,
    error?: Function,
    config?: AxiosRequestConfig
  ): Promise<any>;

  /** OPTIONS */
  $options(
    url: string,
    success?: Function,
    error?: Function,
    config?: AxiosRequestConfig
  ): Promise<any>;

  /** PATCH */
  $patch(
    url: string,
    param: any,
    success?: Function,
    error?: Function,
    config?: AxiosRequestConfig
  ): Promise<any>;
}

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * @todo convert =>
     */
    $http: MsunHttpClient;
  }
}
