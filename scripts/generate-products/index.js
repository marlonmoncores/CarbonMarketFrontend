const path = require('path')
const write = require('write')
const ora = require('ora')
const uuid = require('uuid/v4')
const { random, map, round } = require('lodash')
const { allProducts } = require('./list')

const FILE = path.resolve(__dirname, '../../src/store/products.json')

const spinner = ora('Generating products').start()

const productsData = map(allProducts, name => {
  return {
    name,
    id: uuid(),
    amount: round(random(1, 20, true), 3)
  }
})

setTimeout(() => {
  write(FILE, JSON.stringify(productsData), {
    overwrite: true
  })
    .then(() => {
      spinner.succeed(`Generated ${productsData.length} products: ${path.relative(__dirname, FILE)}`)
    })
    .catch(err => {
      console.error(err)

      spinner.fail(err.message)
    })
}, 1000)
