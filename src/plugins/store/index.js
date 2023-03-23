import Vue from 'vue'
import Vuex from 'vuex'

import supabase from '@/api/supabase'
import userAuthUser from '@/middlewares/UseAuthUser'


Vue.use(Vuex)

const { 
login

} = userAuthUser()

export default new Vuex.Store({
  strict: false,

  state: {
    user: null,
    isLogged: false,
    allDataUserComplete: null,
    fieldsGlobal: null,
    msg: ""
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
    }
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
    }
  },

  actions: {
    setUser({ commit }, payload) {
      return commit('setdataUser', payload)
    },

    async setAllDataUserComplete({ commit }, payload) {
      const { data, error } = await supabase.auth.updateUser({
        email: payload.emeil,
        password: payload.password,
        data: payload.data
      })

      if (error) { 
        return this.state.msg = "Error"
      }

      commit("setdataUser", data)
      return commit('setAllDataUser', payload)
    },

    async setSavedDataUserLogin({ commit, dispatch }, payload) {
      const response = await login(payload)
      dispatch("setUser", response)
      return commit("setGlobalFilds", payload)
    }
  }
  
})
