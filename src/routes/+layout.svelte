<script>
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Shareogram</title>
</svelte:head>

{@render children()}
