
const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "2" */ '@/components/layouts/layoutPublic/LayoutPublic.vue'),
    children: [
      {
        path: "",
        name: "products-default",
        component: () => import(/* webpackChunkName: "products-view-public" */ '../views/public/ProdutosView.vue'),
      },
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "login-view-public" */ '../views/public/LoginView.vue'),
      },
      {
        path: "products",
        name: "products",
        component: () => import(/* webpackChunkName: "products-view-public" */ '../views/public/ProdutosView.vue'),
      },
    ]
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "me-view-private" */ '@/components/layouts/layoutPivate/LayoutPrivate.vue'),
    children: [
      {
        path: "me",
        name: "me",
        component: () => import(/* webpackChunkName: "login-view-public" */ '@/views/private/me.vue'),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import(/* webpackChunkName: "not-found-view" */ '@/views/NotFound.vue')
  },
]

export default routes