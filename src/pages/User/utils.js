const YEAR_START = 2019
const years = Array.from({ length: (new Date().getFullYear() - (YEAR_START - 1)) })
  .map((_, index) => {
    return index + YEAR_START
  })

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
  'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

export { years, months }
