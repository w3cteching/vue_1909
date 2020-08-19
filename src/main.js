import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import './http/request'

//重置样式
import "./public/css/reset.css";
//引入rem适配文件
//import "./utils/rem";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
