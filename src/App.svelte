<script>
  import imagesList from './images-list.json';
  import Image from './components/Image.svelte';
  import Header from './components/TheHeader.svelte';
  import Footer from './components/TheFooter.svelte';

  const firstImage = imagesList[0];
  imagesList.shift();
</script>

<div class="App">
  <Image image={firstImage} />
  <Header />
  {#each imagesList as image}
    <Image {image} />
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
