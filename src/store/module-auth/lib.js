import store from 'store2'
import { setToken as httpToken } from '../../services/http'

const TOKEN_KEY = 'auth:token'

const loadToken = async () => {
  return store.get(TOKEN_KEY)
}

const storeToken = async (value) => {
  httpToken(value)
  return store.set(TOKEN_KEY, value)
}

const clearToken = async () => {
  httpToken(false)
  return store.remove(TOKEN_KEY)
}

export { store, loadToken, storeToken, clearToken }
