// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AsideActions from './components/AsideActions.vue'
import NextSteps from './components/NextSteps.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NextSteps', NextSteps)
  },
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(AsideActions)
    })
}
