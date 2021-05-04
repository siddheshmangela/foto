<script>
  import InstagramIcon from './icons/Instagram.svelte';
  import Anchor from './Anchor.svelte';
</script>

<header>
  <Anchor
    href="https://www.instagram.com/sidthecool007"
    target="_blank"
    iconButton={true}
  >
    <InstagramIcon />
  </Anchor>
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

  @media only screen and (min-width: 1100px) {
    header {
      margin-top: var(--unit-5);
      margin-bottom: var(--unit-6);
    }
  }
</style>
