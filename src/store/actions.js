const actions = {
  changeTotal({ commit }, v) {
        console.log("changeTotal", v);
        commit('CHANGETOTAL',v)
    }
};

export default actions;
