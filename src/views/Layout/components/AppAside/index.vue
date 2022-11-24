<template>
  <aside class="app-aside">
    <ul class="list">
      <li v-for="item in systemList" :key="item.title" @click="onClick(item.path, $event)">
        {{ item.title }}
      </li>
    </ul>
    <dl class="list">
      <dt>我的音乐</dt>
      <dd v-for="item in myMusicList" :key="item.title" @click="onClick(item.path, $event)">
        {{ item.title }}
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
          path: 'home',
        },
        {
          title: '播客',
          path: '',
        },
        {
          title: '视频',
          path: 'videos',
        },
        {
          title: '关注',
          path: '',
        },
        {
          title: '直播',
          path: '',
        },
        {
          title: '私人FM',
          path: '',
        },
      ],
      myMusicList: [
        {
          title: '我喜欢的音乐',
          path: '',
        },
        {
          title: '本地与下载',
          path: '',
        },
        {
          title: '最近播放',
          path: '',
        },
      ],
    }
  },
  methods: {
    onClick(path, e) {
      this.$router.push(path)
      this.clearActive()
      e.target.classList.add('active')
    },
    clearActive() {
      const liEl = document.querySelectorAll('.list li')
      const ddEl = document.querySelectorAll('.list dd')
      const rmActive = e => e.classList.remove('active')
      liEl.forEach(rmActive)
      ddEl.forEach(rmActive)
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
      padding: 14px 8px 0;
      font-size: 13px;
    }
    dd,
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 36px;
      margin-bottom: 2px;
      padding-left: 8px;
      border-radius: 4px;
      &:hover {
        background: #f6f6f7;
      }
      &.active {
        background: #f6f6f7;
      }
    }
  }
}
</style>
