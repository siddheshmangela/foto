<script>
  import { onMount } from 'svelte';
  import imagesList from './images-list.json';
  import Image from './components/Image.svelte';
  import Header from './components/TheHeader.svelte';
  import Footer from './components/TheFooter.svelte';
  import { loadImage } from './utils';

  let openTheGates = false;

  const firstImage = imagesList[0];
  imagesList.shift();

  const secondImage = imagesList[0];
  imagesList.shift();

  onMount(() => {
    async function preLoadImages() {
      try {
        await loadImage(imagesList[0].image);
        await loadImage(imagesList[1].image);
      } catch (e) {
        console.log(e);
      } finally {
        openTheGates = true;
      }
    }

    preLoadImages();

    return () => console.log('destroyed');
  });
</script>

<div class="App">
  {openTheGates}
  <Image image={firstImage} show={true} loading="eager" />
  <Header />
  <Image image={secondImage} show={true} loading="eager" />
  {#each imagesList as image}
    <Image {image} show={openTheGates} loading="lazy" />
  {/each}
  <Footer />
</div>

<style>
  .App {
    min-height: 100vh;
    background-color: var(--color-black);
    padding-top: var(--unit-4);
    padding-bottom: var(--unit-8);
  }

  @media only screen and (min-width: 1100px) {
    .App {
      padding-top: var(--unit-6);
    }
  }
</style>
