const { reduce, map, shuffle, isEmpty } = require('lodash')

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
  'filé de peito',
  'coxa e sobrecoxa',
  'frango à passarinho',
  'tulipa de frango',
  'filezinho'
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

const allProducts = shuffle([...carnes, ...frango, ...peixes, ...legumes])

module.exports = { allProducts }
