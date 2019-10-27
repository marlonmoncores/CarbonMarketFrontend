import { http } from '../../services/http'

const ensureAuth = async ({ getters, commit }) => {
  if (getters.isLogged) {
    return true
  }

  if (getters.hasToken) {
    const { data } = await http.get('/me')
    commit('setUser', data)

    return true
  }

  // commit('setToken', null)

  return Promise.reject(new Error('NO_USER'))
}

const loadUserData = async ({ commit }) => {
  const { data } = await http.get('/me')
  commit('setUser', data)
}

export { ensureAuth, loadUserData }
