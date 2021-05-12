<script>
  import Anchor from './Anchor.svelte';
  import socialLinks from '../data/social-links';
  import IconLoader from './IconLoader.svelte';
</script>

<header>
  {#each socialLinks as socialLink}
    {#if !socialLink.excludeFromHeader}
      <Anchor href={socialLink.href} target="_blank" iconButton={true}>
        <IconLoader name={socialLink.id} />
      </Anchor>
    {/if}
  {/each}
</header>

<style>
  header {
    display: flex;
    color: var(--color-grey-50);
    align-items: center;
    justify-content: center;
    margin-top: var(--unit-3);
    margin-bottom: var(--unit-3);
  }

  header :global(a) {
    margin-left: var(--unit-6);
  }

  header :global(a:first-child) {
    margin-left: 0;
  }

  @media only screen and (min-width: 1100px) {
    header {
      margin-top: var(--unit-5);
      margin-bottom: var(--unit-6);
    }
  }
</style>
