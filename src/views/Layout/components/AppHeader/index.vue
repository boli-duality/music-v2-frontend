<template>
  <header class="app-header">
    <div class="logo">
      <div class="logo-icon"><i class="a-icon-ic_music"></i></div>
      <span class="logo-title">声 海 空 游</span>
    </div>
    <!-- 搜索框 -->
    <div class="search-box">
      <div class="step-btn pre"><i class="a-icon-zuosanjiao"></i></div>
      <div class="step-btn next"><i class="a-icon-yousanjiao"></i></div>
      <el-input
        class="search-input"
        :placeholder="searchHolder"
        v-model="input4"
        prefix-icon="el-icon-search"
        @keydown.enter.native="onSearch"
      ></el-input>
    </div>
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
import { getRandomItem } from '@/common/utils/functions'

export default {
  name: 'AppHeader',
  data() {
    return {
      hotList: [],
      searchHolder: '',
      // XXX 变量名需要语义化
      input4: '',
    }
  },
  created() {
    this.searchDefaultAPI()
    this.input4 = this.$route.params.keyword
  },
  methods: {
    searchDefaultAPI() {
      this.$_request({
        url: '/search/hot/detail',
        method: 'get',
        params: { timestamp: Date.now() },
      }).then(({ data }) => {
        this.hotList = data
        this.searchHolder = data[0].searchWord
      })
    },
    onSearch() {
      this.input4 = this.input4.trim()
      if (this.input4 == this.$route.params.keyword) return
      if (!this.input4) this.input4 = this.searchHolder
      if (this.input4) this.$router.push({ name: 'search', params: { keyword: this.input4 } })
      this.searchHolder = getRandomItem(this.hotList).searchWord
    },
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
  .search-box {
    display: flex;
    align-items: center;
    height: 60px;
    width: 350px;
    background: #ec4141;
    .step-btn {
      @include flex-c;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: rgba($color: #000000, $alpha: 0.08);
      &.pre {
        margin-right: 8px;
      }
    }
    ::v-deep .search-input {
      margin-left: 12px;
      width: 160px;
      .el-input__inner {
        height: 32px;
        border: none;
        border-radius: 32px;
        background: rgba($color: #000000, $alpha: 0.05);
      }
      .el-icon-search {
        @include flex-c;
      }
    }
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
    // XXX 可以优化
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
