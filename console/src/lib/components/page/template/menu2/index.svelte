<script lang="ts">
  import { goto } from '$app/navigation'
  import { menuLinks, mediaSize, MediaSize } from '../../../../stores'
  import Header2 from '../../../header2/index.svelte'
  import Footer from '../../../footer/index.svelte'
  import ContentMenu from '../../content/menu/index.svelte'
  import Sidebar from '../../../sidebar/index.svelte'

  const location = window.location

  export let testId: string | undefined | null = null

  let links: { path: string; label: string; selected?: boolean }[] = []
  let showSidebarMenu = false

  $: {
    links = $menuLinks.map((route) => ({
      ...route,
      selected: route.path === location.pathname,
    }))
    console.log('links =', links)
  }

  function onMenuItem(e) {
    goto(e.detail.path)
  }

  function onToggleMenu(e) {
    showSidebarMenu = e.detail.open
  }
</script>

<Header2
  showLinks={true}
  open={showSidebarMenu}
  {links}
  on:link={onMenuItem}
  on:action={onMenuItem}
  on:toggle-menu={onToggleMenu}
  testId="header"
/>

<div class="content-container" data-test-id={testId}>
  <ContentMenu>
    <slot />
  </ContentMenu>

  <Footer testId="footer" />
</div>

{#if showSidebarMenu && $mediaSize === MediaSize.sm}
  <Sidebar
    {links}
    on:link={onMenuItem}
    on:close={() => (showSidebarMenu = false)}
    testId="sidebar"
  />
{/if}

<style>
  .content-container {
    position: absolute;
    top: var(--header-height);
    width: 100%;
    height: calc(100% - var(--header-height));
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
