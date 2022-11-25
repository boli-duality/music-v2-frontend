<template>
  <header class="app-header">
    <div class="logo">
      <div class="logo-icon"><i class="a-icon-ic_music"></i></div>
      <span class="logo-title">音 乐 的 力 量</span>
    </div>
    <div class="search">搜索框</div>
    <div class="setting">
      <a href="#"><img class="user" src="@/assets/image/common/user.png" title="用户" /></a>
      <el-button class="login-btn" type="text">
        <div class="login">
          未登录
          <i class="el-icon-caret-bottom"></i>
          <div class="vip"><i class="a-icon-f-vip"></i> 开通</div>
        </div>
      </el-button>
      <i class="a-icon-yifu"></i>
      <i class="el-icon-setting"></i>
      <i class="el-icon-message"></i>
      <div class="line"></div>
      <i class="a-icon-Minion-"></i>
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
      display: flex;
      color: #fff;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
      div {
        display: flex;
      }
      .vip {
        font-size: 3px;
      }
    }
    .login {
      line-height: 18px;
    }
    [class^='a-icon-'],
    [class^='el-icon-'] {
      cursor: pointer;
      background: var(--theme-red);
      color: #fff;
      font-size: 18px;
      margin-left: 15px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    .el-icon-caret-bottom {
      margin: 0;
    }

    .line {
      width: 1px;
      height: 14px;
      margin-left: 15px;
      border: #f2f2f2 1px solid;
    }
    .a-icon-zuidahua-1 {
      font-size: 16px;
      margin-left: 25px;
    }
  }
}
</style>
