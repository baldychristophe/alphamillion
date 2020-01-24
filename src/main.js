import Vue from 'vue'
import App from './App.vue'

// Import common css
import './styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// Implement on-demand component import
// see https://element.eleme.io/#/en-US/component/quickstart#on-demand
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
