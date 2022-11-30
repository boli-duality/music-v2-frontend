<template>
  <div class="home">
    <!-- <h3>首页-发现</h3> -->
    <!-- <pre>{{ homeData }}</pre> -->
    <!-- 头部 -->
    <div class="list">
      <ul class="title">
        <a href="#"> <li>个性推荐</li></a
        ><a href="#"> <li>专属定制</li></a
        ><a href="#"> <li>歌单</li></a
        ><a href="#"> <li>排行榜</li></a
        ><a href="#"> <li>歌手</li></a
        ><a href="#"> <li>最新音乐</li></a>
      </ul>
    </div>
    <!-- 轮播图 -->
    <div class="hot-pic"></div>
    <!-- 推荐歌单 -->
    <div class="music-list">
      <a href="#">推荐歌单<i class="a-icon-yousanjiao"></i></a>
      <div class="music-list-pic">
        <ul>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
          <li><img src="./138.png" alt="#" />img</li>
        </ul>
      </div>
    </div>
    <!-- 热门播客 -->
    <div class="hot-book">
      <a href="#">热门播客<i class="a-icon-yousanjiao"></i></a>
      <div class="hot-book-list">
        <div>
          <div class="img76">img</div>
          123
        </div>
        <div>
          <div class="img76">img</div>
          123
        </div>
        <div>
          <div class="img76">img</div>
          123
        </div>
        <div>
          <div class="img76">img</div>
          123
        </div>
        <div>
          <div class="img76">img</div>
          123
        </div>
        <div>
          <div class="img76">img</div>
          123
        </div>
      </div>
    </div>
    <!-- 听见好书 -->
    <div class="listen-book">
      <a href="#">听见好书<i class="a-icon-yousanjiao"></i></a>
      <div class="listen-book-list">
        <div>
          <div class="img138">img</div>
          123
        </div>
        <div>
          <div class="img138">img</div>
          123
        </div>
        <div>
          <div class="img138">img</div>
          123
        </div>
        <div>
          <div class="img138">img</div>
          123
        </div>
        <div>
          <div class="img138">img</div>
          123
        </div>
      </div>
    </div>
    <!-- 独家放送 -->
    <div class="only">
      <a href="#">独家放送<i class="a-icon-yousanjiao"></i></a>
      <div class="only-list">
        <div>
          <div class="img242-136">img</div>
          123
        </div>
        <div>
          <div class="img242-136">img</div>
          123
        </div>
        <div>
          <div class="img242-136">img</div>
          123
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="new-music">
      <a href="#">最新音乐<i class="a-icon-yousanjiao"></i></a>
      <div class="new-music-list">
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
        <div>
          <div class="img48">img</div>
          123
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHome } from '@/api/home'

export default {
  name: 'Home',
  data() {
    return {
      homeData: [],
    }
  },
  created() {
    this.getHomeAPI()
  },
  methods: {
    async getHomeAPI() {
      const { data } = await getHome()
      this.homeData = JSON.stringify(data.blocks, null, 4)
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin-left: 30px;
  overflow: hidden;
  .title {
    display: flex;
    li {
      margin-top: 24px;
      margin-right: 30px;
      font-size: 16px;
      color: #373737;
      &:hover {
        color: #000;
      }
    }
  }
  .hot-pic {
    width: 760px;
    height: 200px;
    margin-top: 18px;
    background-color: pink;
  }
  .music-list {
    margin-top: 30px;
    a {
      width: 105px;
      font-size: 20px;
      font-weight: bold;
      color: #373737;
      &:hover {
        color: #000;
      }
    }
    i {
      margin-left: 3px;
    }
    .music-list-pic ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 138px;
        height: 138px;
        margin: 13px 18px 55px 0;
        background-color: pink;
        &:nth-child(5n) {
          margin-right: 0;
        }
      }
    }
  }
  .hot-book {
    margin-top: 30px;
    margin-bottom: 44px;
    a {
      width: 105px;
      font-size: 20px;
      font-weight: bold;
      color: #373737;
      &:hover {
        color: #000;
      }
    }
    .hot-book-list {
      display: flex;
      flex-wrap: wrap;
      > div {
        display: flex;
        width: 373px;
        height: 76px;
        margin-top: 13px;
        margin-right: 16px;
        background-color: pink;
        &:nth-child(2n) {
          margin-right: 0;
        }
        div {
          height: 76px;
          width: 76px;
          background-color: red;
        }
      }
    }
  }
  .listen-book {
    a {
      width: 105px;
      font-size: 20px;
      font-weight: bold;
      color: #373737;
      &:hover {
        color: #000;
      }
    }
    .listen-book-list {
      display: flex;
      margin-bottom: 44px;
      .img138 {
        height: 138px;
        width: 138px;
        margin: 13px 18px 12px 0;
        background-color: pink;
      }
    }
  }
  .only {
    margin-bottom: 40px;
    a {
      width: 105px;
      font-size: 20px;
      font-weight: bold;
      color: #373737;
      &:hover {
        color: #000;
      }
    }
    .only-list {
      display: flex;
      .img242-136 {
        width: 242px;
        height: 136px;
        margin: 13px 18px 12px 0;
        background-color: pink;
      }
    }
  }
  .new-music {
    a {
      width: 105px;
      font-size: 20px;
      font-weight: bold;
      color: #373737;
      &:hover {
        color: #000;
      }
    }
    .new-music-list {
      display: flex;
      flex-wrap: wrap;
      & :hover {
        background-color: #ebebeb;
      }
      > div {
        display: flex;
        width: 244px;
        height: 49px;
        margin: 13px 11px 16px 0;
        background-color: pink;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      .img48 {
        width: 48px;
        height: 48px;
        background-color: red;
      }
    }
  }
}
</style>
