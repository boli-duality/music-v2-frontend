<template>
  <div class="home">
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
    <div class="hot-pic">
      <el-carousel :key="carouselKey" ref="carousel" :interval="4000" type="card" height="200px">
        <el-carousel-item
          v-for="item in banners"
          :key="item.bannerId"
          :style="{ width: carouselItemW + 'px', left: carouselItemLeft + 'px' }"
        >
          <img class="el-carousel__item-img" :src="item.pic" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 推荐歌单 -->
    <div class="music-list">
      <a href="#">推荐歌单<i class="a-icon-yousanjiao"></i></a>
      <div class="music-list-pic">
        <ul class="line-one">
          <li v-for="item in rcmdList" :key="item.resourceId">
            <img :src="item.uiElement.image.imageUrl" alt="#" />
            <span>{{ item.uiElement.mainTitle.title }}</span>
          </li>
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
      banners: [],
      rcmdList: [],
      carouselItemW: 540,
      carouselItemLeft: 0,
      carouselKey: Date.now(),
    }
  },
  created() {
    this.getHomeAPI()
  },
  mounted() {
    this.setCarouselItemStyle()
  },
  methods: {
    setCarouselItemStyle() {
      const carouselItemW = this.$refs.carousel.$el.clientWidth / 2
      const offset = carouselItemW - this.carouselItemW
      let carouselItemLeft
      if (offset > 0) carouselItemLeft = offset / 2
      else carouselItemLeft = offset / 2
      this.carouselItemLeft = carouselItemLeft
    },
    async getHomeAPI() {
      // 1.獲取數據
      const { data } = await getHome()
      // // 轮播图长度
      // console.log(data.blocks)
      // // 轮播图图片
      // console.log(data.blocks[0].extInfo.banners[0].pic)

      // console.log(data.blocks[0].extInfo.banners[0].bannerId)
      // console.log(data.blocks[0].extInfo.banners)
      console.log(JSON.parse(JSON.stringify(data.blocks)))
      // TODO 處理數據
      // 推薦歌單
      const rcmd = data.blocks.find(e => e.blockCode === 'HOMEPAGE_BLOCK_PLAYLIST_RCMD')
      rcmd.creatives.splice(0, 1, ...rcmd.creatives[0].resources)
      // 3.渲染數據
      this.homeData = data.blocks
      this.banners = data.blocks[0].extInfo.banners
      this.rcmdList = rcmd.creatives
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  overflow: hidden;
  max-width: 1100px;
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
    .el-carousel__item-img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
        display: flex;
        flex-direction: column;
        width: 20%;
        img {
          // flex-grow: 1;
          // width: 20%;
          // height: 138px;
          margin: 13px 18px 0 0px;
          background-color: pink;
          // &:nth-child(5n) {
          //   margin-right: 0;
          // }
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
        min-width: 373px;
        width: 48%;
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
      > div {
        display: flex;
        flex-direction: column;
        width: 20%;
      }
      .img138 {
        min-width: 138;
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
      > div {
        display: flex;
        flex-direction: column;
        min-width: 242px;
        width: 34%;
      }
      .img242-136 {
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
        width: 32%;
        min-width: 244px;
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
