<script lang="ts">
  import { tilesSolution, isGame, tiles, win } from "$lib/refs.svelte";
  import { newEditor } from "$lib/shared.svelte";
</script>

<header class="items-center flex justify-center">
  {#if isGame.v}
    <span style:padding-top=10px>{win.v ? "You win!" : "Keep trying"}</span>
  {:else}
    <button class="rounded-b-lg" onclick={() => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {/if}
</header>
