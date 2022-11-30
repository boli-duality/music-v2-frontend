<template>
  <div class="qr-login"></div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'QRLogin',
  created() {
    this.createQR()
  },
  methods: {
    async createQR() {
      const url = await QRCode.toDataURL('I am a pony!', { margin: 1.5 }).catch(err => {
        console.error(err)
      })
      console.log(url)
    },
  },
}
</script>

<style lang="scss" scoped>
.qr-login {
  position: absolute;
}
</style>
