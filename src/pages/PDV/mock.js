import { sampleSize, random } from 'lodash-es'

const randomProducts = products => {
  return sampleSize(products, 7)
    .map(product => {
      return {
        ...product,
        qtd: random(1, 3),
        get total () {
          return this.qtd * this.amount
        }
      }
    })
}

export { randomProducts }
