<script setup lang="ts">
type NextStepIcon =
  | 'bolt'
  | 'box'
  | 'book'
  | 'code'
  | 'network'
  | 'play'
  | 'tool'

interface NextStepItem {
  title: string
  description: string
  href: string
  icon?: NextStepIcon
}

defineProps<{
  items: NextStepItem[]
}>()

const iconPaths: Record<NextStepIcon, string> = {
  bolt: 'M15.24 3.486v.002l-1.056 4.517h5.823c1.726 0 2.596 2.021 1.518 3.3l-.002.003-9.308 10.965-.002.002c-1.397 1.656-3.922.223-3.454-1.76v-.003l1.057-4.517H3.993c-1.726 0-2.596-2.021-1.519-3.3l.003-.003 9.308-10.965.002-.002c1.397-1.656 3.922-.223 3.454 1.76Zm-1.95-.444-1.34 5.735a.998.998 0 0 0 .973 1.226h7.074a.04.04 0 0 1 .003.01.045.045 0 0 1-.004.005l-9.287 10.94 1.341-5.735a.998.998 0 0 0-.973-1.226H4.003a.041.041 0 0 1-.003-.01l.004-.005 9.287-10.94Z',
  box: 'M12.5 3.444a1 1 0 0 0-1 0l-6.253 3.61 6.768 3.807 6.955-3.682-6.47-3.735Zm7.16 5.632L13 12.602v7.666l6.16-3.556a1 1 0 0 0 .5-.867V9.076ZM11 20.268v-7.683L4.34 8.839v7.006a1 1 0 0 0 .5.867L11 20.268Zm-.5-18.557a3 3 0 0 1 3 0l6.66 3.846a3 3 0 0 1 1.5 2.598v7.69a3 3 0 0 1-1.5 2.598L13.5 22.29a3 3 0 0 1-3 0l-6.66-3.846a3 3 0 0 1-1.5-2.598v-7.69a3 3 0 0 1 1.5-2.598L10.5 1.71Z',
  book: 'M5 4a3 3 0 0 1 3-3h10a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H8a1 1 0 1 0 0 2h10a1 1 0 1 1 0 2H8a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v14.17A2.98 2.98 0 0 1 8 18h9V3H8Zm2 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z',
  code: 'M14.447 7.106a1 1 0 0 1 .447 1.341l-4 8a1 1 0 1 1-1.788-.894l4-8a1 1 0 0 1 1.341-.447ZM6.6 7.2a1 1 0 0 1 .2 1.4L4.25 12l2.55 3.4a1 1 0 0 1-1.6 1.2l-3-4a1 1 0 0 1 0-1.2l3-4a1 1 0 0 1 1.4-.2Zm10.8 0a1 1 0 0 1 1.4.2l3 4a1 1 0 0 1 0 1.2l-3 4a1 1 0 0 1-1.6-1.2l2.55-3.4-2.55-3.4a1 1 0 0 1 .2-1.4Z',
  network: 'M6 4a3 3 0 1 1 2.83 4H8v2.5h8V8h-.83a3.001 3.001 0 1 1 0-2H17a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-4v3.67a3.001 3.001 0 1 1-2 0V12.5H7a1 1 0 0 1-1-1V8h-.17A3.001 3.001 0 0 1 6 4Zm0 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  play: 'M5 4.9c0-1.65 1.79-2.68 3.22-1.86l10.31 5.95c1.43.83 1.43 2.89 0 3.72L8.22 18.66C6.79 19.49 5 18.46 5 16.81V4.9Zm2.2-.13a.15.15 0 0 0-.2.13v11.91c0 .12.13.2.24.14l10.3-5.96a.16.16 0 0 0 0-.27L7.2 4.77Z',
  tool: 'M20.4 5.6a5.5 5.5 0 0 1-6.97 6.97l-7.22 7.22a2.5 2.5 0 1 1-3.54-3.54l7.22-7.22A5.5 5.5 0 0 1 16.86 2.1a1 1 0 0 1 .36 1.64l-2.5 2.5 3.03 3.03 2.5-2.5a1 1 0 0 1 1.64.36Zm-2.94 5.02a3.5 3.5 0 0 0 2.27-1.5l-1.27 1.27a1 1 0 0 1-1.42 0l-4.44-4.44a1 1 0 0 1 0-1.42l1.27-1.27a3.5 3.5 0 0 0-2.28 5.55 1 1 0 0 1-.1 1.25l-7.4 7.4a.5.5 0 1 0 .7.7l7.4-7.4a1 1 0 0 1 1.25-.1 3.5 3.5 0 0 0 2.04.16Z'
}

const chevronPath =
  'M9.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 0 1 0-1.414Z'

function iconPath(icon: NextStepIcon | undefined) {
  return iconPaths[icon ?? 'book']
}
</script>

<template>
  <div class="motion-next-steps not-prose">
    <a
      v-for="item in items"
      :key="item.href"
      class="motion-next-step"
      :href="item.href"
    >
      <span class="motion-next-step-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" :d="iconPath(item.icon)" />
        </svg>
      </span>
      <span class="motion-next-step-body">
        <span class="motion-next-step-title">
          <span>{{ item.title }}</span>
          <svg class="motion-next-step-chevron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" :d="chevronPath" />
          </svg>
        </span>
        <span class="motion-next-step-description">{{ item.description }}</span>
      </span>
    </a>
  </div>
</template>
