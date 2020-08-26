import { setToken,getToken } from '../../utils/save'


const login = {
  //   state: () => {
  //     return {
  //       myToken: "6666668888adfadsfq43534qt2532",
  //       usrerRole: "Admin"
  //     };
  //   },
  state: {
    myToken: "9999999999111116666668888adfadsfq43534qt2532",
    usrerRole: "Admin",
    count:0
  },
  actions: {
    login({ commit },v) {
      console.log('login.......')
      commit('ADD',-1)
      
    },
    loginOut() {}
  },
  mutations: {
    ADD(state,v) {
      state.count += v
     // localStorage.setItem('count',state.count)
     // setValue('count',state.count)
   //  setToken('count',state.count)
    //  console.log(getToken('count'))
    }
  },
  getters: {}
};

export default login;
