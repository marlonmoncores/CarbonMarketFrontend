import { http } from '../services/http'

const loadProducts = async ({ commit }) => {
  const { data } = await http.get('/item')

  commit('setProducts', data)
}

export { loadProducts }
