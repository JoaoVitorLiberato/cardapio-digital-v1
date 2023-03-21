const setdataUser = (state, payload) => {
  state.isLogged = true
  return state.user = payload
}

const setIsloggedin = (state, result) => {
  return state.isLogged = result
}


export {
  setdataUser,
  setIsloggedin
}
