import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'

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
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
