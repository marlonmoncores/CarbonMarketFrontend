const ensureAuth = async ({ getters, commit }) => {
  if (getters.isLogged) {
    return true
  }

  if (getters.hasToken) {
    // load user data
  }

  commit('setToken', null)

  return Promise.reject(new Error('NO_USER'))
}

export { ensureAuth }
