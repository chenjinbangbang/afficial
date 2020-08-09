import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home/home'
import custommade from '@/pages/custommade/custommade'
import construction from '@/pages/construction/construction'
import applet from '@/pages/applet/applet'
import Case from '@/pages/case/case'
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
      path: '/custommade',
      name: 'custommade',
      component: custommade
    },
    {
      path: '/construction',
      name: 'construction',
      component: construction
    },
    {
      path: '/applet',
      name: 'applet',
      component: applet
    },
    {
      path: '/case',
      name: 'case',
      component: Case
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
