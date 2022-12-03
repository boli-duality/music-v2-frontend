<template>
  <div class="radio">
    播客

    <div style="height: 500px; width: 500px; border: 1px solid red; position: relative">
      <VueDragResize :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
        <p>
          Hello! I'm a flexible component. You can drag me around and you can resize me.<br />
          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}
        </p>
      </VueDragResize>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    },
  },
}
</script>

<style lang="scss" scoped>
.radio {
}
</style>
