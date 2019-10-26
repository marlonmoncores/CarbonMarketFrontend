import { namespace } from 'store2'

const TOKEN_KEY = 'token'
const store = namespace('auth')

const loadToken = async () => {
  return store.get(TOKEN_KEY)
}

const storeToken = async (value) => {
  return store.set(TOKEN_KEY, value)
}

const clearToken = async () => {
  return store.remove(TOKEN_KEY)
}

export { store, loadToken, storeToken, clearToken }
