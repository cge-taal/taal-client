<script>
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import { menuLinks, menuActions, mediaSize } from '$lib/stores'
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
  ]
  $menuActions = [
    {
      path: '/send-data',
      label: $i18n.t('page.send-data.menu-label'),
    },
  ]

  $: isMedium = query(medium)
  $: isLarge = query(large)
  $: {
    $mediaSize = $isLarge ? 'large' : $isMedium ? 'medium' : 'small'
  }

  const toastOptions = {
    duration: 3000, // duration of progress bar tween to the `next` value
    pausable: true, // pause progress bar tween on mouse hover
    dismissable: true, // allow dismiss with close button
    reversed: false, // insert new toast to bottom of stack
    intro: { y: 192 },
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<GlobalStyle>
  <slot />
</GlobalStyle>

{#if $spinCount > 0}
  <Spinner />
{/if}

<SvelteToast options={toastOptions} />
