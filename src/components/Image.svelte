<script>
  import { imageCdnUrl, detectIfMobile } from '../utils';
  export let image;

  const getImageUrl = (config = '') => {
    const imageConfig = config ? `,${config}` : '';

    return `${imageCdnUrl}${imageConfig}/foto/images/${image.image}`;
  };

  let imageSrc = detectIfMobile() ? getImageUrl('w=750') : getImageUrl();

  const handleImageError = (src = '') => {
    if (src && src.startsWith(imageCdnUrl)) {
      imageSrc = `/images/${image.image}`;
    }

    return;
  };
</script>

<img
  src={imageSrc}
  alt={image.name}
  loading="lazy"
  class="image"
  on:error={() => handleImageError(imageSrc)}
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
    min-height: 300px;
  }

  @media only screen and (min-width: 1100px) {
    .image {
      max-width: 930px;
      margin-bottom: var(--unit-5);
      min-height: 600px;
    }

    .image:first-child {
      max-width: 1050px;
      margin-bottom: 0;
    }
  }
</style>
