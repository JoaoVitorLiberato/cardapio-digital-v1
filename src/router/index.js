/* eslint-disable no-empty */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  try {
    const access_token = localStorage.getItem('access_token')

    if([
      access_token,
      to.meta.requiresAuth
    ].every(o => !!o)) {
      console.log("Deu certo")
      return router.replace({name: "me"})
    }

  } catch {} finally {
    next()
  }
})

export default router
