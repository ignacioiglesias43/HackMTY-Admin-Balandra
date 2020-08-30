import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addPersonModal: false,
    day: null, 
    timeIn: null, 
    timeOut: null,
    car: null,
    persons: 0,
  },
  mutations: {
    changeAPM(state){
      state.addPersonModal = !state.addPersonModal
    },
    changeDate(state, payload){
      state.day = payload
    },
    changeTimeIn(state, payload){
      state.timeIn = payload
    },
    changeTimeOut(state, payload){
      state.timeOut = payload
    },
    changeCar(state, payload){
      state.car = payload
    },
    changePersons(state, payload){
      state.persons = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
