// vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入网站、项目、组件、请求等通用配置文件
import common from './common'

Vue.config.productionTip = false

Vue.use(common) // 使用通用配置文件

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
