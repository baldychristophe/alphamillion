import VueRouter from 'vue-router'

import Balls from './Balls'
import Landing from './Landing'
import Stars from './Stars'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/balls',
      name: 'balls',
      component: Balls,
    },
    {
      path: '/stars',
      name: 'stars',
      component: Stars,
    },
  ],
})

export default router
