<template>
  <main class="w">
    <div class="nav">
      <div class="navlist">
        <div>发现音乐</div>
        <div>播客</div>
        <div>视频</div>
        <div>关注</div>
        <div>直播</div>
        <div>私人FM</div>
      </div>
      <div class="mymusic">
        <div class="head">我的音乐</div>
        <div class="fav">我喜欢的音乐</div>
        <div class="loc">本地与下载</div>
        <div class="new">最近播放</div>
      </div>
      <div class="musiclist">创建的歌单<i class="iconfont icon-add"></i></div>
    </div>
    <div class="main">首页</div>
  </main>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
.w {
  display: flex;
  height: 537px;
}
.nav {
  width: 200px;
  border-right: 1px solid #e0e0e0;
}
.navlist {
  height: 256px;
  padding: 12px 0 0 12px;
}
.navlist div {
  height: 36px;
  margin-bottom: 5px;
  padding-left: 7px;
  font-size: 15px;
  line-height: 36px;
  background-color: #f6f6f7;
}
.mymusic {
  padding-left: 12px;
}
.head {
  height: 21px;
  font-size: 14px;
  color: #9f9f9f;
}
.fav {
  height: 38px;
  padding-left: 8px;
  line-height: 38px;
  background-color: #f6f6f7;
}
.loc {
  height: 38px;
  padding-left: 8px;
  line-height: 38px;
  background-color: #f6f6f7;
}
.new {
  height: 38px;
  padding-left: 8px;
  line-height: 38px;
  background-color: #f6f6f7;
}
.musiclist {
  height: 148px;
  padding-left: 25px;
  padding-top: 16px;
  font-size: 14px;
  color: #9f9f9f;
}
</style>
