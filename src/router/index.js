import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve = () => {}, reject = () => {}) {
  originPush.call(this, location).then(resolve).catch(reject)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    children: [
      {
        alias: '/',
        path: 'home',
        name: 'home',
        // TODO 使用插件动态更换网页标题
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
      },
      {
        path: 'videos',
        name: 'videos',
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "video" */ '@/views/videos/index.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
