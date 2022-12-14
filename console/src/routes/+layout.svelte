<script lang="ts">
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import { menuLinks, mediaSize, MediaSize } from '$lib/stores'
  import { query } from '$lib/actions'
  import { medium, large } from '$lib/styles/breakpoints'
  import GlobalStyle from '$lib/styles/GlobalStyle.svelte'
  import Spinner from '$lib/components/spinner/index.svelte'
  import { spinCount } from '$lib/stores'
  import i18n from '$lib/i18n'

  $menuLinks = [
    {
      path: '/key-manager',
      label: $i18n.t('page.key-manager.menu-label'),
    },
    {
      path: '/history',
      label: $i18n.t('page.history.menu-label'),
    },
    {
      path: '/settings',
      label: $i18n.t('page.settings.menu-label'),
    },
    {
      path: '/send-data',
      label: $i18n.t('page.send-data.menu-label'),
    },
    {
      path: '/comps',
      label: 'Comps',
    },
  ]

  $: isMedium = query(medium)
  $: isLarge = query(large)
  $: {
    $mediaSize = $isLarge ? MediaSize.lg : $isMedium ? MediaSize.md : MediaSize.sm
  }

  const toastOptions = {
    duration: 3000, // duration of progress bar tween to the `next` value
    pausable: true, // pause progress bar tween on mouse hover
    dismissable: true, // allow dismiss with close button
    reversed: false, // insert new toast to bottom of stack
    intro: { y: 192 },
  }
</script>

<GlobalStyle>
  <slot />
</GlobalStyle>

{#if $spinCount > 0}
  <Spinner />
{/if}

<SvelteToast options={toastOptions} />
