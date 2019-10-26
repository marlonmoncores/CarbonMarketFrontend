
const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: () => import('layouts/User.vue'),
    meta: {
      needAuth: true
    },
    children: [
      { path: '', component: () => import('pages/User/Index.vue') }
    ]
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: 'login', component: () => import('pages/Auth/Login.vue') },
      { path: 'singup', component: () => import('pages/Auth/Singup.vue') }
    ]
  },
  {
    path: '/pdv',
    component: () => import('layouts/PDV.vue'),
    children: [
      { path: '', component: () => import('pages/PDV/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
