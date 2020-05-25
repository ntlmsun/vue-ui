## 更新日志

### 0.0.1

_2020-05-18_

#### 新特性

##### 1. Convert 转换码信息添加

/\*_ 获取五笔码 _/ 
wbConvert(text: string): string;

/\*_ 获取全拼码 _/ 
fullConvert(text: string): string;

/\*_ 获取简拼码 _/ 
SimpConvert(text: string): string;

import { Convert } from 'msun-lib-ui';

this.$convert.SimpConvert('汉字') => Convert.SimpConvert('汉字');

##### 2. http 请求约束添加

/\*_ GET _/ 
$get(url: string, success?: Function, error?: Function): Promise<any>;

/\*_ POST _/ 
$post(url: string, params: any, success?: Function, error?: Function): Promise<any>;

/\*_ PUT _/ 
$put(url: string, params: any, success: Function, error: Function): Promise<any>;

/\*_ DELETE _/ 
$delete(url: string, success?: Function, error?: Function): Promise<any>;

/\*_ REQUEST _/ 
$request(config?: AxiosRequestConfig, success?: Function, error?: Function): Promise<any>;

/\*_ HEAD _/ 
$head(url: string, success?: Function, error?: Function, config?: AxiosRequestConfig): Promise<any>;

/\*_ OPTIONS _/ 
$options(url: string, success?: Function, error?: Function, config?: AxiosRequestConfig): Promise<any>;

/\*_ PATCH _/ 
$patch(url: string, param: any, success?: Function, error?: Function, config?: AxiosRequestConfig): Promise<any>;


import { Http } from 'msun-lib-ui';

this.$http.$get() => Http.$get()

需要在 main.ts 注册 Vue.prototype.$VUE_APP_MAGIC_VAL

##### 3. axios 封装

默认引入 Startup 事件

需要在 main.ts 注册 Vue.prototype.$NODE_ENV

### 0.0.2

_2020-05-25_

#### 新特性

##### 1. store 封装

/\*_ ErrorLog _/ 
[type] = ErrorLog

/\*_ Route _/ 
[type] = Route

/\*_ Settings _/ 
[type] = Settings

/\*_ TagsView _/ 
[type] = TagsView

/\*_ User _/ 
[type] = User

import { mStore } from 'msun-lib-ui';

this.$mStore.state.[type].[params] => mStore.state.[type].[params]

this.$mStore.dispatch([type].[function], { } = option) => mStore.dispatch([type].[function], { } = option)

##### 2. cookie 封装

/\*_ get token _/ 
getToken(): string | undefined;

/\*_ set token _/ 
setToken(value: string | undefined): void;

/\*_ remove token _/ 
removeToken(): void;

/\*_ get language _/ 
getLanguage(): string | undefined;

/\*_ set language _/ 
setLanguage(value: string | undefined): void;
