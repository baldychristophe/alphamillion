import Vue from 'vue'
import VueRouter from 'vue-router'

import $ from 'jquery'

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

// Add v-tooltip directive to add a tooltip to elements
Vue.directive('tooltip', (el, binding) => {
  $(el).tooltip({
    title: binding.value,
    container: el,
    template: `
      <div class="tooltip ${binding.arg}" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner"></div>
      </div>
    `,
    placement: 'auto',
    trigger: 'hover',
    html: binding.modifiers.html || false,
  })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
