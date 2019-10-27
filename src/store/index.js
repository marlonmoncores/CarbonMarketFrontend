import Vue from 'vue'
import Vuex from 'vuex'

import auth from './module-auth'

import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      products: []
    },
    mutations,
    actions,
    modules: {
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
