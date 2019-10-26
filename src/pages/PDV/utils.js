const productBuilder = product => {
  return {
    ...product,
    get total () {
      return this.qtd * this.amount
    }
  }
}

export { productBuilder }
