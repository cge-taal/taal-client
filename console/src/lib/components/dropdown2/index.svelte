<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { fade, slide } from 'svelte/transition'
  import { clickOutside } from '../../actions'
  import { FootnoteContainer, Icon, LabelContainer } from '../'
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

  export let label: any = ''
  export let footnote: any = ''
  export let required = false
  export let name = ''
  export let value: any = undefined
  export let multiple = false
  export let items: { value: any; label: string }[] = []
  export let disabled = false
  export let valid = true
  export let error = ''
  export let maxVisibleListItems = 3

  let type = 'select'

  let open = false

  export let labelPlacement: LabelPlacementType = LabelPlacement.top
  export let labelAlignment: LabelAlignmentType = LabelAlignment.start

  export let size: InputSizeType = ComponentSize.medium
  $: styleSize = getStyleSizeFromComponentSize(size)

  $: inputVarStr = `--input-default`
  $: inputSizeStr = `--input-size-${styleSize}`

  let cssVars: string[] = []
  $: {
    let states = ['enabled', 'hover', 'active', 'focus', 'disabled']
    cssVars = [
      ...states.reduce(
        (acc, state) => [
          ...acc,
          `--${state}-color:var(${inputVarStr}-${state}-color)`,
          `--${state}-bg-color:var(${inputVarStr}-${state}-bg-color)`,
          `--${state}-border-color:var(${inputVarStr}-${state}-border-color)`,
        ],
        [] as string[]
      ),
      `--invalid-border-color:var(--input-default-invalid-border-color)`,
      `--height:var(${inputSizeStr}-height)`,
      `--padding:var(${inputSizeStr}-padding)`,
      `--border-radius:var(${inputSizeStr}-border-radius)`,
      `--icon-size:var(${inputSizeStr}-icon-size)`,
      `--font-size:var(${inputSizeStr}-font-size)`,
      `--line-height:var(${inputSizeStr}-line-height)`,
      `--letter-spacing:var(${inputSizeStr}-letter-spacing)`,
      `--font-weight:var(--input-font-weight)`,
      `--border-width:var(--comp-border-width)`,
      `--gap:var(--button-icon-gap, 6px)`,
      `--list-height:calc(min(calc(${items.length} * var(${inputSizeStr}-height)), calc(${maxVisibleListItems} * var(${inputSizeStr}-height))))`,
      `--list-padding:var(--dropdown-list-padding)`,
      `--list-bg-color:var(--dropdown-list-bg-color)`,
      `--list-border-radius:var(--dropdown-list-border-radius)`,
      `--list-box-shadow:var(--dropdown-list-box-shadow)`,
      `--list-item-padding:var(--dropdown-size-${styleSize}-list-item-padding)`,
      `--list-item-enabled-bg-color:var(--dropdown-list-item-enabled-bg-color)`,
      `--list-item-hover-bg-color:var(--dropdown-list-item-hover-bg-color)`,
      `--list-item-selected-bg-color:var(--dropdown-list-item-selected-bg-color)`,
    ]
  }

  let focused = false

  let selectRef

  function onSelectParentClick() {
    selectRef.focus()
    open = !open
    if (open) {
      const result = items.filter((item) => item.value === value)
      if (result && result.length > 0) {
        arrowFocusIndex = items.indexOf(result[0])
      } else {
        arrowFocusIndex = 0
      }
    }
  }

  function onSelectChange(e) {
    arrowFocusIndex = -1
    value = items[e.srcElement.selectedIndex].value
    dispatch('change', { name, type, value })
    selectRef.focus()
  }

  function onClose() {
    open = false
  }

  function onItemSelect(val) {
    value = val
    open = false
    arrowFocusIndex = -1
    dispatch('change', { name, type, value })
    selectRef.focus()
  }

  let arrowFocusIndex = -1

  function onKeyDown(e) {
    if (!e) e = window.event
    const keyCode = e.code || e.key
    switch (keyCode) {
      case 'Space':
        e.preventDefault()
        onSelectParentClick()
        return false
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault()
        if (open) {
          arrowFocusIndex =
            keyCode === 'ArrowDown'
              ? (arrowFocusIndex + 1) % items.length
              : arrowFocusIndex === 0
              ? items.length - 1
              : (arrowFocusIndex - 1) % items.length
        }
        return false
      case 'Enter':
        e.preventDefault()
        if (open && arrowFocusIndex !== -1) {
          ;(document.querySelectorAll('.list-item')[arrowFocusIndex] as any).click()
        }
        return false
    }
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

<LabelContainer {size} {disabled} {label} {labelAlignment} {labelPlacement} {required}>
  <FootnoteContainer {footnote} {error} {disabled}>
    <div
      data-test-id={testId}
      class={`tui-dropdown2${clazz ? ' ' + clazz : ''}`}
      style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
      class:open
      use:clickOutside
      on:outclick={onClose}
      on:focus={(e) => (focused = true)}
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="select"
        class:disabled
        class:error={!valid || error !== ''}
        class:focused
        on:click={disabled ? null : onSelectParentClick}
      >
        <select
          bind:this={selectRef}
          {multiple}
          {disabled}
          {name}
          {value}
          on:change={onSelectChange}
          on:focus={() => onFocusAction('focus')}
          on:blur={() => onFocusAction('blur')}
          on:keydown={onKeyDown}
        >
          {#each items as item (item.value)}
            <option value={item.value}>
              {item.label}
            </option>
          {/each}
        </select>
        <div class="icon">
          <Icon
            class="icon"
            name="chevron-down"
            style={`--width:var(${inputSizeStr}-icon-size);--height:var(${inputSizeStr}-icon-size)`}
          />
        </div>
      </div>
      {#if open}
        <div class="list-container">
          <div
            in:slide
            out:fade
            class="list"
            style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
          >
            <div class="options-container">
              {#each items as item, i (item.value)}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  class="list-item"
                  class:selected={item.value === value}
                  class:arrowFocused={arrowFocusIndex === i}
                  on:click={() => onItemSelect(item.value)}
                >
                  <div>{item.label}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </FootnoteContainer>
</LabelContainer>

<style>
  .tui-dropdown2 {
    font-family: var(--font-family);
    box-sizing: var(--box-sizing);

    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .icon {
    width: var(--icon-size);
    height: var(--icon-size);
    transition: transform 0.2s ease-in-out;
  }
  .tui-dropdown2 .icon {
    transform: rotate(0deg);
  }
  .tui-dropdown2.open .icon {
    transform: rotate(180deg);
  }

  .list-container {
    position: relative;
    z-index: 200;
  }
  .list {
    position: absolute;
    width: 100%;
    overflow: hidden;

    box-sizing: var(--box-sizing);
    padding: var(--list-padding);

    background-color: var(--list-bg-color);
    border-radius: var(--list-border-radius);
    box-shadow: var(--dropdown-list-box-shadow);
  }
  .options-container {
    height: var(--list-height);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .list-item {
    display: flex;
    align-items: center;
    width: calc(100% -2px);
    height: var(--height);
    padding: var(--list-item-padding);

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    letter-spacing: var(--letter-spacing);

    border-radius: var(--border-radius);

    color: var(--enabled-color);
    background-color: var(--list-item-enabled-bg-color);

    cursor: pointer;
  }
  .list-item > div {
    margin: var(--list-item-padding);
  }
  .list-item:hover,
  .list-item:focus,
  .list-item.arrowFocused {
    background-color: var(--list-item-hover-bg-color);
    outline: none;
  }
  .list-item.selected {
    background-color: var(--list-item-selected-bg-color);
  }

  select {
    outline: none;
    border: none;
    width: calc(100% - var(--icon-size));
    background-color: inherit;
    appearance: none;
    pointer-events: none;

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    letter-spacing: var(--letter-spacing);
  }

  .select {
    display: flex;
    align-items: center;
    padding: var(--padding);
    height: var(--height);

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    letter-spacing: var(--letter-spacing);

    border-width: var(--border-width);
    border-style: solid;
    border-radius: var(--border-radius);

    color: var(--enabled-color);
    background-color: var(--enabled-bg-color);
    border-color: var(--enabled-border-color);

    cursor: pointer;
  }
  .select.disabled {
    cursor: auto;
  }

  .select.focused {
    color: var(--focus-color);
    background-color: var(--focus-bg-color);
    border-color: var(--focus-border-color);
  }
  .tui-dropdown2.open .select.focused {
    border-color: var(--enabled-border-color);
  }

  .select.error,
  .select.error.focused {
    border-color: var(--invalid-border-color);
  }

  .disabled,
  .disabled:active {
    background-color: var(--disabled-bg-color);
    border-color: var(--disabled-border-color);
  }
  .disabled select {
    background-color: var(--disabled-bg-color);
  }
</style>
