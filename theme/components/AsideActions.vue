<script setup lang="ts">
import { useData } from 'vitepress'

const { page } = useData()

const markdownPages = import.meta.glob('/**/*.md', {
  query: '?raw',
  import: 'default'
})

function markdownLoader(relativePath: string) {
  const normalizedPath = relativePath.replace(/\\/g, '/').replace(/^\/+/, '')
  const candidates = [
    `/${normalizedPath}`,
    `/docs/${normalizedPath}`,
  ]

  return candidates
    .map(candidate => markdownPages[candidate])
    .find(loader => typeof loader === 'function')
}

async function copyPage() {
  try {
    const loader = markdownLoader(page.value.relativePath)
    const markdown = typeof loader === 'function' ? await loader() : null

    if (typeof markdown === 'string') {
      await navigator.clipboard.writeText(markdown)
      return
    }

    await navigator.clipboard.writeText(window.location.href)
  } catch {}
}
</script>

<template>
  <div class="motion-aside-actions">
    <button
      class="motion-aside-action"
      type="button"
      @click="copyPage"
    >
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10.5 1.5a2 2 0 0 1 2 2V9h-1.5V3.5a.5.5 0 0 0-.5-.5H5V1.5zm-5 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm0 1.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5"
        />
      </svg>
      <span>Copy page</span>
    </button>
  </div>
</template>
