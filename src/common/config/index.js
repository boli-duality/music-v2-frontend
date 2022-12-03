import Vue from 'vue'
// 按需引入element-ui
import './element-ui'
// axios
import request from '@/common/request'
// 动态设置网页标题 https://github.com/deboyblog/vue-wechat-title
import vueTitle from 'vue-wechat-title'
// 拖拽改变大小组件
import VueDragResize from 'vue-draggable-resizable'
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

// 使用插件
Vue.use(vueTitle) // 动态设置网页标题
// 注册全局组件
Vue.component('VueDragResize', VueDragResize)
// 原型链
Vue.prototype.$_bus = new Vue() // eventbus
Vue.prototype.$_http = request // 请求
