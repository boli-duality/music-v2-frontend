<template>
  <div>布局</div>
</template>

<script>
import { searchSong } from '@/api/common'
import { getBanner } from '@/api/home'
export default {
  name: 'Layout',
  created() {
    searchSong({ keywords: '边缘行者' }).then(res => {
      console.log(res)
    })
    getBanner().then(res => {
      console.log(res)
    })
  },
}
</script>

<style lang="scss" scoped></style>
