<script>
  import iconImports from './icons/icon-imports';
  export let name;
</script>

{#await iconImports[name]() then module}
  <svelte:component this={module.default} />
{/await}
