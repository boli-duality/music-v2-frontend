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
          title: '视频',
        },
        component: () => import(/* webpackChunkName: "video" */ '@/views/videos/index.vue'),
      },
      {
        path: 'songs/:id',
        name: 'songs',
        meta: {
          title: '歌单',
        },
        component: () => import(/* webpackChunkName: "songs" */ '@/views/songs/index.vue'),
      },
      {
        path: '403',
        name: '403',
        component: () => import(/* webpackChunkName: "404" */ '@/views/error/403.vue'),
        meta: {
          hidden: true,
        },
      },
      {
        path: '*',
        name: '404',
        component: () => import('@/views/error/404.vue'),
        meta: {
          hidden: true,
        },
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
