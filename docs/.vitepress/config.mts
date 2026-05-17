import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'vitepress-theme-oai',
  description: 'Installable VitePress theme extracted from the Motion documentation.',
  vite: {
    ssr: {
      noExternal: ['vitepress-theme-oai']
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Demo', link: '/' }
    ],
    sidebar: [
      {
        text: 'Theme',
        items: [
          { text: 'Demo', link: '/' }
        ]
      }
    ],
    footer: {
      message: 'vitepress-theme-oai',
      copyright: 'Copyright Kia Armani'
    }
  }
})
