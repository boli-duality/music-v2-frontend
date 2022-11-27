<template>
  <footer class="app-footer"><audio :src="songUrl" controls></audio></footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      songUrl: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.app-footer {
  @include flex-c;
  height: 73px;
  border-top: 1px solid #e0e0e0;
}
</style>
