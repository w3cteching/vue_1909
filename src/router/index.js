import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cate from "../views/cate/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/cate",
    name: "cate",
    component: Cate
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active"
});

export default router;
