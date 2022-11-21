<template>
  <section class="layout">
    <AppHeader></AppHeader>
    <section class="body">
      <AppAside></AppAside>
      <main class="main">
        <router-view></router-view>
      </main>
    </section>
    <AppFooter></AppFooter>
  </section>
</template>

<script>
// import { searchSong } from '@/api/common'
// import { getBanner } from '@/api/home'
// import request from '@/common/request'
import AppHeader from './components/AppHeader/index.vue'
import AppAside from './components/AppAside/index.vue'
import AppFooter from './components/AppFooter/index.vue'
export default {
  name: 'Layout',
  components: { AppHeader, AppAside, AppFooter },
  created() {
    // searchSong({ keywords: '边缘行者' }).then(res => {
    //   console.log(res)
    // })
    // getBanner().then(res => {
    //   console.log(res)
    // })
    // request({
    //   url: '/song/url',
    //   method: 'post',
    //   data: { id: 1989053877 },
    // }).then(res => {
    //   console.log(res, 'song')
    // })
  },
}
</script>

<style lang="scss" scoped>
.layout {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 1022px;
  height: 670px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
  .body {
    overflow: hidden;
    flex: 1;
    display: flex;
    .main {
      overflow: auto;
      flex: 1;
    }
  }
}
</style>
