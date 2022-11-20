<template>
  <aside class="app-aside">
    <ul class="list">
      <li>发现音乐</li>
      <li>播客</li>
      <li>视频</li>
      <li>关注</li>
      <li>直播</li>
      <li>私人FM</li>
    </ul>
    <dl class="list">
      <dt @click="onClick">我的音乐</dt>
      <dd>我喜欢的音乐</dd>
      <dd>本地与下载</dd>
      <dd>最近播放</dd>
    </dl>
    <dl class="list">
      <dt>创建的歌单<i class="iconfont icon-add"></i></dt>
    </dl>
  </aside>
</template>

<script>
export default {
  name: 'AppAside',
  methods: {
    onClick(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="scss" scoped>
.app-aside {
  overflow: auto;
  width: 200px;
  border-right: 1px solid #e0e0e0;
  padding: 12px 2px 0 12px;
  .list {
    margin-bottom: 8px;
    font-size: 15px;
    &.close + .list.close {
      dt {
        padding-top: 14px;
      }
    }
    dt {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      padding: 7px 8px 0;
      font-size: 13px;
    }
    dd,
    li {
      display: flex;
      align-items: center;
      height: 36px;
      margin-bottom: 2px;
      padding-left: 8px;
      background: #f6f6f7;
    }
  }
}
</style>
