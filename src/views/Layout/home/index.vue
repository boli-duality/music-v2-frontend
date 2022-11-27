<template>
  <div class="home">
    <template v-for="i in 100"> <p :key="i">首页测试</p> </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
}
</style>
