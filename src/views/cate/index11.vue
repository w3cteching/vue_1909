<template>
  <div>
    <h2>分类页面</h2>
    <!-- <h2>父级页面-{{ msg }}</h2> -->
    <!-- <a-com :msg.sync="msg"></a-com> -->
    <!-- <a-com @okk="buyWater"></a-com> -->
    <!-- <a-com v-for="item in list" :item="item" :key="item.id"></a-com> -->
    <!-- <a-com ref="a" v-if="flag"></a-com> -->
    <a-com :msg="msg" :title="title" @go="go"></a-com>
    <button @click="getA">获取a组件的方法</button>
  </div>
</template>

<script>
import ACom from "../../components/A";
export default {
  name: "cate",
  data() {
    return {
      title:'马上吃午饭啦',
      flag:true,
      userInfo:{
        name:'张三',
        age:20
      },
      list: [
        { id: 1001, name: "A课程", time: "2020-8-10" },
        { id: 1002, name: "B课程", time: "2020-8-13" },
        { id: 1003, name: "C课程", time: "2020-8-12" },
        { id: 1004, name: "D课程", time: "2020-8-16" }
      ],
      msg: '分类数据'
    };
  },
  components: { ACom },
  methods:{
    go(v) {
      console.log('分类-神仙---go',v)
    },
    getA() {
     // this.$refs.a.clickMe()
  //  this.$children[0].clickMe()
  //  console.log(this.$children[0].index)
    },
    buyWater(v) {
      console.log('能否得到money:',v)
    },
    parentFn() {
      this.flag=false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
