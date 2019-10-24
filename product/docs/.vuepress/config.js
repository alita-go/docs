module.exports = ctx => ({
  dest: './dist',
  locales: require('./config/locales'),
  head: require('./config/head'),
  theme: '@vuepress/vue',
  themeConfig: require('./config/themeConfig')({
    ctx
  }),
  plugins: require('./config/plugins'),
  extraWatchFiles: require('./config/extraWatchFiles')
})
