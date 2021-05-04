<script>
  export let href;
  export let target;
  export let iconButton;
</script>

<a
  class="anchor"
  rel="noreferrer nofollow"
  class:icon={iconButton}
  {href}
  {target}
>
  <slot />
</a>

<style>
  a {
    color: inherit;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  a > :global(svg) {
    margin-right: 6px;
    width: 0.9rem;
    height: 0.9rem;
  }

  a.icon {
    padding: var(--unit-1\2);
  }

  a.icon > :global(svg) {
    margin-right: initial;
    width: initial;
    height: initial;
  }
</style>
