<template>
  <div class="layout">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { searchSong } from '@/api/common'
import { getBanner } from '@/api/home'
import request from '@/common/request'
import AppHeader from './components/AppHeader/index.vue'
import AppFooter from './components/AppFooter/index.vue'
export default {
  name: 'Layout',
  components: { AppHeader, AppFooter },
  created() {
    searchSong({ keywords: '边缘行者' }).then(res => {
      console.log(res)
    })
    getBanner().then(res => {
      console.log(res)
    })
    request({
      url: '/song/url',
      method: 'post',
      data: { id: 1989053877 },
    }).then(res => {
      console.log(res)
    })
  },
}
</script>

<style lang="scss" scoped>
.layout {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 1022px;
  height: 670px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
}
</style>
