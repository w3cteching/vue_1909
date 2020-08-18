<template>
  <div id="app">
    <div class="hd flex-center ">首页</div>
    <div class="main flex-center ">
      <router-view></router-view>
    </div>
    <div class="ft flex-center ">
      <router-link v-for="item in navlist" :key="item.id" :to="item.url">
        <svg class="icon">
          <use :xlink:href="`#icon-${item.svgName}`"></use>
        </svg>
         <span>{{ item.navName }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      navlist: [
        { id: 1001, navName: "首页", svgName: "home", url: "/home" },
        { id: 1002, navName: "分类", svgName: "leimupinleifenleileibie", url: "/cate" },
        { id: 1003, navName: "购物车", svgName: "gouwuchezhengpin", url: "/shopping" },
        { id: 1004, navName: "我的", svgName: "wode", url: "/my" }
      ]
    };
  }
};
</script>

<style lang="scss">
.active {
  color:#0f0;
}
.icon {
  width: 50px;
  color: #fff;
}

svg.icon.active {
  fill: #f00;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hd {
  height: 88px;
  color: #fff;
  background: #000;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.main {
  height: 400px;
  background: #f00;
}

.ft {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 88px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding:10px 16px;
}

.ft>a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top:10px;
  }
}

/* .main {
  position: absolute;
  top:.444rem;
  bottom:.44rem;
  left:0;
  right:0;
  background: #f00;
} */
</style>
