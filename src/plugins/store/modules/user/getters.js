const getUser = (state) => {
  return state.user;
}

const getUserLogged = (state) => {
  return state.isLogged
}


export {
  getUser,
  getUserLogged
}
