const needAuth = ({ meta, matched }) => {
  return meta.needAuth !== undefined
    ? meta.needAuth
    : matched.some(route => route.meta.needAuth)
}

const isLogged = ({ getters }) => {
  return getters['auth/isLogged']
}

const applyGuards = (router, store) => {
  router.beforeEach(async (to, from, next) => {
    if (needAuth(to) && !isLogged(store)) {
      await store.dispatch('auth/ensureAuth')
        .catch(err => {
          console.warn(err)
          router.push('/auth')
        })
    }

    next()
  })
}

export { applyGuards }
