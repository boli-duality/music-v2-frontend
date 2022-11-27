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
    searchAPI() {
      searchSong({ keywords: this.$route.params.keyword }).then(({ result }) => {
        this.result = JSON.stringify(result.songs, null, 4)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
}
</style>
