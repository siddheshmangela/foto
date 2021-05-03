<script>
  export let image;

  let imageSrc = image.image;

  const imageLoader = (src) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      }, 2000);
    });
  };

  const handleAfterImageLoad = async () => {
    const filenameArray = imageSrc.split('/');
    const fileName = filenameArray[filenameArray.length - 1];
    const { src = '' } = await imageLoader(`/images/${fileName}`);

    imageSrc = src;
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
