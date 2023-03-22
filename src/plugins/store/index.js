import Vue from 'vue'
import Vuex from 'vuex'

// import estabelecimento from './modules/estabelecimento'
// import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  // modules: {
  //   estabelecimento,
  //   user
  // }
  state: {
    user: null,
    isLogged: false,
  },
  
  getters: {
    getUser (state) {
      return state.user;
    },
    
    getUserLogged (state) {
      return state.isLogged
    }
  },

  mutations: {
    setdataUser (state, payload){
      state.isLogged = true
      return state.user = payload
    },
  },

  actions: {
    setUser({ commit }, payload) {
      return commit('setdataUser', payload)
    
    },
  }
})
