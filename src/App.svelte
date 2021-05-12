<script>
  import imagesList from './data/images-list';
  import Image from './components/Image.svelte';
  import Header from './components/TheHeader.svelte';
  import Footer from './components/TheFooter.svelte';
  import ContactBar from './components/ContactBar.svelte';

  const firstImage = imagesList[0];
  imagesList.shift();
</script>

<main class="App">
  <Image image={firstImage} />
  <Header />
  {#each imagesList as image}
    <Image {image} />
  {/each}
  <Footer />
  <ContactBar />
</main>

<style>
  .App {
    min-height: 100vh;
    background-color: var(--color-black);
    padding-top: var(--unit-4);
    padding-bottom: var(--unit-4);
  }

  @media only screen and (min-width: 1100px) {
    .App {
      padding-top: var(--unit-6);
    }
  }
</style>
