<script>
  export let image;
</script>

<img src={image.image} alt={image.name} loading="lazy" class="image" />

<style>
  .image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: var(--unit-2);
  }

  @media only screen and (min-width: 1100px) {
    .image {
      max-width: 930px;
      margin-bottom: var(--unit-5);
    }

    .image:first-child {
      max-width: 1050px;
      margin-bottom: 0;
    }
  }
</style>
