<script>
  import Anchor from './Anchor.svelte';
  import socialLinks from '../data/social-links';
  import IconLoader from './IconLoader.svelte';
</script>

<nav>
  {#each socialLinks as socialLink}
    <Anchor href={socialLink.href} target="_blank">
      <IconLoader name={socialLink.id} />
      {socialLink.name}
    </Anchor>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    color: var(--color-grey-40);
    justify-content: center;
    padding-top: var(--unit-2);
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-family: serif;
    margin: 0 auto;
    margin-top: var(--unit-6);
    padding-left: var(--unit-2);
  }

  nav > :global(a) {
    margin-bottom: var(--unit-3);
  }

  @media only screen and (min-width: 1100px) {
    nav {
      flex-direction: row;
      padding-left: 0;
      font-size: 1rem;
      margin-top: var(--unit-5);
    }

    nav > :global(a) {
      margin-left: var(--unit-3);
    }

    nav > :global(a:first-child) {
      margin-left: 0;
    }
  }
</style>
