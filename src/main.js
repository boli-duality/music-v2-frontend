// vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// css标准化
import 'reset.css'
import 'normalize.css'
// element-ui
import './config/element-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
