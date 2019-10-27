import { noop, isEmpty } from 'lodash-es'
import { loadToken } from '../store/module-auth/lib'

export default async ({ store }) => {
  const token = await loadToken()

  store.commit('auth/setToken', token)
  await Promise.all([
    store.dispatch('loadProducts'),
    (isEmpty(token)) ? true : store.dispatch('auth/loadUserData').then(noop, noop)
  ])
}
