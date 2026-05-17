# vitepress-theme-oai

Installable VitePress theme extracted from the Motion documentation.

Published on npm as [`vitepress-theme-oai@0.1.0`](https://www.npmjs.com/package/vitepress-theme-oai/v/0.1.0).

## Install

```sh
npm install vitepress-theme-oai vitepress vue
```

The theme includes:

- the VitePress default theme extension used by the Motion docs
- Motion/OAI typography, navigation, sidebar, document, table, code, Mermaid, and home-page styles
- a global `NextSteps` component
- the `aside-outline-after` Copy page action

## Use The Theme

Create or update `.vitepress/theme/index.ts` in your VitePress project:

```ts
export { default } from 'vitepress-theme-oai'
```

Then keep the package inside Vite's SSR transform pipeline from `.vitepress/config.mts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['vitepress-theme-oai']
    }
  }
})
```

## Mermaid

The theme contains Mermaid CSS fixes, but it does not install or configure a Mermaid Markdown plugin. If your docs use Mermaid diagrams, keep using your preferred VitePress Mermaid integration.

## Develop

```sh
npm install
npm run docs:dev
npm run docs:build
```
