const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const { title } = require('./src/common/config/website')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 网页标题
    config.plugin('html').tap(args => {
      args[0].title = title
      return args
    })
    // explain 样式全局注入 https://blog.csdn.net/qq_37831545/article/details/126315428
    config.module.rule('scss').oneOfs.store.forEach(item => {
      item
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
          patterns: [path.resolve(__dirname, './src/common/styles/scss/mixins.scss')],
        })
        .end()
    })
  },
})
