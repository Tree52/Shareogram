<script lang="ts">
  import { tilesSolution, sidebarOn, isGame, tiles, win } from "$lib/refs.svelte";
  import Reveal from "$lib/components/options/Reveal.svelte";
  import { newEditor } from "$lib/main.svelte";
</script>

<header style:justify-content={isGame.v ? "space-between" : "center"}>
  <button
    onclick={(): void => { sidebarOn.v = !sidebarOn.v; }}
    style:margin-right="4px"
  >Options</button>
  {#if isGame.v}
    <span>{win.v ? "You win!" : "Keep trying"}</span>
    <Reveal />
  {:else}
    <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {/if}
</header>

<style>
  header {
    align-items: center;
    display: flex;
  }
</style>
