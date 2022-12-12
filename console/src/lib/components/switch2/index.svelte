<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { FocusRect, FootnoteContainer, Icon, LabelContainer } from '../'
  import {
    ComponentSize,
    LabelAlignment,
    LabelPlacement,
    getStyleSizeFromComponentSize,
  } from '$lib/styles/types'
  import type { LabelAlignmentType, LabelPlacementType } from '$lib/styles/types'
  import type { InputSizeType } from '$lib/styles/types/input'

  const dispatch = createEventDispatcher()

  export let testId: string | undefined | null = null

  let clazz: string | undefined | null = null
  export { clazz as class }

  export let style = ''

  export let label: any = 'Lalala'
  export let footnote: any = ''
  export let required = false
  export let name = ''
  export let checked = false
  export let disabled = false
  export let valid = true
  export let error = ''

  let type = 'checkbox'

  export let labelPlacement: LabelPlacementType = LabelPlacement.right
  export let labelAlignment: LabelAlignmentType = LabelAlignment.center

  export let size: InputSizeType = ComponentSize.large
  $: styleSize = getStyleSizeFromComponentSize(size)

  $: cbVarStr = `--switch-default`
  $: switchSizeStr = `--switch-size-${styleSize}`

  let cssVars: string[] = []
  $: {
    let states = ['enabled', 'hover', 'focused', 'checked', 'disabled', 'checked-disabled']
    cssVars = [
      ...states.reduce(
        (acc, state) => [
          ...acc,
          `--${state}-color:var(${cbVarStr}-${state}-color)`,
          `--${state}-bg-color:var(${cbVarStr}-${state}-bg-color)`,
          `--${state}-border-color:var(${cbVarStr}-${state}-border-color)`,
        ],
        [] as string[]
      ),
      `--invalid-border-color:var(--checkbox-default-invalid-border-color)`,
      `--width:var(${switchSizeStr}-width)`,
      `--height:var(${switchSizeStr}-height)`,
      `--padding:var(${switchSizeStr}-padding)`,
      `--border-width:var(--comp-border-width)`,
      `--border-radius:var(--checkbox-border-radius)`,
      `--icon-size:var(${switchSizeStr}-icon-size)`,
    ]
  }

  let focused = false

  let inputRef

  function onInputParentClick() {
    inputRef.focus()
    checked = !checked
    dispatch('change', { name, type, checked })
  }

  function onFocusAction(eventName) {
    switch (eventName) {
      case 'blur':
        focused = false
        break
      case 'focus':
        focused = true
        break
    }
    dispatch(eventName)
  }
</script>

<FootnoteContainer {footnote} {error} {disabled}>
  <LabelContainer
    variant="body"
    {size}
    {disabled}
    {label}
    {labelAlignment}
    {labelPlacement}
    {required}
    margin="-4px 0 0 0"
    interactive
    on:click={disabled ? null : onInputParentClick}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      data-test-id={testId}
      class={`tui-switch2${clazz ? ' ' + clazz : ''}`}
      style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
    >
      <FocusRect
        {disabled}
        style={`--focus-rect-width:1px;--focus-rect-bg-color:#FFFFFF;--focus-rect-padding:1px;--focus-rect-border-radius:calc(var(--height) / 2 + var(--padding))`}
      >
        <div class="input" class:disabled class:error={!valid} class:focused class:checked>
          <input
            bind:this={inputRef}
            {type}
            {name}
            {checked}
            on:focus={() => onFocusAction('focus')}
            on:blur={() => onFocusAction('blur')}
          />
          <div
            class="icon"
            style={`width:var(${switchSizeStr}-icon-size); height:var(${switchSizeStr}-icon-size); border-radius:calc(var(${switchSizeStr}-icon-size) / 2)`}
          />
        </div>
      </FocusRect>
    </div>
  </LabelContainer>
</FootnoteContainer>

<style>
  .tui-switch2 {
    font-family: var(--font-family);
    box-sizing: var(--box-sizing);
  }

  .icon {
    width: var(--icon-size);
    height: var(--icon-size);
    background-color: var(--enabled-color);

    margin-left: var(--padding);
    transition: margin-left 0.2s ease-in-out;
  }
  .input.checked .icon {
    margin-left: calc(var(--width) - var(--padding) - var(--icon-size));
  }

  input {
    outline: none;
    border: none;
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: var(--width);
    height: var(--height);

    border-width: var(--border-width);
    border-style: solid;
    border-radius: calc(var(--height) / 2);

    color: var(--enabled-color);
    background-color: var(--enabled-bg-color);
    border-color: var(--enabled-border-color);
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

    cursor: var(--cursor-local);
  }
  .input .icon {
    background-color: currentColor;
  }

  .input:hover {
    color: var(--hover-color);
    background-color: var(--hover-bg-color);
    border-color: var(--hover-border-color);
  }

  .input.focused.checked {
    color: var(--checked-color);
    background-color: var(--focused-bg-color);
    border-color: var(--focused-border-color);
  }

  .input.error,
  .input.error.focused {
    color: var(--enabled-color);
    border-color: var(--invalid-border-color);
  }

  .input.checked {
    color: var(--checked-color);
    background-color: var(--checked-bg-color);
    border-color: var(--checked-border-color);
  }

  .disabled,
  .disabled:active,
  .input.disabled {
    color: var(--checked-disabled-color);
    background-color: var(--disabled-bg-color);
    border-color: var(--disabled-border-color);
  }

  .input.checked.disabled {
    color: var(--checked-disabled-color);
    background-color: var(--checked-disabled-bg-color);
    border-color: var(--checked-disabled-border-color);
  }
</style>
