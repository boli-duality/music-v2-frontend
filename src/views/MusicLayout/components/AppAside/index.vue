<template>
  <aside class="app-aside">
    <ul class="list">
      <li v-for="item in systemList" :key="item.title">
        <router-link :to="item.path" replace>{{ item.title }}</router-link>
      </li>
    </ul>
    <dl class="list">
      <dt style="cursor: default">我的音乐</dt>
      <dd v-for="item in myMusicList" :key="item.title">
        <router-link :to="item.path" replace>{{ item.title }}</router-link>
      </dd>
    </dl>
    <dl class="list">
      <dt>创建的歌单<i class="a-icon-add"></i></dt>
    </dl>
  </aside>
</template>

<script>
export default {
  name: 'AppAside',
  data() {
    return {
      systemList: [
        {
          title: '发现音乐',
          path: '/',
        },
        {
          title: '播客',
          path: '/radio',
        },
        {
          title: '视频',
          path: '/videos',
        },
        {
          title: '关注',
          path: '/flower',
        },
        {
          title: '直播',
          path: '/live',
        },
        {
          title: '私人FM',
          path: '/fm',
        },
      ],
      myMusicList: [
        {
          title: '我喜欢的音乐',
          path: '/songs/1',
        },
        {
          title: '本地与下载',
          path: '/local_download',
        },
        {
          title: '最近播放',
          path: '/recently_played',
        },
      ],
    }
  },
  methods: {},
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
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 9px;
      padding: 7px 8px 0;
      font-size: 13px;
      color: #9f9f9f;
    }
    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 36px;
      margin-bottom: 2px;
      padding-left: 8px;
      border-radius: 4px;
      &:hover {
        color: black;
        background: #f6f6f7;
      }
      &.router-link-exact-active {
        font-weight: bold;
        background: #f6f6f7;
        color: black;
      }
    }
  }
}
</style>
