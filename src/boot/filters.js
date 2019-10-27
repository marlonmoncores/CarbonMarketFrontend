import Vue from 'vue'
import { round } from 'lodash-es'
import numeral from 'numeral'
import 'numeral/locales/pt-br'

numeral.locale('pt-br')

Vue.filter('round', round)
Vue.filter('cpf', val => val.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'))
Vue.filter('number', val => numeral(val).format('0,0.00'))
Vue.filter('money', val => numeral(val).format('$ 0,0.00'))
