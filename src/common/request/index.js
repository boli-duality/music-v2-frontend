import axios from 'axios'
import { isObj } from 'you-functions'
// import { Message } from 'element-ui'
// import store from '@/store'
// import router from '@/router'

// 服务器错误处理
const errMsg = {
  [400]: '请求参数错误 400',
  [401]: '未授权，请登录 401',
  [403]: '拒绝访问 403',
  [404]: '请求地址不存在 404',
  [405]: '请求方法不允许 405',
  [408]: '请求超时 408',
  [415]: '不支持的媒体类型(一般来说是content-type错了) 415',
  [500]: '服务器内部错误 500',
  [501]: '服务未实现 501',
  [502]: '网关错误 501',
  [503]: '服务不可用 503',
  [504]: '网关超时 504',
  [505]: 'HTTP版本不受支持 505',
}

const getData = data => {
  if (!isObj(data) || Object.hasOwn(data, 'code')) return data
  else return getData(data.data)
}

// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
})

// request interceptor
// request.interceptors.request.use(
//   config => {
//     // do something before request is sent

//     if (store.getters.token) {
//       // let each request carry token
//       // ['X-Token'] is a custom headers key
//       // please modify it according to the actual situation
//       config.headers['Authorization'] = `Bearer ${store.getters.token}`
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// response interceptor
request.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const { status, data } = response
    console.log(response.data)
    if (status == 200) return getData(data)
    else throw new Error(errMsg[status])
  }
  // ,error => {
  //   console.log('err' + error) // for debug
  //   Message({
  //     message: error.message,
  //     type: 'error',
  //     duration: 5 * 1000,
  //   })
  //   return Promise.reject(error)
  // }
)

export default request
