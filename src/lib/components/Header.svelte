<script lang="ts">
  import { tilesSolution, isGame, tiles, win } from "$lib/refs.svelte";
  import GitHub from "$lib/components/GitHub.svelte";
  import { newEditor } from "$lib/shared.svelte";
</script>

<header class="flex items-center justify-center">
  <GitHub />

  {#if isGame.v}
    <span class="pt-2.5">{win.v ? "You win!" : "Keep trying"}</span>
  {:else}
    <button class="rounded-b-lg" onclick={() => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {/if}
</header>
