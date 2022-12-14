<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { mediaSize, MediaSize } from '../../stores'
  import { getBreakpointForMediaSize } from '$lib/styles/breakpoints'

  import Icon from '../icon/index.svelte'
  import Logo from '../logo/index.svelte'

  const dispatch = createEventDispatcher()

  export let testId: string | undefined | null = null

  let clazz: string | undefined | null = null
  export { clazz as class }

  export let style = ''

  export let links: { path: string; label: string; selected?: boolean }[] = []
  export let open = false
  export let showLinks = true
  export let dataKey = 'path'

  let showMobile = false
  let showMenu = true

  $: {
    showMobile = false
    showMenu = true

    if ($mediaSize <= MediaSize.sm) {
      showMobile = true
      showMenu = false
    }
  }

  $: hasMenu = links.length > 0
  $: showHeaderMenu = showLinks && hasMenu && showMenu

  function onLink(item) {
    dispatch('link', item)
  }

  function onToggle() {
    open = !open
    dispatch('toggle-menu', { open })
  }

  $: tabVarStr = `--header-tab-default`

  let cssVars: string[] = []
  $: {
    let tabStates = ['enabled', 'hover', 'selected']
    cssVars = [
      ...tabStates.reduce(
        (acc, state) => [...acc, `--tab-${state}-bg-color:var(${tabVarStr}-${state}-bg-color)`],
        [] as string[]
      ),
      `--height:var(--header-height)`,
      `--padding:var(--header-size-${getBreakpointForMediaSize($mediaSize)}-padding)`,
      `--bg-color:var(--header-bg-color)`,
      `--logo-color:var(--header-logo-color)`,
      `--logo-width:var(--header-logo-width)`,
      `--logo-height:var(--header-logo-height)`,
      `--logo-margin-right:var(--header-logo-margin-right)`,
      `--menu-icon-size:var(--header-menu-icon-size)`,
      `--menu-icon-margin-right:var(--header-menu-icon-margin-right)`,
      `--tab-padding:var(--header-tab-padding)`,
      `--tab-border-radius:var(--header-tab-border-radius)`,
      `--tab-color:var(--header-tab-color)`,
      `--tab-font-size:var(--header-tab-font-size)`,
      `--tab-font-weight:var(--header-tab-font-weight)`,
      `--tab-line-height:var(--header-tab-line-height)`,
      `--tab-letter-spacing:var(--header-tab-letter-spacing)`,
      `--tab-gap:var(--header-tab-gap)`,
    ]
  }
</script>

<div
  data-test-id={testId}
  class={`tui-header2${clazz ? ' ' + clazz : ''}`}
  style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}
  class:small={$mediaSize === MediaSize.sm}
>
  <div class="content">
    {#if showMobile && hasMenu}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="icon" on:click={(e) => onToggle()}>
        <Icon
          name={open ? 'close' : 'menu'}
          style={`--width:var(--header-menu-icon-size);--height:var(--header-menu-icon-size)`}
        />
      </div>
    {/if}
    <div class="logo">
      <Logo
        name="taal"
        style={`--width:var(--header-logo-width);--height:var(--header-logo-height)`}
      />
    </div>
    {#if showHeaderMenu}
      <div class="links">
        {#each links as link, i (link[dataKey])}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="tab" class:selected={link.selected} on:click={(e) => onLink(link)}>
            {link.label}
          </div>
        {/each}
      </div>
    {/if}
    <div class="spacer" />
  </div>
</div>

<style>
  .tui-header2 {
    font-family: var(--font-family);
    box-sizing: var(--box-sizing);
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: var(--height);
    max-height: var(--height);
    width: 100%;
    padding: var(--padding);

    background-color: var(--bg-color);
  }
  .tui-header2.small {
    box-shadow: 0px 1px 10px rgba(46, 46, 46, 0.1);
  }

  .icon {
    width: var(--menu-icon-size);
    height: var(--menu-icon-size);
    margin-left: 0;
    margin-right: var(--menu-icon-margin-right);
    color: var(--logo-color);
    cursor: pointer;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: stretch;

    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    width: var(--logo-width);
    height: var(--logo-height);
    margin-right: var(--logo-margin-right);
    color: var(--logo-color);
  }

  .tab {
    padding: var(--tab-padding);

    font-size: var(--tab-font-size);
    font-weight: var(--tab-font-weight);
    line-height: var(--tab-line-height);
    letter-spacing: var(--tab-letter-spacing);
    white-space: nowrap;

    color: var(--tab-color);
    background-color: var(--tab-enabled-bg-color);
    border-radius: var(--tab-border-radius);
  }
  .tab:hover {
    background-color: var(--tab-hover-bg-color);
    cursor: pointer;
  }
  .tab.selected {
    background-color: var(--tab-selected-bg-color);
  }

  .links {
    display: flex;
    flex: 0;
    gap: var(--tab-gap);
  }
  .spacer {
    flex: 1;
  }
  .actions {
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
