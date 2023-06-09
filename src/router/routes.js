
const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "2" */ '@/components/layouts/layoutPublic/LayoutPublic.vue'),
    children: [
      {
        path: "",
        name: "products-default",
        component: () => import(/* webpackChunkName: "products-view-public" */ '../views/public/ProductsPublic.vue'),
      },
      {
        path: "products",
        name: "products",
        component: () => import(/* webpackChunkName: "products-view-public" */ '@/views/public/ProductsPublic.vue'),
      },
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "login-view-public" */ '@/views/public/LoginView.vue'),
      },
      {
        path: "register",
        name: "register",
        component: () => import(/* webpackChunkName: "register-view-public" */ '@/views/public/Register.vue'),
      },
      {
        path: "email-confirmation",
        name: "email-confirmation",
        component: () => import(/* webpackChunkName: "email-confirmation-view-public" */ '@/views/public/EmailConfirmation.vue'),
      },
      {
        path: "forgot-password",
        name: "forgot-password",   
        component: () => import(/* webpackChunkName: "forgot-password-view-public" */ "@/views/public/ForgotPassword.vue")
      },
      {
        path: "reset-password",
        name: "reset-password",   
        component: () => import(/* webpackChunkName: "reset-password-view-public" */ "@/views/public/ResetPassword.vue")
      },
      {
        path: "contact",
        name: "contact",
        component: () => import(/* webpackChunkName: "contact-view-public" */ "@/views/public/Contact.vue")
      },
      {
        path: "about",
        name: "about",
        component: () => import(/* webpackChunkName: "about-view-public" */ "@/views/public/About.vue")
      }
    ]
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "me-view-private" */ '@/components/layouts/layoutPivate/LayoutPrivate.vue'),
    children: [
      {
        path: "",
        meta: {  requiresAuth: true }
      },
      {
        path: "me",
        name: "me",
        component: () => import(/* webpackChunkName: "me-view-private" */ '@/views/private/me.vue'),
        meta: {  requiresAuth: true }
      },
      {
        path: "complaints",
        name: "complaints",
        component: () => import(/* webpackChunkName: "complaints-view-private" */ '@/views/private/Complaints.vue'),
        meta: {  requiresAuth: true }
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import(/* webpackChunkName: "defaul-not-found-view-public" */ '@/views/public/ProductsPublic.vue')
  },
]

export default routes