<script lang="ts">
  import { isGame, win, sidebarOn, tiles, tilesSolution } from "$lib/refs.svelte";
  import { newEditor } from "$lib/main.svelte";
  import Reveal from "$lib/components/options/Reveal.svelte";
</script>

<header style:justify-content={isGame.v ? "space-between" : "center"}>
  <!-- prettier-ignore -->
  <button style:margin-right="4px" onclick={(): void => { sidebarOn.v = !sidebarOn.v; }}>Options</button>
  {#if isGame.v}
    <span>{win.v ? "You win!" : "Keep trying"}</span>
    <Reveal />
  {:else}
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {/if}
</header>

<style lang="scss">
  header {
    align-items: center;
    display: flex;
  }
</style>
