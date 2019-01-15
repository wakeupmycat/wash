import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import PayOk from '@/pages/PayOk'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/payok',
      component: PayOk
    }
  ]
})
