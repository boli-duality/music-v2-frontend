// 通用样式
import './styles/index.scss'
// 按需引入element-ui
import elementUI from './third-components/element-ui'
// 拖拽改变大小组件
// import VueDragResize from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css' // optionally import default styles
import VueDragResize from './third-components/vue-draggable-resizable'
// axios请求库
import request from './request'
// 动态设置网页标题 https://github.com/deboyblog/vue-wechat-title
import vueTitle from 'vue-wechat-title'
// 扩展原生js
import { vuePlugin as functions } from './utils/functions'

const install = Vue => {
  // 使用插件
  Vue.use(vueTitle) // 动态设置网页标题
  Vue.use(elementUI) // 按需引入element-ui
  Vue.use(functions) // 工具函数扩展
  // 注册全局组件
  Vue.component('VueDragResize', VueDragResize) // 拖拽改变大小组件
  // 原型链
  Vue.prototype.$_bus = new Vue() // event bus
  Vue.prototype.$_http = request // axios请求库
}

export default { install }
