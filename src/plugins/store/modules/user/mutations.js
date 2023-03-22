const setdataUser = (state, payload) => {
  state.isLogged = true
  return state.user = payload
}

export {
  setdataUser,
}
