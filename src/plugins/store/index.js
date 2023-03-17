import Vue from 'vue'
import Vuex from 'vuex'

import estabelecimento from './estabelecimento'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    estabelecimento,
    user
  }
})
