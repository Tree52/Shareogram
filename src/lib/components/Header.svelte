<script lang="ts">
  import { tilesSolution, isGame, tiles, win } from "$lib/refs.svelte";
  import { newEditor } from "$lib/shared.svelte";
</script>

<header>
  {#if isGame.v}
    <span style:padding-top=10px>{win.v ? "You win!" : "Keep trying"}</span>
  {:else}
    <button onclick={() => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {/if}
</header>

<style>
  header {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  button {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
</style>
