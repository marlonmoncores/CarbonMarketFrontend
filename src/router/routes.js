
const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: () => import(/* webpackChunkName: "user-layout" */ 'layouts/User.vue'),
    meta: {
      needAuth: true
    },
    children: [
      { path: '', component: () => import(/* webpackChunkName: "user-index" */ 'pages/User/Index.vue') }
    ]
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: () => import(/* webpackChunkName: "auth-layout" */ 'layouts/Auth.vue'),
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "auth-login" */ 'pages/Auth/Login.vue') },
      { path: 'singup', component: () => import(/* webpackChunkName: "auth-singup" */ 'pages/Auth/Singup.vue') }
    ]
  },
  {
    path: '/pdv',
    component: () => import(/* webpackChunkName: "pdv-layout" */ 'layouts/PDV.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkName: "pdv-index" */ 'pages/PDV/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import(/* webpackChunkName: "pages-404" */ 'pages/Error404.vue')
  })
}

export default routes
