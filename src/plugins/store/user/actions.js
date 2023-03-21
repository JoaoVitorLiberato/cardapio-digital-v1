const setUser = ({ commit }, payload) => {
  return commit('setdataUser', payload)

}
const setIslogged = ({ commit }, result) => {
  return commit('setIsloggedin', result)
}


export {
  setUser,
  setIslogged
}
