// vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 通用样式
import './common/styles/index.scss'
// element-ui
import './config/element-ui'
// 字体图标
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
