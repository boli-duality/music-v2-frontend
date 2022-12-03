<template>
  <VueDragResize
    :class="{ 'resize-trans': isResizeTrans, 'music-layout-drag-radius': isRadius }"
    class-name="music-layout-drag"
    drag-handle=".app-header"
    drag-cancel=".music-layout-drag-cancel"
    :x="position.x"
    :y="position.y"
    :w="size.w"
    :h="size.h"
    :min-width="1022"
    :min-height="670"
    :handles="['mr', 'tl', 'bl', 'tr', 'br']"
    :onDrag="onDrag"
    :onResize="onResize"
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
import { set } from 'vue'

export default {
  name: 'MusicLayout',
  components: { AppHeader, AppAside, AppFooter },
  data() {
    return {
      isResizeTrans: false,
      isRadius: true,
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
    // 缅怀jzm
    document.body.classList.add('big-event-gray')
    this.$_http({ url: '/login/status' })
    this.$_bus.$on('maximize', this.onMaximize)
    this.$_bus.$on('minimize', this.onMinimize)
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
      this.position.x = x
      this.position.y = y
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
    onResize(handle, x, y, w, h) {
      this.position.x = x
      this.position.y = y
      this.size.w = w
      this.size.h = h
    },
    onMaximize() {
      this.isResizeTrans = true
      this.isRadius = false
      setTimeout(() => (this.isResizeTrans = false), 300)
      this.oldPosition = this.position
      this.position = { x: 0, y: 0 }
      this.oldSize = this.size
      this.size = {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      }
    },
    onMinimize() {
      this.isResizeTrans = true
      this.isRadius = true
      setTimeout(() => (this.isResizeTrans = false), 300)
      this.position = this.oldPosition
      this.size = this.oldSize
    },
  },
}
</script>

<style lang="scss" scoped>
.resize-trans {
  transition: all 0.3s;
}
.music-layout-drag-radius {
  border-radius: 4px;
}
::v-deep.music-layout-drag {
  touch-action: none;
  overflow: hidden;
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
