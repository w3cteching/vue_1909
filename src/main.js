import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as filters from './filters'

console.log('filters:',filters)


Vue.config.productionTip = false;

//重置样式
import "./public/css/reset.css";
//引入rem适配文件
//import "./utils/rem";

Object.keys(filters).forEach(key => { 

    console.log('key:',key)
   
  Vue.filter(key,filters[key])


})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
