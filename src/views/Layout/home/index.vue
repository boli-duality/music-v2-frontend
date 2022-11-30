<template>
  <div class="home">
    <h3>首页-发现:</h3>
    <pre>{{ homeData }}</pre>
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
}
</style>
