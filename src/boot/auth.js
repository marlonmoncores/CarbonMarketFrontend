import { loadToken } from '../store/module-auth/lib'

export default async ({ store }) => {
  const token = await loadToken()
  store.commit('auth/setToken', token)
}
