import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      fold:false,//侧边栏是否折叠
  },
  mutations: {
      setData(state,data){
          state[data.name]=data.value
      }
  },
  actions: {

  }
})
