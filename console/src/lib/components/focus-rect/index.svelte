<script lang="ts">
  export let style = ''

  export let disabled = false

  let cssVars: string[] = []
  $: {
    cssVars = [
      `--focus-rect-color:${disabled ? 'transparent' : `var(--comp-focus-rect-color)`}`,
      `--focus-rect-width:var(--comp-focus-rect-width)`,
      `--focus-rect-border-radius:var(--comp-focus-rect-border-radius)`,
      `--focus-rect-padding:var(--comp-focus-rect-padding)`,
      `--focus-rect-bg-color:var(--comp-focus-bg-color)`,
    ]
  }
</script>

<div class="tui-focus-rect" style={`${cssVars.join(';')}${style ? `;${style}` : ''}`}>
  <div class="halo"><slot /></div>
</div>

<style>
  .tui-focus-rect .halo {
    margin-top: calc(-1 * (var(--focus-rect-width) + var(--focus-rect-padding)));
    margin-left: calc(-1 * (var(--focus-rect-width) + var(--focus-rect-padding)));

    padding: var(--focus-rect-padding);

    border-style: solid;
    border-color: transparent;
    border-width: var(--focus-rect-width);
    border-radius: var(--focus-rect-border-radius);
  }

  .tui-focus-rect .halo:focus-within {
    border-color: var(--focus-rect-color);
    background-color: var(--focus-rect-bg-color);
  }
</style>
