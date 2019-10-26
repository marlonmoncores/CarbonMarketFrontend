const { reduce, map, shuffle, isEmpty, sortBy } = require('lodash')

const combineLists = (list, suffixes = []) => {
  if (isEmpty(suffixes)) {
    return list
  }
  return reduce(list, (acc, current) => {
    const subList = map(suffixes, suffix => `${current} ${suffix}`)
    return [...acc, ...subList]
  }, [])
}

const carnes = combineLists([
  'Filé Mignon',
  'Contrafilé',
  'Alcatra',
  'Picanha',
  'Patinho',
  'Fraldinha',
  'Maminha',
  'Filé de Costela'
], [
  'JBS', 'Marfrig', 'Minerva'
])

const frango = combineLists([
  'Filé de peito',
  'Coxa e Sobrecoxa',
  'Frango à Passarinho',
  'Tulipa de Frango',
  'Filezinho'
], ['Seara', 'Sádia'])

const peixes = [
  'Filé de Merluza',
  'Filé de Tilápia',
  'Filé de Pescada Branca',
  'Sardinha',
  'Salmão',
  'Bacalhau',
  'Posta de Cação',
  'Filé de Linguado'
]

const legumes = [
  'Abóbora',
  'Alface',
  'Batata',
  'Batata-doce',
  'Cebola',
  'Cenoura',
  'Chuchu',
  'Pimentão',
  'Repolho',
  'Tomate'
]

const allProducts = sortBy([...carnes, ...frango, ...peixes, ...legumes])

module.exports = { allProducts }
