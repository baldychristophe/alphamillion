import VueRouter from 'vue-router'

import Landing from './Landing'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
  ],
})

export default router
