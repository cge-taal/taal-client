<script lang="ts">
  import deepmerge from 'deepmerge'

  import { theme, themeNs } from '../stores'
  import { defaults, light } from './themes'
  import { setCSSVariables } from './utils/css'

  // web fonts
  import './inter.css'

  const themes = {
    light: light,
  }

  let themeProps = {}

  $: {
    themeProps = {}

    if ($theme !== null && themes[$theme]) {
      switch ($theme) {
        case 'light':
          themeProps = light
          break
      }
      localStorage.setItem('theme', $theme)
    } else {
      themeProps = light
    }

    setCSSVariables(deepmerge(defaults, themeProps), $themeNs)
  }
</script>

<slot />

<style>
  :global(:root) {
    --box-sizing: border-box;
    --font-family: 'Work Sans';

    background: #f4f6ff;
  }

  :global(body) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Work Sans';
  }

  :global(a),
  :global(a:hover),
  :global(a:focus),
  :global(a:visited),
  :global(a:active) {
    text-decoration: none;
    color: #0094ff;
  }

  :root {
    --toastContainerTop: auto;
    --toastContainerRight: auto;
    --toastContainerBottom: 30px;
    --toastContainerLeft: 30px;
    --toastBorder: none;
    --toastBorderRadius: 4px;
    --toastMsgPadding: 0;
    --toastWidth: 340px;
    --toastBarHeight: 2px;
    --toastBarBackground: #cdcbd0;
  }
  :global(._toastBtn) {
    z-index: 100;
    color: #282933;
    margin-top: 11px;
    margin-left: -104px;
    align-self: flex-start;
  }
</style>
