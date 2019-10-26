import { storeToken } from './lib'

export function setToken (state, value) {
  state.token = value

  storeToken(value)
}
