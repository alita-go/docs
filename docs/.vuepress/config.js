const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: './dist',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'AlitaGo',
      description: 'AlitaGo 内容系统说明文档'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/default',
  themeConfig: {
    editLinks: false,
    docsDir: '/docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'Chinese',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: '最新更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/api/': getApiSidebar(),
          '/product/': getGuideSidebar('产品', 'Advanced')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
  ]
})

function getApiSidebar() {
  return [
    'cli',
    'node'
  ]
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}

function getThemeSidebar(groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config',
        'inheritance'
      ]
    },
  ]
}
