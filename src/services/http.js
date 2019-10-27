import { isEmpty } from 'lodash-es'
import axios from 'axios'

const http = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:9090/',
  headers: { 'content-type': 'application/json', idMarket: 1 }
})

const setToken = value => {
  if (isEmpty(value)) {
    delete http.defaults.headers.common['Authorization']
    return
  }
  http.defaults.headers.common['Authorization'] = value
}

export { http, setToken }

export default http
