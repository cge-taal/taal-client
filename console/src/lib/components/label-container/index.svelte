<script lang="ts">
  import Typo from '../typo/index.svelte'
  import { ComponentSize, LabelAlignment, LabelPlacement } from '$lib/types'
  import type { ComponentSizeType, LabelAlignmentType, LabelPlacementType } from '$lib/types'

  export let testId: string | undefined | null = null

  let clazz: string | undefined | null = null
  export { clazz as class }

  export let style = ''

  export let size: ComponentSizeType = ComponentSize.medium
  export let label: any = ''

  export let labelPlacement: LabelPlacementType = LabelPlacement.top
  export let labelAlignment: LabelAlignmentType = LabelAlignment.start

  let direction = 'row'
  let justify = 'flex-start'

  $: {
    switch (labelPlacement) {
      case 'top':
        direction = 'column'
        break
      case 'bottom':
        direction = 'column-reverse'
        justify = 'flex-end'
        break
      case 'left':
        direction = 'row'
        break
      case 'right':
        direction = 'row-reverse'
        justify = 'flex-end'
        break
    }
  }

  let labelAlign = 'center'

  $: {
    switch (labelAlignment) {
      case 'start':
        labelAlign = 'flex-start'
        break
      case 'center':
        labelAlign = 'center'
        break
      case 'end':
        labelAlign = 'flex-end'
        break
    }
  }

  $: headingSize = size === ComponentSize.small ? 7 : 6

  let cssVars: string[] = []
  $: {
    cssVars = [
      `--direction:${direction}`,
      `--justify:${justify}`,
      `--label-align:${labelAlign}`,
      `--gap:var(--comp-label-gap, 8px)`,
    ]
  }
</script>

<div
  data-test-id={testId}
  class={`tui-label-container${clazz ? ' ' + clazz : ''}`}
  style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
>
  {#if label}
    <Typo variant="heading" size={headingSize}>{label}</Typo>
  {/if}
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .tui-label-container {
    display: flex;
    flex-direction: var(--direction);
    align-items: var(--label-align);
    justify-content: var(--justify);
    gap: var(--gap);
  }
</style>
