<template>
  <section class="layout">
    <AppHeader></AppHeader>
    <section class="body">
      <AppAside></AppAside>
      <main class="main">
        <router-view></router-view>
      </main>
    </section>
    <AppFooter></AppFooter>
  </section>
</template>

<script>
import AppHeader from './components/AppHeader/index.vue'
import AppAside from './components/AppAside/index.vue'
import AppFooter from './components/AppFooter/index.vue'

export default {
  name: 'Layout',
  components: { AppHeader, AppAside, AppFooter },
  created() {
    this.$_request({
      url: '/login/status',
      method: 'post',
    }).then(res => {
      console.log(res, 'status')
    })
  },
}
</script>

<style lang="scss" scoped>
.layout {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 1022px;
  height: 670px;
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
