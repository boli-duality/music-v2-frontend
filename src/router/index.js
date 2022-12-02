import Vue from 'vue'
import VueRouter from 'vue-router'
import MusicLayout from '@/views/MusicLayout/index.vue'

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (
  location,
  resolve = () => {},
  reject = e => console.warn(e.name + ': ' + e.message)
) {
  originPush.call(this, location).then(resolve).catch(reject)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: MusicLayout,
    children: [
      {
        alias: '/',
        path: 'home',
        name: 'home',
        meta: {
          title: '音乐的力量！',
        },
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/MusicLayout/home/index.vue'),
      },
      {
        path: 'radio',
        name: 'radio',
        meta: {
          title: '播客',
        },
        component: () =>
          import(/* webpackChunkName: "radio" */ '@/views/MusicLayout/radio/index.vue'),
      },
      {
        path: 'videos',
        name: 'videos',
        meta: {
          title: '视频',
        },
        component: () =>
          import(/* webpackChunkName: "video" */ '@/views/MusicLayout/videos/index.vue'),
      },
      {
        path: 'local_download',
        name: 'localDownload',
        meta: {
          title: '本地与下载',
        },
        component: () =>
          import(
            /* webpackChunkName: "localDownload" */ '@/views/MusicLayout/localDownload/index.vue'
          ),
      },
      {
        path: 'recently_played',
        name: 'recentlyPlayed',
        meta: {
          title: '最近播放',
        },
        component: () =>
          import(
            /* webpackChunkName: "recentlyPlayed" */ '@/views/MusicLayout/recentlyPlayed/index.vue'
          ),
      },
      {
        path: 'songs/:id',
        name: 'songs',
        meta: {
          title: '歌单',
        },
        component: () =>
          import(/* webpackChunkName: "songs" */ '@/views/MusicLayout/songs/index.vue'),
      },
      {
        path: 'search/:keyword',
        name: 'search',
        meta: {
          title: '搜索',
        },
        component: () =>
          import(/* webpackChunkName: "search" */ '@/views/MusicLayout/search/index.vue'),
      },
      {
        path: '403',
        name: '403',
        component: () => import(/* webpackChunkName: "403" */ '@/views/MusicLayout/error/403.vue'),
        meta: {
          title: '403 您没有权限',
        },
      },
      {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "404" */ '@/views/MusicLayout/error/404.vue'),
        meta: {
          title: '404 页面不见啦',
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
