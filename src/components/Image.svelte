<script>
  import { publicPath } from '../utils';
  export let image;

  let imageSrc = image.image;

  const handleAfterImageLoad = () => {
    const filenameArray = image.image.split('/');
    const fileName = filenameArray[filenameArray.length - 1];

    imageSrc = `${publicPath}/images/${fileName}`;
  };
</script>

<img
  src={imageSrc}
  alt={image.name}
  loading="lazy"
  class="image"
  on:load={handleAfterImageLoad}
/>

<style>
  .image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: var(--unit-2);
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
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
