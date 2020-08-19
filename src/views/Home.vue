<template>
  <div class="home">
    <h2>首页内容</h2>
    <button @click="getData">获取banner</button>
    <label for="username">用户名</label>
    <input type="text" v-model="tel" id="username" />
    <button @click="getSmsCode">获取验证码</button>
    <button @click="getKeCheng">获取课程列表</button>
  </div>
</template>

<script>
import { getBanners, get_sms_code, login, lessonList } from "../http/api";
export default {
  name: "Home",
  data() {
    return {
      tel: "",
      page: 1,
      limit: 10
    };
  },
  methods: {
    getData() {
      getBanners().then(res => {
        console.log("res:::", res);
      }).catch(res=>{
        console.log(res)
      })
    },

    //获取验证码
    getSmsCode() {
      let mobile = this.tel;
      get_sms_code({
        mobile,
        sms_type: "login"
      }).then(res => {
        console.log("获取验证码的结果：", res);
      });
    },
    //用户登录
    Userlogin() {
      login({
        mobile: "xxx", //登录的手机号
        sms_code: "", //手机上得到验证码
        type: 2 //登录类型：2：验证码登录类型
      }).then();
    },
    //获取课程列表
    getKeCheng() {
      lessonList({
        page: this.page,
        limit: this.limit
      }).then(res => {
        console.log("课程列表", res);
      });
    }
  }
};
</script>
