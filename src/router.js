import VueRouter from 'vue-router'

import BallStats from './BallStats'
import Landing from './Landing'
import StarStats from './StarStats'

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
      component: BallStats,
    },
    {
      path: '/stars',
      name: 'stars',
      component: StarStats,
    },
  ],
})

export default router
