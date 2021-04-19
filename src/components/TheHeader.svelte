<script>
  import InstagramIcon from './icons/Instagram.svelte';
  import AnchorButton from './AnchorButton.svelte';
</script>

<header>
  <AnchorButton href="https://www.instagram.com/sidthecool007" target="_blank">
    <InstagramIcon />
  </AnchorButton>
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
      margin-bottom: var(--unit-7);
    }
  }
</style>
