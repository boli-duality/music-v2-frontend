<template>
  <VueDragResize
    class-name="music-layout-drap"
    drag-handle=".app-header"
    drag-cancel=".music-layout-drag-cancel"
    :w="reSize.w"
    :h="reSize.h"
    :min-width="reSize.w"
    :min-height="reSize.h"
    :x="dragPosition.x"
    :y="dragPosition.y"
    :handles="['mr', 'tl', 'bl', 'tr', 'br']"
    :onDrag="onDrag"
  >
    <section class="layout">
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
  name: 'Layout',
  components: { AppHeader, AppAside, AppFooter },
  data() {
    return {
      draggable: true,
      dragPosition: { x: 0, y: 0 },
      reSize: {
        w: 1022,
        h: 670,
      },
      // dragRange:{
      //   top:this.dragPosition.
      // }
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
      const centerX = clientWidth / 2 - this.reSize.w / 2
      const centerY = clientHeight / 2 - this.reSize.h / 2 - 52
      this.dragPosition.x = centerX > 0 ? centerX : 0
      this.dragPosition.y = centerY > 0 ? centerY : 0
    },
    onDrag(x, y) {
      console.log('x: ', x)
      console.log('y: ', y)
      console.log(x <= -100)
      // -1018
      if (x <= -1018 || y <= -59) return false
      // if (x<=-this.reSize.w)
      // this.x = x
      // this.y = y
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep.music-layout-drap {
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
.layout {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // width: 1022px;
  // height: 670px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
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
