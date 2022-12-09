<script lang="ts">
  import icons from './svg'
  import { toUnit } from '$lib/styles/utils/css'

  export let testId: string | undefined | null = null

  let clazz: string | undefined | null = null
  export { clazz as class }

  export let style = ''

  export let name: string | null | undefined = null
  export let size = 24
  export let opacity = 1

  let cssVars: string[] = []
  $: {
    cssVars = [`--width:${toUnit(size)}`, `--height:${toUnit(size)}`, `--opacity:${opacity}`]
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  data-test-id={testId}
  class={`tui-icon${clazz ? ' ' + clazz : ''}`}
  style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
  on:click
>
  {#if name && icons[name]}
    {@html icons[name]}
  {/if}
</div>

<style>
  .tui-icon {
    display: flex;
    flex: 0;
    opacity: var(--opacity);
    width: var(--width);
    height: var(--height);
  }
</style>
