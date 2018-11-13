import Vue from 'vue'
import App from './App.vue'
import '@/libs/flexible'
import '@/libs'
import store from '@/store'
// import login from './login.vue'

import  router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
