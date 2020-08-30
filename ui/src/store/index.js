import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addPersonModal: false,
    signModal: {
      state: false,
      type: false,
    },
    day: null, 
    timeIn: null, 
    timeOut: null,
    car: null,
    stateLight: 4,
    persons: 0,
  },
  mutations: {
    changeAPM(state){
      state.addPersonModal = !state.addPersonModal
    },
    changeSM(state, payload){
      state.signModal = payload
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
    },
    setStateLight(state, payload){
      state.stateLight = payload
    },
  },
  actions: {
    chargeLight: async function({ commit }){
      await axios.get("https://api.airtable.com/v0/appelr2zBXKCJPWJS/covidmx?api_key=keymOwmuSwgNcTH7p&sort%5B0%5D%5Bfield%5D=estado")
      .then((response) =>{
        console.log(response.data.records[2].fields["nivel de riesgo"])
        var lightNumber = 4;
        switch(response.data.records[2].fields["nivel de riesgo"]){
          case 'máximo': lightNumber=4; break;
          case 'alto': lightNumber=3; break;
          case 'medio': lightNumber=2; break;
          case 'bajo': lightNumber=1; break;
        }
        commit('setStateLight',lightNumber)
      })
    }
  },
  modules: {
  }
})
