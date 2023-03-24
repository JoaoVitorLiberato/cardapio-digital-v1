import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './plugins/store'
import vuetify from './plugins/vuetify/vuetify'
import vMask from 'v-mask'

Vue.config.productionTip = false
Vue.use(vMask)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
