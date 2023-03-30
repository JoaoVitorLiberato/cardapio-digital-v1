import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,

  state: {
    user: null,
    fieldsGlobal: null,
    isLogged: false,
  },
  
  getters: {
    getUser (state) {
      return state.user;
    },
    
    getUserLogged (state) {
      return state.isLogged
    },

    getGlobalFields(state) {
      return state.fieldsGlobal
    },
  },

  mutations: {
    setdataUser (state, payload) {
      state.isLogged = true
      return state.user = payload
    },

    setGlobalFilds(state, payload) {
      return state.fieldsGlobal = payload
    },
  },

  actions: {
    setUser({ commit }, payload) {
      return commit('setdataUser', payload)
    },

    setAllRightApi({ commit }, messagem ) {
      return  commit('setAllRight', messagem)
    },

    async setSavedDataUserLogin({ commit }, payload) {
      return commit("setGlobalFilds", payload)
    },
  }
  
})
