import request from "./request";

//封装业务的各种接口

/**
 * 获取轮播图
 */

export function getBanners() {
  return request({
    url: "/api/app/banner",
    method: "GET"
  });
}

//获取验证码
export function get_sms_code(data) {
  return request({
    url: "/api/app/smsCode",
    method: "POST",
    data
  });
}

//用户登录
export function login(data) {
  return request({
    url: "/api/app/login",
    method: "POST",
    data
  });
}

//获取课程列表
export function lessonList(params) {
  return request({
    url: "/api/app/courseBasis",
    method: "GET",
    params
  });
}
