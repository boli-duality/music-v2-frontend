// vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 通用样式
import './common/styles/index.scss'
// 引入网站、项目、组件、请求等配置文件
import './common/config'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
