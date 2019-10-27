import { random, round } from 'lodash-es'

const setProducts = (state, list) => {
  state.products = list.map(row => {
    return {
      ...row,
      amount: round(random(1, 20, true), 3)
    }
  })
}

export { setProducts }
