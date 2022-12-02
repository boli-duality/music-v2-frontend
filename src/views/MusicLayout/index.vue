<template>
  <VueDragResize
    class-name="music-layout-drag"
    drag-handle=".app-header"
    drag-cancel=".music-layout-drag-cancel"
    :w="size.w"
    :h="size.h"
    :min-width="size.w"
    :min-height="size.h"
    :x="position.x"
    :y="position.y"
    :handles="['mr', 'tl', 'bl', 'tr', 'br']"
    :onDrag="onDrag"
  >
    <section class="music-layout">
      <AppHeader></AppHeader>
      <section class="body music-layout-drag-cancel">
        <AppAside></AppAside>
        <main class="main">
          <router-view></router-view>
        </main>
      </section>
      <AppFooter class="music-layout-drag-cancel"></AppFooter>
    </section>
  </VueDragResize>
</template>

<script>
/* eslint-disable */
import AppHeader from './components/AppHeader/index.vue'
import AppAside from './components/AppAside/index.vue'
import AppFooter from './components/AppFooter/index.vue'

export default {
  name: 'MusicLayout',
  components: { AppHeader, AppAside, AppFooter },
  data() {
    return {
      draggable: true,
      position: { x: 0, y: 0 },
      size: { w: 1022, h: 670 },
      range: {
        top: -60,
        left: -1019,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight,
      },
    }
  },
  created() {
    this.$_http({ url: '/login/status' })
  },
  mounted() {
    this.setInitPositon()
  },
  methods: {
    setInitPositon() {
      const { clientWidth, clientHeight } = document.documentElement
      const centerX = clientWidth / 2 - this.size.w / 2
      const centerY = clientHeight / 2 - this.size.h / 2 - 52
      this.position.x = centerX > 0 ? centerX : 0
      this.position.y = centerY > 0 ? centerY : 0
    },
    onDrag(x, y) {
      console.log('x: ', x)
      console.log('y: ', y)
      console.log(x <= -100)
      // -1018
      if (x <= this.range.left) {
        this.position.x = this.range.left
        return false
      }
      if (y <= this.range.top) {
        this.position.y = this.range.top
        return false
      }
      if (x >= this.range.right) {
        this.position.x = this.range.right
        return false
      }
      if (y >= this.range.bottom) {
        this.position.y = this.range.bottom
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep.music-layout-drag {
  touch-action: none;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
  @mixin hidden {
    border: none;
    background: transparent;
  }
  .handle {
    display: block !important;
    &.handle-mr {
      top: 0;
      right: -5px;
      margin-top: 0;
      width: 8px;
      height: 100%;
      @include hidden;
    }
    &.handle-tl {
      top: 0;
      left: 0;
      @include hidden;
    }
    &.handle-bl {
      left: 0;
      bottom: 0;
      @include hidden;
    }
    &.handle-tr {
      top: 0;
      right: 0;
      @include hidden;
    }
    &.handle-br {
      right: 0;
      bottom: 0;
      @include hidden;
    }
  }
}
.music-layout {
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .body {
    overflow: hidden;
    flex: 1;
    display: flex;
    .main {
      overflow: auto;
      flex: 1;
    }
  }
}
</style>
