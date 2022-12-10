<script lang="ts">
  import { FocusRect, FootnoteContainer, Icon, LabelContainer } from '$lib/components'
  import {
    ComponentSize,
    ComponentVariant,
    FlexDirection,
    getStyleSizeFromComponentSize,
  } from '$lib/styles/types'
  import type {
    ComponentSizeType,
    ComponentVariantType,
    FlexDirectionType,
  } from '$lib/styles/types'

  export let testId: string | undefined | null = null

  let clazz: string | undefined | null = null
  export { clazz as class }

  export let style = ''

  export let variant: ComponentVariantType = ComponentVariant.primary
  export let icon: string | undefined | null = null
  export let iconAfter: string | undefined | null = null

  let hasIcon = false
  let direction: FlexDirectionType = FlexDirection.row

  $: {
    hasIcon = Boolean(icon) || Boolean(iconAfter)

    if (hasIcon) {
      direction = icon ? FlexDirection.row : FlexDirection.rowReverse
    }
  }

  export let disabled = false
  export let selected = false
  export let toggle = false
  export let width = -1

  // size
  export let size: ComponentSizeType = ComponentSize.medium
  $: styleSize = getStyleSizeFromComponentSize(size)

  $: compVarStr = `--comp-${variant}`
  $: buttonVarStr = `--button-${variant}`
  $: compSizeStr = `--comp-size-${styleSize}`
  $: buttonSizeStr = `--button-size-${styleSize}`

  let cssVars: string[] = []
  $: {
    let states = ['enabled', 'hover', 'active', 'focus', 'disabled']
    cssVars = [
      ...states.reduce(
        (acc, state) => [
          ...acc,
          `--${state}-color:var(${buttonVarStr}-${state}-color, var(${compVarStr}-${state}-color))`,
          `--${state}-bg-color:var(${buttonVarStr}-${state}-bg-color, var(${compVarStr}-${state}-bg-color))`,
          `--${state}-border-color:var(${buttonVarStr}-${state}-border-color, var(${compVarStr}-${state}-border-color))`,
        ],
        [] as string[]
      ),
      `--height:var(${buttonSizeStr}-height, var(${compSizeStr}-height))`,
      `--padding:var(${buttonSizeStr}-padding, var(${compSizeStr}-padding))`,
      `--border-radius:var(${buttonSizeStr}-border-radius, var(${compSizeStr}-border-radius))`,
      `--icon-size:var(${buttonSizeStr}-icon-size, var(${compSizeStr}-icon-size))`,
      `--font-size:var(${buttonSizeStr}-font-size, var(${compSizeStr}-font-size))`,
      `--line-height:var(${buttonSizeStr}-line-height, var(${compSizeStr}-line-height))`,
      `--letter-spacing:var(${buttonSizeStr}-letter-spacing, var(${compSizeStr}-letter-spacing))`,
      `--font-weight:var(--button-font-weight, var(--comp-font-weight))`,
      `--border-width:var(--button-border-width, var(--comp-border-width))`,
      `--gap:var(--button-icon-gap, 6px)`,
    ]
  }
</script>

<LabelContainer label="Label" {size} {disabled}>
  <FootnoteContainer footnote="Hmmm" error="Ai tog, nog n fout" {disabled}>
    <FocusRect {disabled}>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div
        data-test-id={testId}
        class={`tui-button2${clazz ? ' ' + clazz : ''}`}
        style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
        class:disabled
        class:selected
        class:toggle
        style:--direction={direction}
        style:--width={width === -1 ? 'auto' : `${width}px`}
        tabindex="0"
        on:click
      >
        {#if hasIcon}
          <Icon
            name={icon || iconAfter}
            style={`--width:var(${buttonSizeStr}-icon-size, var(${compSizeStr}-icon-size));--height:var(${buttonSizeStr}-icon-size, var(${compSizeStr}-icon-size))`}
          />
        {/if}
        {#if $$slots.default}
          <div class="label"><slot /></div>
        {/if}
      </div>
    </FocusRect>
  </FootnoteContainer>
</LabelContainer>

<style>
  .tui-button2 {
    display: flex;
    flex-direction: var(--direction);
    align-items: center;
    justify-content: center;
    gap: var(--gap);

    outline: none;
    box-sizing: var(--box-sizing);

    width: var(--width);
    min-height: var(--height);
    max-height: var(--height);
    padding: var(--padding) !important;

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    letter-spacing: var(--letter-spacing);

    border-width: var(--border-width);
    border-style: solid;
    border-radius: var(--border-radius);
    cursor: pointer;
    user-select: none;

    color: var(--enabled-color);
    background-color: var(--enabled-bg-color);
    border-color: var(--enabled-border-color);
  }

  .tui-button2:focus {
    color: var(--focus-color);
    background-color: var(--focus-bg-color);
    border-color: var(--focus-border-color) !important;
  }

  .tui-button2:hover {
    color: var(--hover-color);
    background-color: var(--hover-bg-color);
    border-color: var(--hover-border-color);
  }

  .tui-button2:active {
    color: var(--active-color);
    background-color: var(--active-bg-color);
    border-color: var(--active-border-color);
  }

  .tui-button2:disabled,
  .tui-button2.disabled {
    color: var(--disabled-color);
    background-color: var(--disabled-bg-color);
    border-color: var(--disabled-border-color);
    cursor: auto;
  }

  .tui-button2 .label {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
</style>
