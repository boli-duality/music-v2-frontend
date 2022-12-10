<template>
  <VueDragResize
    :class="{ 'resize-trans': isResizeTrans, 'music-layout-radius': isRadius }"
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
    <section class="music-layout" :class="{ 'music-layout-radius': isRadius }">
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
import AppHeader from './components/AppHeader/index.vue'
import AppAside from './components/AppAside/index.vue'
import AppFooter from './components/AppFooter/index.vue'

// const html = document.documentElement

export default {
  name: 'MusicLayout',
  components: { AppHeader, AppAside, AppFooter },
  provide() {
    return {
      maximize: this.onMaximize,
      minimize: this.onMinimize,
    }
  },
  data() {
    return {
      isMaximise: false,
      isResizeTrans: false,
      isRadius: true,
      draggable: true,
      position: { x: 0, y: 0 },
      size: { w: 1022, h: 670 },
      htmlW: null,
      htmlH: null,
    }
  },
  computed: {
    c_range() {
      return {
        top: -54,
        left: -this.size.w + 6,
        right: document.documentElement.clientWidth - 6,
        bottom: document.documentElement.clientHeight - 6,
      }
    },
  },
  created() {
    this.setInitPositon() // 设置初始位置
    // TODO 监听窗口变化，动态修改盒子可拖拽范围、最大化范围
    // window.addEventListener('resize', () => {})
    // const resizeObserver = new ResizeObserver()
    // resizeObserver.observe(html, entries => {
    //   console.log(entries)
    // })
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
      // if (this.isMaximise) {
      //   console.log(this.oldSize)
      //   console.log('jinlaile')
      //   this.isMaximise = false
      //   this.size = this.oldSize
      //   console.log(this.size)
      //   this.isRadius = true
      // }
      console.log(x, y)
      this.position.x = x
      this.position.y = y
      let _x, _y
      if (x < this.c_range.left) _x = this.c_range.left
      else if (x > this.c_range.right) _x = this.c_range.right
      if (y < this.c_range.top) _y = this.c_range.top
      else if (y > this.c_range.bottom) _y = this.c_range.bottom
      if (_x != null || _y != null) return { x: _x, y: _y }
    },
    onResize(handle, x, y, w, h) {
      console.log(x, y, w, h)
      this.position.x = x
      this.position.y = y
      this.size.w = w
      this.size.h = h
      // TODO 限制resize不能超出屏幕范围
      // 上右下由x，y来限制
      // 左由-(x+w)来限制
    },
    onMaximize() {
      this.isMaximise = true
      this.setResizeTransition()
      this.isRadius = false
      this.oldPosition = this.position
      this.oldSize = this.size
      this.position = { x: 0, y: 0 }
      this.size = {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      }
    },
    onMinimize() {
      this.isMaximise = false
      this.setResizeTransition()
      this.isRadius = true
      this.position = this.oldPosition
      this.size = this.oldSize
    },
    setResizeTransition() {
      this.isResizeTrans = true
      setTimeout(() => (this.isResizeTrans = false), 300)
    },
  },
}
</script>

<style lang="scss" scoped>
.resize-trans {
  transition: all 0.3s;
}
.music-layout-radius {
  border-radius: 4px;
}
::v-deep.music-layout-drag {
  touch-action: none;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
  .handle {
    display: block !important;
    border: none;
    background: transparent;
    &.handle-mr {
      top: 0;
      right: -9px;
      margin-top: 0;
      height: 100%;
    }
    &.handle-tl {
      top: 0;
      left: 0;
    }
    &.handle-bl {
      left: 0;
      bottom: 0;
    }
    &.handle-tr {
      top: 0;
      right: 0;
    }
    &.handle-br {
      right: 0;
      bottom: 0;
    }
  }
}
.music-layout {
  user-select: none;
  overflow: hidden;
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
