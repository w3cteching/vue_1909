<template>
  <div class="home">
     <!-- <input type="text" v-model="s" class="username"> -->
     <!-- <input type="text" :value="s" @input="s=$event.target.value" class="username"> -->
     <baseInput v-model="s"></baseInput>
     <p>{{ s }}</p>

     <button @click="getData">测试混入获取数据---{{ msg }}</button>
    
  </div>
</template>

<script>
import { lessonList } from "../http/api";
import {mapState,mapActions,mapGetters} from 'vuex'
import baseInput from '@/components/baseInput'
import GetUserDataMixIn from '@/mixins/getData'
export default {
  name: "Home",
  mixins:[GetUserDataMixIn],
  data() {
    return {
      s:'张三',
      tel: "",
      page: 1,
      limit: 10,
      list: []
    };
  },
  
  created() {
    this.getKeCheng();
  },
  computed:{
    total() {},
    // myToken() {
    //   return this.$store.state.login.myToken
    // }
   // ...mapState(['myToken','usrerRole']),
    ...mapGetters(['myToken','count'])
    //vuex相关数据,state,getters
    // token() {
    //   return this.$store.state.token
    // },
    // usrerRole() {
    //   return this.$store.state.usrerRole
    // }

  },
  methods: {
   
    //获取课程列表
    getKeCheng() {
      lessonList({
        page: this.page,
        limit: this.limit
      }).then(res => {
        //console.log("课程列表", res);
        let {
          code,
          data: { list }
        } = res.data;
        if (code === 200) {
          console.log("list:", list);
          this.list = list;
        }
      });
    },
    setValue() {
      
     // this.$store.dispatch('changeTotal',this.limit)
     this.changeTotal(this.limit)
   
    },
    ...mapActions(['login']),
   
  },
  components:{baseInput}
};
</script>

<style lang="scss">
.username {width:400px;height:80px;}
.home {
  width:100%;
  height:100%;
}
.list {
  li {
    padding: 20px 10px;
  }
}
</style>
