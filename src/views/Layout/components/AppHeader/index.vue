<template>
  <header class="app-header">
    <div class="logo">
      <div class="logo-icon"><i class="iconfont icon-ic_music"></i></div>
      <span class="logo-title">音乐的力量</span>
    </div>
    <div class="search">搜索框</div>
    <div class="setting">用户登入</div>
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
    width: 420px;
    background: pink;
  }
}
</style>
