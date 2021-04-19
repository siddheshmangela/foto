<script>
  export let image;
</script>

<img src={image.image} alt={image.name} loading="lazy" class="image" />

<style>
  .image {
    width: 100%;
    height: 250px;
    display: block;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: var(--unit-1\2);
  }

  @media only screen and (min-width: 640px) {
    .image {
      height: 600px;
    }
  }

  @media only screen and (min-width: 1100px) {
    .image {
      max-width: 950px;
      height: auto;
      margin-bottom: var(--unit-7);
    }

    .image:first-child {
      max-width: 1000px;
      margin-bottom: 0;
    }
  }
</style>
