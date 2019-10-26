import { storeToken } from './lib'

export function setToken (state, value) {
  state.token = value

  storeToken(value)
}

export function setUser (state, value) {
  state.user = { ...value }
}
