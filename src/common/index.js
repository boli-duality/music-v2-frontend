// 通用样式
import './styles/index.scss'
// 按需引入element-ui
import elementUi from './third-components/element-ui'
// 拖拽改变大小组件
// import VueDragResize from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css' // optionally import default styles
import VueDragResize from './third-components/vue-draggable-resizable'
// axios请求库
import request from './request'
// 动态设置网页标题 https://github.com/deboyblog/vue-wechat-title
import vueTitle from 'vue-wechat-title'
// 扩展原生js
import { copy, logs } from './utils/functions'

// 扩展原生js
JSON.copy = copy // JSON深拷贝
console.logs = logs // 带颜色标签的打印信息

const install = Vue => {
  // 使用插件
  Vue.use(vueTitle) // 动态设置网页标题
  Vue.use(elementUi) // 按需引入element-ui
  // 注册全局组件
  Vue.component('VueDragResize', VueDragResize) // 拖拽改变大小组件
  // 原型链
  Vue.prototype.$_bus = new Vue() // event bus
  Vue.prototype.$_http = request // axios请求库
}

export default { install }
