import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL || 'https://localhost:9090/'
})

Object.defineProperty(Vue.prototype, '$axios', {
  get: () => instance
})
