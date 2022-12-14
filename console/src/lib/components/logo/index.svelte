<script lang="ts">
  import logos from './svg'
  import { toUnit } from '$lib/styles/utils/css'

  export let testId: string | undefined | null = null

  let clazz: string | undefined | null = null
  export { clazz as class }

  export let style = ''

  export let name: string | undefined | null = null
  export let width = -1
  export let height = -1

  let hasNoSize = true

  $: {
    hasNoSize = width === -1 && height === -1
  }

  let cssVars: string[] = []
  $: {
    cssVars = [
      `--width:${toUnit(width)}`,
      `--height:${hasNoSize ? toUnit(64) : toUnit(height)}`,
      `--margin:0`,
    ]
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  data-test-id={testId}
  class={`tui-logo${clazz ? ' ' + clazz : ''}`}
  style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
  class:w={width !== -1}
  class:h={height !== -1 || hasNoSize}
  on:click
>
  {#if logos[name]}
    {@html logos[name]}
  {/if}
</div>

<style>
  .tui-logo {
    display: flex;
    flex: 0 0 auto;
  }

  .tui-logo.w {
    width: var(--width);
  }

  .tui-logo.h {
    height: var(--height);
  }
</style>
