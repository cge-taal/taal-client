<script lang="ts">
  import Typo from '../typo/index.svelte'
  import { ComponentSize, LabelAlignment, LabelPlacement } from '$lib/styles/types'
  import type { ComponentSizeType, LabelAlignmentType, LabelPlacementType } from '$lib/styles/types'
  import type { TypoVariantType } from '../typo/types'

  export let testId: string | undefined | null = null

  let clazz: string | undefined | null = null
  export { clazz as class }

  export let style = ''

  export let disabled = false
  export let required = true
  export let label: any = ''
  export let variant: TypoVariantType = 'heading'
  export let interactive = false

  export let size: ComponentSizeType = ComponentSize.medium
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

  // TODO: handle sizes differently
  let typoSize = 1
  $: {
    switch (variant) {
      case 'heading':
        typoSize = size === ComponentSize.small ? 7 : 6
        break
      case 'body':
        switch (size) {
          case ComponentSize.small:
            typoSize = 4
            break
          case ComponentSize.medium:
            typoSize = 3
            break
          case ComponentSize.large:
            typoSize = 2
            break
        }
        break
    }
  }

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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  data-test-id={testId}
  class={`tui-label-container${clazz ? ' ' + clazz : ''}`}
  class:interactive={interactive && !disabled}
  style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
  on:click
>
  {#if label}
    <Typo
      {variant}
      size={typoSize}
      style={disabled ? '--color:var(--comp-label-disabled-color)' : ''}
    >
      {label}{#if required}&nbsp;*{/if}
    </Typo>
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
  .tui-label-container.interactive {
    cursor: pointer;
  }
</style>
