<template>
  <div>
    <h2>A组件--{{ index }}</h2>
    <b-com v-bind="$attrs" v-on="$listeners"></b-com>

    <!-- <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p> -->
    <button @click="clickMe">clickMe</button>
    <!--     
    <p>课程名称：{{ item.name }}</p>
    <p>发布时间：{{ item.time }}</p> -->
  </div>
</template>

<script>
import BCom from './B'
export default {
  name: "acom",
  // props:['msg','title'],
  data() {
    return {
      index:10
    };
  },
  components:{BCom},
//   props: {
//     msg: {
//       type: [String, Number],
//       default: "字符串数据"
//     },
//     userInfo:{
//         type:Object,
//         default:function() {
//             return { name:'无名', age:0}
//         }
//     }
    // item:{
    //     type:Object,
    //     default: function () {
    //     return { id: 0, name: "xx", time: "0000-00-00"}
    //   }
    // }
  //},
  methods: {
    clickMe() {
     // this.msg = "1909A";
    //this.userInfo.name='李四'
   // this.$emit('update:msg','全栈1909A')
   //this.$emit('向父级派发的事件名',要传递的值)
  // this.$emit('okk',this.index)
    // this.index++;
   // console.log(' this.$parent:' ,this.$parent)
   this.$parent.parentFn();
    }
  },
  computed: {
    m:{
       get() {
           return this.msg;
       },
       set(v) {
           this.msg=v;
       } 
    }
  }
};
</script>

<style lang="scss" scoped></style>
