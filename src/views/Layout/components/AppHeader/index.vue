<template>
  <header class="app-header">
    <div class="logo">
      <div class="logo-icon"><i class="a-icon-ic_music"></i></div>
      <span class="logo-title">音乐的力量</span>
    </div>
    <div class="search">搜索框</div>
    <div class="setting">
      <i class="a-icon-gerentouxiang"></i>
      <div class="load"><a href="#">用户登入</a></div>
      <i class="a-icon-icon_minimize"></i>
      <i class="a-icon-a-icon_fullscreen"></i>
      <i class="a-icon-icon_close"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  height: 60px;
  background: var(--theme-red);
  color: #fff;
  .logo {
    display: flex;
    padding-left: 19px;
    width: 229px;
    align-items: center;
    &-icon {
      @include flex-center;
      margin-right: 6px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #fff;
      color: var(--theme-red);
      .icon-ic_music {
        font-size: 14px;
      }
    }
    &-title {
      font-size: 16px;
    }
  }
  .search {
    height: 60px;
    width: 365px;
    background: pink;
  }
  .setting {
    display: flex;
  }
  .a-icon-gerentouxiang {
    font-size: 30px;
    margin: 15px 0 15px 15px;
  }
  .load {
    width: 135px;
    line-height: 60px;
  }
}
</style>
