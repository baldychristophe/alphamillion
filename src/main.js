import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

// Import common css
import './styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Implement on-demand component import
// see https://element.eleme.io/#/en-US/component/quickstart#on-demand
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
