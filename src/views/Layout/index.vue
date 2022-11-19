<template>
  <div class="layout">
    <header>
      <div class="top">
        <div class="logo"><a href="#">img</a></div>
        <div class="search">搜索框</div>
        <div class="setting">用户登入</div>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="bottom">dibu</div>
    </footer>
    <!-- 布局
    <audio
      src="http://m801.music.126.net/20221118211821/591fff622d539c7584d235659dd20ede/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/20395180539/5753/6500/7110/322ed485a48ebeaebda824b0353f2adc.mp3"
      controls
    ></audio> -->
  </div>
</template>

<script>
import { searchSong } from '@/api/common'
import { getBanner } from '@/api/home'
import request from '@/common/request'
export default {
  name: 'Layout',
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
  margin: 200px auto;
  width: 1022px;
  height: 670px;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
}
.top {
  display: flex;
  height: 60px;
  background-color: #ec4141;
}
.logo {
  height: 60px;
  width: 120px;
  line-height: 60px;
  margin-left: 60px;
}
.search {
  height: 60px;
  width: 420px;
  background-color: pink;
}
.bottom {
  height: 73px;
  width: 1022px;
  border-top: 1px solid #e0e0e0;
}
</style>
