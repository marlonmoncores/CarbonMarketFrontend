import { sampleSize, random } from 'lodash-es'
import { productBuilder } from './utils'

const randomProducts = products => {
  return sampleSize(products, 7)
    .map(product => {
      return productBuilder({
        ...product,
        qtd: random(1, 3)
      })
    })
}

export { randomProducts }
