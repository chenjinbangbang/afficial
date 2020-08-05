import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home/home'
import about from '@/pages/about/about'
import contact from '@/pages/contact/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
