import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addPersonModal: false,
  },
  mutations: {
    changeAPM(state){
      state.addPersonModal = !state.addPersonModal
    }
  },
  actions: {
  },
  modules: {
  }
})
