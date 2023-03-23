import userAuthUser from '@/middlewares/UseAuthUser'
import supabase from '@/api/supabase'


const { login } = userAuthUser()


const modulesCache = () => {
  return {
    user: null,
    isLogged: false,
    allDataUserComplete: null,
    savedPayloadLogin: null,
    msg: ""
  }
}

const state = modulesCache()

const getters = {
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
}

const  mutations = {
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
}


const actions= {
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

  async setSavedDataUserLogin({ commit, dispatch }, payload,) {
    const response = await login(payload)
    dispatch("setUser", response)
    return commit("setGlobalFilds", payload)
  }
}



const cacheStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}


export default cacheStore