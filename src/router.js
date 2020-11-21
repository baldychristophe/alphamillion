import VueRouter from 'vue-router'

import BallPage from './BallPage'
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
      component: BallPage,
    },
    {
      path: '/stars',
      name: 'stars',
      component: StarStats,
    },
  ],
})

export default router
