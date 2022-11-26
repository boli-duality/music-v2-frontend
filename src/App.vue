<template>
  <div id="app">
    <!-- explain 动态设置网页标题 https://github.com/deboyblog/vue-wechat-title -->
    <router-view v-wechat-title="c_title" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    c_title() {
      console.log(this.$route)
      return '声海空游 - ' + this.$route.meta.title
    },
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
