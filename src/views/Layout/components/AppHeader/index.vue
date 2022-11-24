<template>
  <header class="app-header">
    <div class="logo">
      <div class="logo-icon"><i class="a-icon-ic_music"></i></div>
      <span class="logo-title">音 乐 的 力 量</span>
    </div>
    <div class="search">搜索框</div>
    <div class="setting">
      <img class="user" src="@/assets/image/common/user.png" title="用户" />
      <el-button class="login-btn" type="text">
        未登录<i class="el-icon-caret-bottom"></i>
      </el-button>
      <i class="a-icon-yifu"></i>
      <i class="el-icon-setting"></i>
      <i class="el-icon-message"></i>
      <i class="a-icon-zuixiaohua-2"></i>
      <i v-if="true" class="a-icon-zuidahua-1"></i>
      <i v-else class="a-icon-zuidahua-3"></i>
      <i class="a-icon-close2"></i>
    </div>
  </header>
</template>

<script>
import { searchSong } from '@/api/common'

export default {
  name: 'AppHeader',
  created() {
    searchSong({ keywords: '边缘行者' }).then(res => {
      console.log(res)
    })
  },
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
      @include flex-c;
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
    width: 369px;
    background: pink;
  }
  .setting {
    display: flex;
    align-items: center;
    .user {
      width: 28px;
      height: 28px;
      margin-left: 16px;
    }
    .login-btn {
      margin-left: 16px;
      color: #fff;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    [class^='a-icon-'],
    [class^='el-icon-'] {
      cursor: pointer;
      background: var(--theme-red);
      color: #fff;
      font-size: 18px;
      margin-left: 25px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    .a-icon-zuidahua-1 {
      font-size: 16px;
      margin-left: 25px;
    }
  }
}
</style>
