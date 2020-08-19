import axios from "axios";

import env from "./env.js";

const vipUrl = "/api/app/";

const envType = process.env.BUILD_ENV;

const urlObj = require(`../config/${envType}.js`);

const prodUrl='https://www.365msmk.com'

//创建一个axios实例
const service = axios.create({
  //baseURL: urlObj.BASE_URL + vipUrl
  baseURL: prodUrl + vipUrl
});

//请求拦截

service.interceptors.request.use(
  config => {
    config.headers["deviceType"] = "H5";
    console.log("请求的数据:", config);
    return config;
  },
  error => {
    return Promise.reject("出错啦");
  }
);

//响应拦截
service.interceptors.response.use(
  response => {
    //根据返回不同的状态码来做后续处理
    console.log("返回的数据", response);
    return response;
  },
  error => {
    return Promise.reject("返回报错");
  }
);

export default service;
