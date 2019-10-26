import Vue from 'vue'
import { http } from '../services/http'

Object.defineProperty(Vue.prototype, '$axios', {
  get: () => http
})
