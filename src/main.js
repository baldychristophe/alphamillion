import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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
