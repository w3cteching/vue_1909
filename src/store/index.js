import Vue from "vue";
import Vuex from "vuex";
// import state from './state'
// import actions from './actions'
// import mutations from './mutations'
 import getters from './getters'

import login from './modules/login'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);


export default new Vuex.Store({
  //存储各种数据状态
  // state,
  //异步操作方法，这里可以向后端请求数据
  // actions,
  //同步操作
  // mutations,
  // modules,
  getters,
  plugins: [createPersistedState()],
  modules: {
    login
  }
});
