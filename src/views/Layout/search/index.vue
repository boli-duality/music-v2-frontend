<template>
  <div class="search">
    <h3>搜索结果：{{ $route.params.keyword }}</h3>
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
import { searchSong } from '@/api/search'

export default {
  name: 'Search',
  data() {
    return {
      result: '',
    }
  },
  watch: {
    $route() {
      this.searchAPI()
    },
  },
  created() {
    this.searchAPI()
  },
  methods: {
    async searchAPI() {
      const { result } = await searchSong({ keywords: this.$route.params.keyword })
      this.result = JSON.stringify(result.songs, null, 4)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
}
</style>
