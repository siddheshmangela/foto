<script>
  export let href;
  export let target;
</script>

<a class="anchor-button" {href} {target}>
  <slot />
</a>

<style>
  a {
    color: inherit;
    display: inline-flex;
    padding: var(--unit-1\2);
  }
</style>
