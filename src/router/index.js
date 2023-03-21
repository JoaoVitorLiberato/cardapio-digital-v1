import userAuthUser from '@/middlewares/UseAuthUser'
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
 
  if(to.hash.includes("type=recovery") && to.name !== "reset-password") {
    const accessToken = to.hash.split("&")[0]
    const token = accessToken.replace("#access_token=", "")
    return router.push({ name: "reset-password", query: { token } })
  }
  
  const {  isLoggedIn } = userAuthUser()

  if([
    isLoggedIn(),
    to.meta.requiresAuth,
    !Object.keys(to.meta).includes("fromEmail")
  ].every(o => !!o)) {
    return router.replace({ name: "login"})
  }
    
  next()
})

export default router
