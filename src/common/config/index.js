import Vue from 'vue'
// 按需引入element-ui
import './element-ui'
// axios
import request from '@/common/request'
// 动态设置网页标题 https://github.com/deboyblog/vue-wechat-title
import vueTitle from 'vue-wechat-title'

Vue.use(vueTitle) // 动态设置网页标题
Vue.prototype.$_request = request // 请求
