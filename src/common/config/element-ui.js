// 按需引入
import Vue from 'vue'
import { Loading, MessageBox, Notification, Message, Input, Button } from 'element-ui'

Vue.use(Loading.directive).use(Input).use(Button)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
