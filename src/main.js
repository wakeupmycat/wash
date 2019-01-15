import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import toastRegistry from '@/components/Toast/index'

Vue.use(toastRegistry)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
