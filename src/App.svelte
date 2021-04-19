<!-- App.svelte -->
<script>
  /* component logic will go here */
  import imagesList from './images-list';
</script>

<div class="App">
  {#each imagesList as image}
    <img src={image.image} alt={image.name} />
  {/each}
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
  }

  :global(body) {
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .App {
    min-height: 100vh;
    background-color: black;
    padding-top: 48px;
  }

  :global(img) {
    width: 100vw;
    height: 250px;
    display: block;
    object-fit: contain;
    margin-bottom: 5px;
  }

  @media only screen and (min-width: 1100px) {
    :global(img) {
      height: 800px;
      margin-bottom: 32px;
    }
  }
</style>
