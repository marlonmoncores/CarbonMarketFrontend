export function isLogged (state, getters) {
  return getters.hasToken && !!state.user.cpf
}

export function hasToken (state) {
  return !!state.token
}
