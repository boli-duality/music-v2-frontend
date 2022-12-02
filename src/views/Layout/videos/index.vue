<template>
  <div class="videos">视频页</div>
</template>

<script>
import { recommendVideo } from '@/api/video'

export default {
  name: 'videos',
  created() {
    this.recommendVideoAPI()
  },
  methods: {
    async recommendVideoAPI() {
      const res = await recommendVideo()
      console.log(res)
    },
  },
}
</script>

<style lang="scss" scoped>
.videos {
}
</style>
