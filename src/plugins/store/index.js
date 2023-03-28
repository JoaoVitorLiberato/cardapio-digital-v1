import Vue from 'vue'
import Vuex from 'vuex'

import supabase from '@/api/supabase'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,

  state: {
    user: null,
    isLogged: false,
    allDataUserComplete: null,
    fieldsGlobal: null,
    allRight: false,
    loading: false,
  },
  
  getters: {
    getUser (state) {
      return state.user;
    },
    
    getUserLogged (state) {
      return state.isLogged
    },

    getAllDatauser(state) {
      return state.allDataUserComplete
    },

    getGlobalFields(state) {
      return state.fieldsGlobal
    },

    getAllRight(state) {
      return state.allRight
    },
  },

  mutations: {
    setdataUser (state, payload) {
      state.isLogged = true
      return state.user = payload
    },
    
    setAllDataUser(state, payload) {
      return state.allDataUserComplete = payload
    },

    setGlobalFilds(state, payload) {
      return state.fieldsGlobal = payload
    },

    setAllRight(state, ok) {
      return state.allRight = ok
    },
  },

  actions: {
    setUser({ commit }, payload) {
      return commit('setdataUser', payload)
    },

    async setAllDataUserComplete({ commit }, payload) {
      const { data, error } = await supabase.auth.updateUser({
        email: payload.email,
        password: payload.password,
        data: payload.data
      })

      if (error) { 
        return this.state.msg = "Error"
      }

      commit("setdataUser", data)
      return commit('setAllDataUser', payload)
    },

    setAllRightApi({ commit }, messagem ) {
      return  commit('setAllRight', messagem)
    },

    async setSavedDataUserLogin({ commit }, payload) {
      return commit("setGlobalFilds", payload)
    },
  }
  
})
