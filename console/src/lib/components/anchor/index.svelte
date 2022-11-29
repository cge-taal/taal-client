<script lang="ts">
  export let testId: string | undefined | null = null

  export let href = null
  export let text = null
  export let external = true

  let propObj = {}
  let prefix = ''

  $: if (external) {
    propObj = { target: '_blank', rel: 'noopener noreferrer' }
    try {
      const url = href ? new URL(href) : null
      if (url && !url.protocol) {
        prefix = 'https://'
      }
    } catch (e) {
      prefix = 'https://'
    }
  }
</script>

<a href={prefix + href} {...propObj} data-test-id={testId}>{text || href}</a>

<style>
  a {
    color: #0094ff;
  }
</style>
