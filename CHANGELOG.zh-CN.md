## 更新日志

### 0.0.1

_2020-05-18_

#### 新特性

1. Convert 转换码信息添加

/\*_ 获取五笔码 _/ wbConvert(text: string): string;

/\*_ 获取全拼码 _/ fullConvert(text: string): string;

/\*_ 获取简拼码 _/ SimpConvert(text: string): string;

### 使用方法

this.\$convert.SimpConvert('汉字') =>

import { Convert } from 'msun-lib-ui';

Convert.SimpConvert('汉字');

2. http 请求约束添加

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

### 使用方法

this.$http.$get() => 

import { Http } from 'msun-lib-ui';

Http.$get()