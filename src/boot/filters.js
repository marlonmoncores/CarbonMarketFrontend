import Vue from 'vue'
import { round } from 'lodash-es'
import numeral from 'numeral'
import 'numeral/locales/pt-br'

numeral.locale('pt-br')

Vue.filter('round', round)
Vue.filter('number', val => numeral(val).format('0,0.00'))
Vue.filter('money', val => numeral(val).format('$ 0,0.00'))
