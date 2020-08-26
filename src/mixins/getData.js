//import {  getUserList} '@/http/'

var GetUserDataMixIn = {
    data() {
        return {msg:'hello 1909A'}
     },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      console.log("调用后台用户数据的方法");
    }
  }
};

export default GetUserDataMixIn;
