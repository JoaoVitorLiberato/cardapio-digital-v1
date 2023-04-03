import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,

  state: {
    user: null,
    fieldsGlobal: null,
    isLogged: false,
    company: null,
    client: null
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

    getCompany (state) {
      return state.company
    },

    getClient (state) {
      return state.client
    }
  },

  mutations: {
    setdataUser (state, payload) {
      state.isLogged = true
      return state.user = payload
    },

    setGlobalFilds(state, payload) {
      return state.fieldsGlobal = payload
    },

    setCompany(state, payload) {
      return state.company = payload
    },

    setClient(state, payload) {
      return state.client = payload
    }
  },

  actions: {
    setUser({ commit }, payload) {
      return commit('setdataUser', payload)
    },

    setAllRightApi({ commit }, messagem ) {
      return  commit('setAllRight', messagem)
    },

    setSavedDataUserLogin({ commit }, payload) {
      return commit("setGlobalFilds", payload)
    },

    setDataCompany({commit}, payload) {
      commit("setCompany", payload)
    },

    setDataClient({commit}, payload) {
      return commit("setClient", payload)
    }
  }
  
})
